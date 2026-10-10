# QUY CHUẨN PHÁT TRIỂN & BẢO TRÌ DỰ ÁN (PROJECT DEVELOPMENT GUIDELINES)
> **Dự án:** Tran Trong Hieu — Backend Developer Portfolio  
> **Phiên bản:** 2.0.0 (TypeScript + Vite + CI/CD Automated Build)  
> **Dành cho Lập trình viên:** Đọc file này (`docs/DEVELOPMENT_GUIDELINES.md`)  
> **Dành cho AI Coding Agents:** Đọc file [AGENTS.md](file:///d:/FullStack/portfolio/AGENTS.md)  
> **Mục tiêu:** Cung cấp tài liệu quy định thống nhất cho bất kỳ Developer hoặc AI Agent nào khi tham gia phát triển, mở rộng hoặc triển khai CI/CD.

---

## 1. MỤC TIÊU DỰ ÁN & CÔNG NGHỆ HIỆN ĐẠI
* **Chủ thể:** Trần Trọng Hiếu — Backend Developer.
* **Định vị kỹ thuật:** Kỹ sư hệ thống phân tán, xử lý dữ liệu lớn (10 TB Big Data Migration, Worker Threads 6s ➔ 0.4s), tự động hóa quy trình nghiệp vụ (Camunda BPMN, RBAC/ABAC) và tối ưu hóa hiệu năng cao.
* **Phong cách thẩm mỹ:** **Technical Swiss Editorial Blueprint** (Tạp chí kiến trúc & bản vẽ kỹ thuật, typography tương phản cao, hỗ trợ song song Light Editorial ☀️ và Dark Blueprint 🌙).
* **Công nghệ hiện đại (Modern Toolchain):**
  * **TypeScript 5.x (Strict Mode):** Khai báo kiểu tường minh, an toàn tuyệt đối về mặt kiểu dữ liệu (`src/types/portfolio.ts`).
  * **Vite 5.x:** Bộ công cụ build siêu tốc, Hot Module Replacement (HMR) cực nhanh, đóng gói và nén asset tối ưu cho Production.
  * **CI/CD Tự động hóa:** Thiết lập GitHub Actions (`.github/workflows/deploy.yml`) tự động chạy `type-check`, `build` và deploy lên GitHub Pages mỗi khi push code lên `main`/`master`.

---

## 2. NGUYÊN TẮC CỐT LÕI (CORE PRINCIPLES)

### 🔵 Nguyên tắc 1: TYPE SAFETY & EXPLICIT DECLARATION
* Toàn bộ mã nguồn logic được viết bằng **TypeScript** với cấu hình nghiêm ngặt (`strict: true`, `noImplicitAny: true`).
* Mọi cấu trúc dữ liệu đều phải tuân theo các interface định nghĩa trong [`src/types/portfolio.ts`](file:///d:/FullStack/portfolio/src/types/portfolio.ts).
* Trước khi commit/push, luôn đảm bảo lệnh `npm run type-check` chạy thành công không có lỗi đỏ nào.

### 🔵 Nguyên tắc 2: SINGLE SOURCE OF TRUTH (Sửa 1 chỗ - Ăn toàn bộ)
* **Dữ liệu cá nhân, số liệu, dự án, kỹ năng, liên hệ:** Tập trung duy nhất tại [`src/config/profile-data.ts`](file:///d:/FullStack/portfolio/src/config/profile-data.ts).
  * Khi cần cập nhật thông tin: **CHỈ CẦN SỬA FILE NÀY**.
  * Dữ liệu được ép kiểu chặt chẽ theo `PortfolioData` interface, giúp IDE gợi ý cú pháp và bắt lỗi ngay khi gõ.
* **Biến giao diện, màu sắc Light/Dark, font chữ:** Tập trung duy nhất tại [`css/tokens.css`](file:///d:/FullStack/portfolio/css/tokens.css).

### 🔵 Nguyên tắc 3: CI/CD READY & AUTO DEPLOYMENT
* Quá trình build và deploy hoàn toàn tự động qua GitHub Actions.
* Quy trình làm việc hàng ngày:
  * Chạy thử nghiệm local: `npm run dev` (mở ngay `http://localhost:3000`).
  * Kiểm tra kiểu dữ liệu: `npm run type-check`.
  * Build thử nghiệm: `npm run build` (kết quả xuất ra thư mục `dist/`).
  * Đẩy code lên GitHub (`git push origin main`), GitHub Actions sẽ tự động biên dịch và triển khai lên trang web trực tuyến.

### 🔵 Nguyên tắc 4: QUY ĐỊNH ICON DÙNG 1 NGUỒN DUY NHẤT (SINGLE-SOURCE ICON REGISTRY)
* **Quy chuẩn nguồn:** Toàn bộ icon trong toàn bộ dự án **BẮT BUỘC** chỉ được lấy từ một nguồn duy nhất: **Lucide Icon System**.
* **Vị trí lưu trữ:** Được quản lý tập trung tại file **[`src/assets/icons.ts`](file:///d:/FullStack/portfolio/src/assets/icons.ts)**.
* **Tiêu chuẩn kỹ thuật đồng nhất:**
  * ViewBox: `0 0 24 24`
  * Stroke-width: `2px`
  * Fill: `none`
  * Stroke: `currentColor` (tự động ăn theo màu chữ của phần tử cha)
  * Stroke-linecap / Stroke-linejoin: `round`
* **NGHIÊM CẤM:**
  * Tuyệt đối không pha trộn FontAwesome, Bootstrap Icons, Material Design Icons hay emoji lộn xộn.
  * Tuyệt đối không dán trực tiếp mã SVG tự do vào template HTML hoặc các file controller.
* **Cách thêm icon mới:** Bổ sung key mới vào object `ICONS` trong `src/assets/icons.ts` theo đúng định dạng chuẩn, sau đó `import { ICONS }` vào nơi cần dùng.

---

## 3. CẤU TRÚC THƯ MỤC CHI TIẾT (DIRECTORY ARCHITECTURE)

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD Pipeline tự động build & deploy lên GitHub Pages
│
├── docs/
│   └── DEVELOPMENT_GUIDELINES.md   # [BẠN ĐANG Ở ĐÂY] Quy chuẩn phát triển và bảo trì
├── AGENTS.md                       # Chỉ dẫn và bảng định tuyến nhiệm vụ cho AI Coding Agents
├── README.md                       # Giới thiệu tổng quan và hướng dẫn chạy nhanh
├── package.json                    # Khai báo dependency (Vite, TypeScript) và build scripts
├── tsconfig.json                   # Cấu hình TypeScript Strict Type-Checking
├── vite.config.ts                  # Cấu hình Vite bundler cho Production
├── index.html                      # Khung Semantic HTML5 chuẩn SEO
│
├── src/
│   ├── types/
│   │   └── portfolio.ts            # Khai báo TypeScript Interfaces (PersonalInfo, CaseStudy, etc.)
│   ├── config/
│   │   └── profile-data.ts         # [SSOT] Dữ liệu nội dung duy nhất có định kiểu nghiêm ngặt
│   ├── controllers/
│   │   ├── theme.ts                # Điều khiển chuyển đổi Light Editorial & Dark Blueprint
│   │   ├── benchmark.ts            # Logic mô phỏng Worker Threads 15x Throughput Engine
│   │   └── architecture-flow.ts    # Logic sơ đồ tương tác BPMN & Enterprise Security
│   └── main.ts                     # TypeScript Application Entry Point
│
├── css/
│   ├── tokens.css                  # CSS Variables (:root, dark theme, font, grid)
│   ├── layout.css                  # Topbar, Hero layout, Metrics strip, Footer
│   ├── components.css              # Polaroid frame, pill badges, buttons, cards
│   └── interactive.css             # Giao diện Benchmark simulator và Architecture inspector
│
└── public/
    └── assets/
        ├── images/                 # Ảnh chân dung Polaroid film
        └── docs/                   # File CV PDF chính thức (Tran_Trong_Hieu_CV.pdf)
```

---

## 4. BẢNG TRA CỨU NHANH KHI CẦN THAY ĐỔI (QUICK LOOKUP CHEAT SHEET)

| Bạn muốn làm gì? | Mở file duy nhất này | Hướng dẫn thao tác |
| :--- | :--- | :--- |
| **Thay đổi thông tin liên hệ / CV / SĐT** | `src/config/profile-data.ts` | Sửa trong `profileData.personalInfo` |
| **Cập nhật nội dung song ngữ (Tiếng Anh / Tiếng Việt)** | `src/config/profile-data.ts` | Sửa trong `portfolioDictionary.en` hoặc `vi` |
| **Chỉnh sửa bộ chuyển đổi ngôn ngữ (i18n)** | `src/controllers/i18n.ts` | Tinh chỉnh logic chuyển ngôn ngữ & localStorage |
| **Chỉnh sửa hiệu ứng chuyển động & Scroll Reveal** | `src/controllers/animations.ts` | Tinh chỉnh IntersectionObserver & đếm số |
| **Bổ sung kiểu dữ liệu mới** | `src/types/portfolio.ts` | Thêm / chỉnh sửa `interface` |
| **Thêm / Sửa / Thay đổi Icon** | `src/assets/icons.ts` | Bổ sung vào registry `ICONS` (chuẩn Lucide) |
| **Đổi màu sắc chủ đạo / Font chữ / Lưới** | `css/tokens.css` | Sửa các CSS variables (`--bg-primary`, v.v.) |
| **Chỉnh sửa logic Worker Threads Simulator** | `src/controllers/benchmark.ts` | Sửa logic giả lập hiệu năng |
| **Chỉnh sửa sơ đồ tương tác Camunda / MinIO** | `src/controllers/architecture-flow.ts` | Sửa logic click node / code snippets |
| **Chỉnh sửa quy trình CI/CD build** | `.github/workflows/deploy.yml` | Chỉnh sửa các bước GitHub Actions |

---

## 5. LỆNH ĐIỀU HÀNH DỰ ÁN (PROJECT COMMANDS)

```bash
# Cài đặt thư viện
npm install

# Khởi chạy môi trường phát triển (Hot Module Replacement)
npm run dev

# Kiểm tra an toàn kiểu dữ liệu TypeScript (Zero errors)
npm run type-check

# Biên dịch gói Production tối ưu
npm run build

# Xem thử bản Production cục bộ
npm run preview
```
