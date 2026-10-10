# AI AGENT INSTRUCTIONS & OPERATING RULES (AGENTS.md)
> **Target Audience:** AI Coding Assistants (Antigravity, Gemini, Claude, Cursor, Copilot, ChatGPT, etc.)  
> **Project:** Tran Trong Hieu — Backend Developer Portfolio  
> **Modern Tech Stack:** **TypeScript (Strict Type-Safety) + Vite 5 + Modular CSS + GitHub Actions CI/CD**

---

## 🤖 CRITICAL DIRECTIVES FOR AI AGENTS (READ BEFORE ANY ACTION)

You are an AI Agent tasked with maintaining, extending, or fixing this portfolio. You MUST strictly adhere to the following rules:

### 1. 🛡️ STRICT TYPESCRIPT & TYPE SAFETY
* All codebase logic is written in **TypeScript (strict mode)**.
* Types and interfaces are centrally declared in [`src/types/portfolio.ts`](file:///d:/FullStack/portfolio/src/types/portfolio.ts).
* **NEVER use `any`**. Every data object, function argument, and event handler must have explicit typing.
* Whenever you modify code, always verify type correctness with:
  ```bash
  npm run type-check
  ```

### 2. 🧩 ENFORCE "SINGLE SOURCE OF TRUTH" (SSOT)
* **All personal data, metrics, projects, skills, contact info:** MUST live exclusively in [`src/config/profile-data.ts`](file:///d:/FullStack/portfolio/src/config/profile-data.ts).
  * **NEVER hardcode** names, numbers, project descriptions, or URLs into HTML templates or component files.
  * If the user asks to update information (e.g. "change phone number", "add project", "update metric from 10TB to 12TB"), **edit ONLY `src/config/profile-data.ts`**.
* **All styling tokens, theme colors, typography, spacing:** MUST live exclusively in [`css/tokens.css`](file:///d:/FullStack/portfolio/css/tokens.css).

### 3. 🚀 CI/CD & BUILD PIPELINE (GITHUB ACTIONS)
* Automated CI/CD pipeline is configured in [`.github/workflows/deploy.yml`](file:///d:/FullStack/portfolio/.github/workflows/deploy.yml).
* Every `git push` to `main` or `master` triggers:
  1. `npm ci` (Dependency installation)
  2. `npm run type-check` (`tsc --noEmit`)
  3. `npm run build` (`vite build` -> output to `dist/`)
  4. Automatic deployment to **GitHub Pages**.
* To test locally before committing:
  ```bash
  npm run build
  ```

### 4. 🎨 UNIFIED SINGLE-SOURCE ICON SYSTEM (LUCIDE ICONS ONLY)
* **Single Source Requirement:** Every icon used across the application MUST originate exclusively from [`src/assets/icons.ts`](file:///d:/FullStack/portfolio/src/assets/icons.ts).
* **Strict Specification:** Lucide Icon Standard (24x24 `viewBox`, `stroke-width="2"`, `fill="none"`, `stroke="currentColor"`, `stroke-linecap="round"`, `stroke-linejoin="round"`).
* **FORBIDDEN:** 
  * NEVER import or inject FontAwesome, Material Icons, Bootstrap Icons, or emojis.
  * NEVER paste arbitrary SVG markup directly into HTML templates or controller files.
* **Adding New Icons:** Add the typed SVG definition to the `ICONS` object in [`src/assets/icons.ts`](file:///d:/FullStack/portfolio/src/assets/icons.ts), then import and consume it.

### 5. 🔬 SURGICAL EDITS ONLY (NO DESTRUCTIVE REWRITES)
* Make pinpoint edits to the exact function, line, or interface needing change.
* Do not rewrite entire files.
* Preserve all comments, existing architectural patterns, and type constraints.

---

## 🗺️ AI AGENT ROUTING TABLE (Task ➔ Target File)

Find the user request in the left column and touch **ONLY** the designated file:

| User Request Type | Target File | What to do |
| :--- | :--- | :--- |
| Update contact, email, phone, location, GitHub | [`src/config/profile-data.ts`](file:///d:/FullStack/portfolio/src/config/profile-data.ts) | Edit `profileData.personalInfo` |
| Update metrics (10TB, 0.4s sync, 7k users) | [`src/config/profile-data.ts`](file:///d:/FullStack/portfolio/src/config/profile-data.ts) | Edit `profileData.keyMetrics` |
| Update bilingual profile content (EN / VI) | [`src/config/profile-data.ts`](file:///d:/FullStack/portfolio/src/config/profile-data.ts) | Edit `portfolioDictionary.en` or `portfolioDictionary.vi` |
| Language switching logic (i18n) | [`src/controllers/i18n.ts`](file:///d:/FullStack/portfolio/src/controllers/i18n.ts) | Edit language state & persistence |
| Animations & scroll reveal effects | [`src/controllers/animations.ts`](file:///d:/FullStack/portfolio/src/controllers/animations.ts) | Edit IntersectionObserver & telemetry counters |
| Add/modify TypeScript interfaces | [`src/types/portfolio.ts`](file:///d:/FullStack/portfolio/src/types/portfolio.ts) | Define/update typed interfaces |
| Add, modify or replace icons | [`src/assets/icons.ts`](file:///d:/FullStack/portfolio/src/assets/icons.ts) | Add/edit typed Lucide SVG in `ICONS` registry |
| Change colors, background, fonts, grid styles | [`css/tokens.css`](file:///d:/FullStack/portfolio/css/tokens.css) | Edit CSS variables (`:root` / `[data-theme="dark"]`) |
| Layout adjustments (Hero, Header, Footer) | [`css/layout.css`](file:///d:/FullStack/portfolio/css/layout.css) | Edit layout rules |
| Component styling (Polaroid card, badges, buttons) | [`css/components.css`](file:///d:/FullStack/portfolio/css/components.css) | Edit component classes |
| Benchmark simulator styling | [`css/interactive.css`](file:///d:/FullStack/portfolio/css/interactive.css) | Edit simulator styles |
| Benchmark simulator logic (15x Worker Threads) | [`src/controllers/benchmark.ts`](file:///d:/FullStack/portfolio/src/controllers/benchmark.ts) | Edit calculation & animation logic |
| Interactive Architecture diagram logic & nodes | [`src/controllers/architecture-flow.ts`](file:///d:/FullStack/portfolio/src/controllers/architecture-flow.ts) | Edit node event handlers & spec modals |
| Theme toggle (Light/Dark mode) persistence | [`src/controllers/theme.ts`](file:///d:/FullStack/portfolio/src/controllers/theme.ts) | Edit theme switching handler |
| Main DOM rendering pipeline | [`src/main.ts`](file:///d:/FullStack/portfolio/src/main.ts) | Edit template rendering logic |
| CI/CD Pipeline & GitHub Pages Deploy | [`.github/workflows/deploy.yml`](file:///d:/FullStack/portfolio/.github/workflows/deploy.yml) | Edit GitHub Actions steps |
| Vite build configuration & base URL | [`vite.config.ts`](file:///d:/FullStack/portfolio/vite.config.ts) | Edit Vite plugins/options |

---

## 📋 AGENT WORKFLOW PROTOCOL

When given a prompt by the user:
1. **Analyze user intent:** Match it against the Routing Table above.
2. **Open only the required file:** Do not load unrelated files.
3. **Execute minimal surgical change:** Apply the update directly.
4. **Run Type Check Verification:** Execute `npm run type-check` to confirm 0 compilation errors.
5. **Conclude concisely:** Confirm the exact file modified and that CI/CD build is green.
