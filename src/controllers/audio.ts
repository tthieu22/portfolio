/**
 * =========================================================================
 * AMBIENT CHILL AUDIO CONTROLLER (audio.ts)
 * =========================================================================
 * - Nhẹ nhàng phát nhạc nền chill khi truy cập trang web (audiochill.mp3 / .wav)
 * - Khởi động êm ái (Fade-in nhẹ nhàng từ 0 lên âm lượng mục tiêu trong ~2.5s)
 * - Tự động thích ứng Browser Autoplay Policy (kích hoạt mượt mà ngay khi người dùng tương tác/cuộn trang)
 * - Hỗ trợ thanh điều khiển âm lượng từ 1% - 100% và lưu tùy chọn vào localStorage
 * - Hiệu ứng Equalizer sóng âm hoạt họa chuẩn phong cách Swiss Blueprint
 * =========================================================================
 */

const STORAGE_KEY_VOLUME = 'portfolio_ambient_volume';
const STORAGE_KEY_STATE = 'portfolio_ambient_state';
const DEFAULT_TARGET_VOLUME = 0.18; // 18% - Âm lượng nhẹ nhàng, không gây chói tai
const FADE_IN_DURATION_MS = 2500; // 2.5 giây fade-in êm ái

class AmbientAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private currentVolume: number = DEFAULT_TARGET_VOLUME;
  private isUserMuted: boolean = false;
  private fadeInterval: number | null = null;
  private hasUnlocked: boolean = false;
  private btnElement: HTMLElement | null = null;
  private volumeSlider: HTMLInputElement | null = null;
  private volumeText: HTMLElement | null = null;

  constructor() {
    this.loadSavedPreferences();
  }

  private loadSavedPreferences(): void {
    try {
      const savedVol = localStorage.getItem(STORAGE_KEY_VOLUME);
      if (savedVol !== null) {
        const parsed = parseFloat(savedVol);
        if (!isNaN(parsed) && parsed >= 0.01 && parsed <= 1.0) {
          this.currentVolume = parsed;
        }
      }

      const savedState = localStorage.getItem(STORAGE_KEY_STATE);
      if (savedState === 'paused') {
        this.isUserMuted = true;
      }
    } catch {
      // Fallback nếu localStorage bị chặn
    }
  }

  public init(): void {
    // 1. Tạo audio element với MP3 stream (fallback WAV)
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.loop = true;

    // Kiểm tra định dạng hỗ trợ và BASE_URL
    const baseUrl = import.meta.env.BASE_URL || './';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const sourceMp3 = `${cleanBase}assets/audio/audiochill.mp3`;
    const sourceWav = `${cleanBase}assets/audio/audiochill.wav`;

    if (this.audio.canPlayType('audio/mpeg')) {
      this.audio.src = sourceMp3;
    } else {
      this.audio.src = sourceWav;
    }

    // Fallback sang WAV nếu MP3 gặp lỗi tải
    this.audio.addEventListener('error', () => {
      if (this.audio && this.audio.src.endsWith('.mp3')) {
        this.audio.src = sourceWav;
        if (!this.isUserMuted) {
          this.audio.play().catch(() => {});
        }
      }
    });

    this.audio.volume = 0; // Luôn bắt đầu từ 0 để fade-in êm ái

    // 2. Liên kết các phần tử UI
    this.btnElement = document.getElementById('ambient-audio-btn');
    this.volumeSlider = document.getElementById('ambient-volume-slider') as HTMLInputElement | null;
    this.volumeText = document.getElementById('ambient-volume-text');

    this.bindUiEvents();
    this.updateUiState(false);

    // 3. Nếu người dùng chưa chủ động tắt âm, kích hoạt phát nhạc nhẹ nhàng
    if (!this.isUserMuted) {
      this.attemptGentlePlay();
    }
  }

  /**
   * Thử phát nhạc ngay lập tức. Nếu trình duyệt chặn do Autoplay Policy,
   * tự động gắn cờ lắng nghe lượt tương tác đầu tiên của người dùng.
   */
  private attemptGentlePlay(): void {
    if (!this.audio) return;

    this.audio.play()
      .then(() => {
        this.hasUnlocked = true;
        this.fadeIn(this.currentVolume);
        this.updateUiState(true);
      })
      .catch(() => {
        // Trình duyệt chặn autoplay chưa có gesture -> Chờ tương tác đầu tiên
        this.setupFirstInteractionUnlock();
      });
  }

  private setupFirstInteractionUnlock(): void {
    if (this.hasUnlocked) return;

    const unlockHandler = () => {
      if (this.hasUnlocked || this.isUserMuted) return;
      this.hasUnlocked = true;

      // Xóa các listener sau khi đã unlock thành công
      window.removeEventListener('pointerdown', unlockHandler);
      window.removeEventListener('scroll', unlockHandler);
      window.removeEventListener('keydown', unlockHandler);
      window.removeEventListener('touchstart', unlockHandler);

      if (this.audio && this.audio.paused) {
        this.audio.play()
          .then(() => {
            this.fadeIn(this.currentVolume);
            this.updateUiState(true);
          })
          .catch(() => {
            // Safe fallback
          });
      }
    };

    window.addEventListener('pointerdown', unlockHandler, { once: true, passive: true });
    window.addEventListener('scroll', unlockHandler, { once: true, passive: true });
    window.addEventListener('keydown', unlockHandler, { once: true, passive: true });
    window.addEventListener('touchstart', unlockHandler, { once: true, passive: true });
  }

  /**
   * Hiệu ứng Fade-In êm ái từ mức âm lượng hiện tại lên mức mục tiêu
   */
  private fadeIn(targetVolume: number): void {
    if (!this.audio) return;
    if (this.fadeInterval !== null) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    const steps = 30;
    const stepDuration = FADE_IN_DURATION_MS / steps;
    const startVol = this.audio.volume;
    const volDelta = (targetVolume - startVol) / steps;
    let stepCount = 0;

    this.fadeInterval = window.setInterval(() => {
      stepCount++;
      if (!this.audio) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        return;
      }

      const nextVol = Math.min(1, Math.max(0, startVol + volDelta * stepCount));
      this.audio.volume = nextVol;

      if (stepCount >= steps) {
        this.audio.volume = targetVolume;
        if (this.fadeInterval) {
          clearInterval(this.fadeInterval);
          this.fadeInterval = null;
        }
      }
    }, stepDuration);
  }

  /**
   * Hiệu ứng Fade-Out nhẹ nhàng trước khi tạm dừng
   */
  private fadeOut(callback?: () => void): void {
    if (!this.audio) return;
    if (this.fadeInterval !== null) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    const steps = 15;
    const stepDuration = 500 / steps;
    const startVol = this.audio.volume;
    const volDelta = startVol / steps;
    let stepCount = 0;

    this.fadeInterval = window.setInterval(() => {
      stepCount++;
      if (!this.audio) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        return;
      }

      const nextVol = Math.max(0, startVol - volDelta * stepCount);
      this.audio.volume = nextVol;

      if (stepCount >= steps || nextVol <= 0.01) {
        this.audio.volume = 0;
        if (this.fadeInterval) {
          clearInterval(this.fadeInterval);
          this.fadeInterval = null;
        }
        if (callback) callback();
      }
    }, stepDuration);
  }

  /**
   * Chuyển đổi trạng thái bật / tắt (Play/Pause)
   */
  public togglePlayPause(): void {
    if (!this.audio) return;

    if (this.audio.paused || this.isUserMuted) {
      this.isUserMuted = false;
      this.audio.play()
        .then(() => {
          this.fadeIn(this.currentVolume);
          this.updateUiState(true);
          try {
            localStorage.setItem(STORAGE_KEY_STATE, 'playing');
          } catch {}
        })
        .catch(err => {
          console.warn('[AmbientAudio] Play error:', err);
        });
    } else {
      this.isUserMuted = true;
      this.fadeOut(() => {
        if (this.audio) this.audio.pause();
        this.updateUiState(false);
        try {
          localStorage.setItem(STORAGE_KEY_STATE, 'paused');
        } catch {}
      });
    }
  }

  /**
   * Điều chỉnh âm lượng từ 1% đến 100% (0.01 đến 1.0)
   */
  public setVolume(volPercentage: number): void {
    const clamped = Math.max(0.01, Math.min(1.0, volPercentage));
    this.currentVolume = clamped;

    if (this.audio && !this.audio.paused && !this.isUserMuted) {
      if (this.fadeInterval !== null) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }
      this.audio.volume = clamped;
    }

    try {
      localStorage.setItem(STORAGE_KEY_VOLUME, clamped.toString());
    } catch {}

    this.updateUiVolumeDisplay(clamped);
  }

  private updateUiState(isPlaying: boolean): void {
    if (!this.btnElement) return;

    if (isPlaying) {
      this.btnElement.classList.add('is-playing');
      this.btnElement.setAttribute('aria-pressed', 'true');
      this.btnElement.setAttribute('title', 'Tạm dừng nhạc chill');
    } else {
      this.btnElement.classList.remove('is-playing');
      this.btnElement.setAttribute('aria-pressed', 'false');
      this.btnElement.setAttribute('title', 'Bật nhạc chill');
    }

    this.updateUiVolumeDisplay(this.currentVolume);
  }

  private updateUiVolumeDisplay(vol: number): void {
    const pct = Math.round(vol * 100);
    if (this.volumeText) {
      this.volumeText.textContent = `${pct}%`;
    }
    if (this.volumeSlider) {
      this.volumeSlider.value = pct.toString();
    }
  }

  private bindUiEvents(): void {
    if (this.btnElement) {
      this.btnElement.addEventListener('click', (e) => {
        // Không trigger toggle nếu người dùng tương tác với thanh trượt âm lượng bên trong popover
        const target = e.target as HTMLElement;
        if (target && target.closest('.ambient-volume-flyout')) {
          return;
        }
        this.togglePlayPause();
      });
    }

    if (this.volumeSlider) {
      this.volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat((e.target as HTMLInputElement).value) / 100;
        this.setVolume(val);
      });
    }
  }
}

let ambientAudioInstance: AmbientAudioEngine | null = null;

export function initAmbientAudio(): AmbientAudioEngine {
  if (!ambientAudioInstance) {
    ambientAudioInstance = new AmbientAudioEngine();
    ambientAudioInstance.init();
  }
  return ambientAudioInstance;
}
