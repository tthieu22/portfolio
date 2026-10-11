# Trần Trọng Hiếu — Backend Developer Portfolio
> **Modern Tech Stack:** TypeScript (Strict) • Vite 5 • Modular CSS • GitHub Actions CI/CD  
> **Aesthetic:** Technical Swiss Editorial Blueprint (Light Editorial ☀️ & Dark Blueprint 🌙)

---

## ⚡ TÍNH NĂNG NỔI BẬT
1. **Type-Safe 100%:** Toàn bộ dữ liệu và logic được định kiểu bằng TypeScript tường minh ([`src/types/portfolio.ts`](file:///d:/FullStack/portfolio/src/types/portfolio.ts)).
2. **Single Source of Truth (SSOT):** Mọi thông tin cá nhân, dự án, số liệu đều tập trung tại [`src/config/profile-data.ts`](file:///d:/FullStack/portfolio/src/config/profile-data.ts).
3. **CI/CD Tự động hóa:** Tích hợp sẵn workflow [`.github/workflows/deploy.yml`](file:///d:/FullStack/portfolio/.github/workflows/deploy.yml) tự động kiểm tra type và deploy lên GitHub Pages khi push code.
4. **2 Module tương tác kỹ thuật cao:**
   - **Worker Threads Simulator:** Mô phỏng tối ưu hoá 10 TB dữ liệu từ 6.0s xuống 0.4s (tốc độ gấp 15.2x).
   - **Enterprise Architecture Flow:** Sơ đồ tương tác luồng Camunda BPMN (RBAC/ABAC), MinIO streaming và WebSocket.

---

## 🚀 HƯỚNG DẪN SỬ DỤNG & LỆNH ĐIỀU HÀNH

```bash
# Cài đặt dependencies (Vite + TypeScript)
npm install

# Chạy server phát triển cục bộ với Live Reload (HMR)
npm run dev

# Kiểm tra an toàn kiểu dữ liệu TypeScript (Zero errors)
npm run type-check

# Biên dịch ra thư mục dist/ phục vụ Production
npm run build

# Xem thử kết quả build Production
npm run preview
```

---

## 📖 TÀI LIỆU QUY CHUẨN DỰ ÁN
- 👉 **[docs/DEVELOPMENT_GUIDELINES.md](file:///d:/FullStack/portfolio/docs/DEVELOPMENT_GUIDELINES.md)**: Quy chuẩn dành cho Lập trình viên.
- 👉 **[AGENTS.md](file:///d:/FullStack/portfolio/AGENTS.md)**: Hướng dẫn và bảng định tuyến nhiệm vụ dành riêng cho AI Coding Agents.
