/**
 * =========================================================================
 * GLOBAL BACKEND DISTRIBUTED NETWORK CANVAS (canvas-network.ts)
 * =========================================================================
 * High-performance, lightweight Canvas simulation of distributed microservice
 * nodes with real-time data packet routing, mouse gravitation, dynamic laser
 * tethers, and theme-adaptive cyber-matrix aesthetics across the ENTIRE website.
 * Active seamlessly across all sections: Hero, Runway, Lab, Experience,
 * Projects, Skills, and Contact.
 * =========================================================================
 */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  isServiceNode: boolean;
  baseAlpha: number;
}

interface Packet {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export function initNetworkCanvas(): void {
  const canvas = document.getElementById('global-network-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = window.innerWidth;
  let height = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const resize = (): void => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  };

  resize();
  window.addEventListener('resize', resize, { passive: true });

  const isDarkMode = (): boolean => document.documentElement.getAttribute('data-theme') === 'dark';

  const SERVICE_LABELS = [
    'GATEWAY:8080',
    'WORKER_POOL',
    'CAMUNDA_BPMN',
    'SQL_CLUSTER',
    'REDIS_CACHE',
    'MINIO_S3',
    'KAFKA_BUS',
    'AUTH_RBAC',
    'TELEMETRY',
    'SHARD_ROUTER',
    'ASYNC_QUEUE',
    'CIRCUIT_BREAKER',
    'ETL_PIPELINE',
    'WEBSOCKET_PUB',
    'EVENT_STORE',
    'METRICS_INGEST',
    'HEALTH_MONITOR',
    'RATE_LIMITER'
  ];

  const nodes: Node[] = [];
  const packets: Packet[] = [];
  const mouse = { x: -1000, y: -1000, radius: 180 };

  // Generate Microservice & Sub-nodes across full screen width and height
  const totalNodes = Math.min(46, Math.max(26, Math.floor((width * height) / 32000)));
  for (let i = 0; i < totalNodes; i++) {
    const isService = i < SERVICE_LABELS.length;
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: isService ? 3.5 : 1.8,
      label: isService ? SERVICE_LABELS[i] : '',
      isServiceNode: isService,
      baseAlpha: isService ? 0.8 : 0.35
    });
  }

  // Spawn initial data packets
  for (let i = 0; i < 12; i++) {
    spawnPacket();
  }

  function spawnPacket(): void {
    if (nodes.length < 2) return;
    const src = Math.floor(Math.random() * nodes.length);
    let target = Math.floor(Math.random() * nodes.length);
    while (target === src) {
      target = Math.floor(Math.random() * nodes.length);
    }
    packets.push({
      sourceIndex: src,
      targetIndex: target,
      progress: 0,
      speed: 0.005 + Math.random() * 0.008,
      color: Math.random() > 0.35 ? '#10B981' : '#3B82F6'
    });
  }

  // Mouse interaction across the whole viewport
  window.addEventListener('mousemove', (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  const render = (): void => {
    ctx.clearRect(0, 0, width, height);
    const dark = isDarkMode();
    const nodeColor = dark ? '#10B981' : '#059669';
    const subNodeColor = dark ? 'rgba(255, 255, 255, 0.32)' : 'rgba(15, 23, 42, 0.25)';

    // Update node positions & Draw connections
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Mouse attraction / tethering across full viewport
      const dxMouse = mouse.x - node.x;
      const dyMouse = mouse.y - node.y;
      const distMouse = Math.hypot(dxMouse, dyMouse);
      if (distMouse < mouse.radius) {
        const force = (mouse.radius - distMouse) / mouse.radius;
        node.x += (dxMouse / distMouse) * force * 0.9;
        node.y += (dyMouse / distMouse) * force * 0.9;
      }

      // Connect to adjacent nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 140) {
          const alpha = (1 - dist / 140) * (dark ? 0.35 : 0.18);
          ctx.beginPath();
          ctx.strokeStyle = dark ? `rgba(16, 185, 129, ${alpha})` : `rgba(15, 23, 42, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }

      // Dynamic Laser Tether from Cursor to Nearby Nodes
      if (distMouse < 160 && mouse.x > 0 && mouse.y > 0) {
        const laserAlpha = (1 - distMouse / 160) * (dark ? 0.5 : 0.3);
        ctx.beginPath();
        ctx.strokeStyle = dark ? `rgba(16, 185, 129, ${laserAlpha})` : `rgba(5, 150, 105, ${laserAlpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw Node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.isServiceNode ? nodeColor : subNodeColor;
      ctx.fill();

      // Service Node Pulse & Label
      if (node.isServiceNode) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
        ctx.strokeStyle = dark ? 'rgba(16, 185, 129, 0.28)' : 'rgba(5, 150, 105, 0.22)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = dark ? 'rgba(255, 255, 255, 0.55)' : 'rgba(30, 41, 59, 0.65)';
        ctx.fillText(node.label, node.x + 7, node.y + 3);
      }
    }

    // Update & draw flying data packets
    for (let p = packets.length - 1; p >= 0; p--) {
      const pkt = packets[p];
      pkt.progress += pkt.speed;

      if (pkt.progress >= 1) {
        packets.splice(p, 1);
        spawnPacket();
        continue;
      }

      const src = nodes[pkt.sourceIndex];
      const dst = nodes[pkt.targetIndex];
      if (!src || !dst) continue;

      const px = src.x + (dst.x - src.x) * pkt.progress;
      const py = src.y + (dst.y - src.y) * pkt.progress;

      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = pkt.color;
      ctx.shadowColor = pkt.color;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(render);
  };

  render();
}
