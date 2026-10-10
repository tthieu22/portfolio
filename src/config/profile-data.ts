import type { PortfolioDictionary, ArchitectureDictionary, Language, PortfolioData, ArchitectureSpecMap } from '../types/portfolio';

/**
 * =========================================================================
 * SINGLE SOURCE OF TRUTH (SSOT) - BILINGUAL PROFILE DATA (EN / VI)
 * =========================================================================
 * Bao gồm đầy đủ các dự án thực chiến và dự án cá nhân từ GitHub:
 * SmartCollab, Haniu, AutoDubStudio, Expense Management, eSIM, Digitic Shop
 * =========================================================================
 */

export const portfolioDictionary: PortfolioDictionary = {
  en: {
    personalInfo: {
      name: "Tran Trong Hieu",
      englishName: "Tran Trong Hieu",
      role: "Backend Developer",
      subtitle: "Enterprise Backend & Distributed Systems",
      headline: "Experienced in building enterprise backend systems, workflow-driven applications, and large-scale data processing solutions. Skilled in developing production-grade services, designing APIs, implementing complex business workflows, integrating multiple systems, and optimizing system performance, with a strong focus on scalability, reliability, and maintainable software.",
      location: "Thanh Tri, Hanoi, Vietnam",
      phone: "0862 584 283",
      email: "tthieu.dev.02@gmail.com",
      githubUrl: "https://github.com/tthieu22",
      githubUsername: "tthieu22",
      statusBadge: "OPEN FOR OPPORTUNITIES",
      availability: "One month after receiving an official offer",
      avatarUrl: "./assets/images/avatar.jpg",
      avatarCaption: "HANOI, VN / BACKEND DEVELOPER",
      cvDownloadPath: "./assets/docs/Tran_Trong_Hieu_Backend_Developer_CV_EN.pdf"
    },

    keyMetrics: [
      {
        id: "data-migrated",
        value: "10 TB+",
        rawNumber: 10,
        suffix: " TB+",
        label: "Legacy Data Migrated",
        description: "Moved approximately 10 TB of legacy data from SharePoint and multiple SQL sources to SQL Server with zero data loss",
        tag: "BIG DATA"
      },
      {
        id: "sync-speedup",
        value: "15x",
        rawNumber: 15,
        suffix: "x",
        label: "Sync Speedup (6s ➔ 0.4s)",
        description: "Reduced synchronization time per document from ~6s to 0.4s using Worker Threads, data partitioning & parallel processing",
        tag: "PERFORMANCE"
      },
      {
        id: "enterprise-users",
        value: "7,000+",
        rawNumber: 7000,
        suffix: "+",
        label: "Enterprise Users Served",
        description: "Enterprise Document Management System for SNP (Saigon Newport Corporation) covering duty scheduling, meetings, and workflows",
        tag: "SCALE"
      },
      {
        id: "records-batch",
        value: "5M+",
        rawNumber: 5,
        suffix: "M+",
        label: "Records / Table Processed",
        description: "Processed 1M+ documents and related tables containing 4–5 million records each, spanning 2014 to 2026",
        tag: "BATCH PROCESSING"
      }
    ],

    caseStudies: [
      {
        id: "snp-doc-management",
        client: "SNP (Saigon Newport Corporation)",
        company: "LIFETEX TECHNOLOGY JSC",
        period: "Jul 2025 – Present",
        role: "Backend Developer",
        title: "Enterprise Document Management System — SNP",
        highlight: "Workflow-Driven Authorization & 7,000+ Users Scale",
        problem: "Saigon Newport Corporation needed an enterprise management system serving 7,000+ users to govern document lifecycles, meeting workflows, duty scheduling, reporting, and other internal business modules across multiple organizational roles.",
        solution: "Developed NestJS backend services integrated with Camunda BPMN, RBAC, and ABAC for workflow-driven authorization. Integrated with Java-based file-processing modules and MinIO storage for large-scale DOCX, PDF, and Excel exports with WebSocket notifications. Implemented OAuth2/JWT authentication, audit logging, and optimized SQL Server queries.",
        techStack: ["NestJS", "SQL Server", "TypeORM", "Camunda BPMN", "Redis", "WebSocket", "MinIO", "OAuth2", "JWT", "Java"],
        metrics: [
          "Supported 7,000+ enterprise users with high availability",
          "Engineered workflow-driven authorization via Camunda BPMN, RBAC, and ABAC",
          "Seamless integration with Java file modules for large-scale exports without heap memory leaks"
        ],
        architectureSummary: "Client Apps ➔ NestJS API Gateway ➔ Camunda BPMN Engine (RBAC/ABAC) ➔ MinIO Storage & SQL Server"
      },
      {
        id: "snp-data-sync",
        client: "SNP (Saigon Newport Corporation)",
        company: "LIFETEX TECHNOLOGY JSC",
        period: "Jul 2025 – Present",
        role: "Backend Developer",
        title: "Internal Data Synchronization Tool — SNP",
        highlight: "10 TB Migration: 6s ➔ 0.4s Synchronization Speedup",
        problem: "Need to synchronize and migrate ~10 TB of legacy enterprise data from SharePoint and multiple SQL sources to SQL Server, comprising over 1 million documents and related tables with 4–5 million records each (2014–2026). Initial timeline was estimated at nearly 2 months.",
        solution: "Built a high-performance data synchronization system in Node.js utilizing Worker Threads, data partitioning, and parallel batch processing. Implemented transactional processing and robust retry strategies for fault tolerance and strict data consistency.",
        techStack: ["Node.js", "Worker Threads", "SQL Server", "SharePoint", "Batch Processing", "Parallel Processing"],
        metrics: [
          "Shortened overall migration timeline from nearly 2 months down to 4–5 days",
          "Reduced synchronization time per document from ~6 seconds to 0.4 seconds (15x boost)",
          "Processed 1M+ documents and tables with 4–5 million records each with transactional safety"
        ],
        architectureSummary: "SharePoint & SQL Sources ➔ Chunk Partition Router ➔ 4x Worker Threads Engine ➔ Transactional SQL Server Writer"
      },
      {
        id: "mps-doc-system",
        client: "MPS (Ministry of Public Security)",
        company: "LIFETEX TECHNOLOGY JSC",
        period: "Apr 2025 – Jul 2025",
        role: "Backend Intern",
        title: "Document Management System — MPS",
        highlight: "Cross-Platform Real-time Notification & MongoDB Aggregations",
        problem: "Required a real-time notification backend service in a document management system to synchronize document updates and processing statuses across platforms, including mobile phones and computers.",
        solution: "Developed APIs and business logic for notification workflows to deliver timely processing status updates. Developed reporting and statistical features utilizing MongoDB Aggregation pipelines; maintained and extended APIs in a production system.",
        techStack: ["Node.js", "Express.js", "MongoDB", "MongoDB Aggregation", "WebSockets"],
        metrics: [
          "Built real-time notification engine keeping mobile and desktop clients in sync",
          "Sub-second reporting and statistics queries powered by MongoDB Aggregation"
        ],
        architectureSummary: "Document Event Dispatcher ➔ Real-time WebSocket Broker ➔ MongoDB Aggregation Reporting Engine"
      },
      {
        id: "ovatheme-vietnam",
        client: "Ovatheme Vietnam",
        company: "OVATHEME VIETNAM",
        period: "Jun 2024 – Mar 2025",
        role: "PHP Developer",
        title: "E-Commerce & Service Booking Platform Engineering",
        highlight: "Backend Features for E-commerce, Booking & Service Websites",
        problem: "Delivering customized and resilient backend features for high-traffic client websites with stringent query performance needs.",
        solution: "Developed and customized backend features for e-commerce, booking, and service websites. Implemented business logic and API integrations, worked with MySQL queries, and resolved issues found during testing and production maintenance. Collaborated on feature updates based on requirements.",
        techStack: ["PHP", "MySQL", "API Integrations", "E-commerce & Booking Systems"],
        metrics: [
          "Delivered customized business logic and secure API integrations",
          "Optimized MySQL database queries and resolved production maintenance tickets"
        ],
        architectureSummary: "Client Web Frontends ➔ PHP Backend Modules ➔ MySQL Relational Storage"
      }
    ],

    personalProjects: [
      {
        id: "autodub-studio",
        name: "AutoDubStudio",
        tagline: "100% Local AI Video Translation & Dubbing Desktop Engine",
        period: "2026",
        techStack: ["Python", "Tauri", "React", "TypeScript", "faster-whisper", "Ollama (Qwen)", "Piper TTS", "FFmpeg NVENC", "SQLite WAL"],
        description: "Engineered a local AI-driven desktop dubbing pipeline with zero cloud dependencies. Designed an asynchronous execution engine with WorkerPool, FIFO priority queues, file-based atomic locking (.lock), state checkpointing, pitch-preserving audio synchronization with FFmpeg atempo, and sidechain compression audio ducking.",
        github: "https://github.com/tthieu22/AutoDubStudio"
      },
      {
        id: "smart-collab",
        name: "SmartCollab",
        tagline: "AI Project Management Platform",
        period: "Nov 2025 – May 2026",
        techStack: ["NestJS", "Spring Boot", "Next.js", "PostgreSQL", "MongoDB", "Prisma", "RabbitMQ", "Redis", "Docker", "Socket.io"],
        description: "Built an AI-assisted project management platform using an API Gateway and backend services to support task management and real-time collaboration. Designed REST APIs and implemented JWT/OAuth2 authentication and role-based access control (RBAC). Used RabbitMQ for asynchronous processing and Redis/Socket.io for real-time features. Integrated AI-assisted requirement analysis and project planning, including WBS and task suggestions; containerized components with Docker.",
        github: "https://github.com/tthieu22/smart-collab",
        demo: "https://tthieu-smart-collab.vercel.app"
      },
      {
        id: "haniu-ecommerce",
        name: "Haniu",
        tagline: "E-commerce Platform (Modular Monolith)",
        period: "May 2026 – Jun 2026",
        techStack: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "Docker", "Spring Security", "JWT"],
        description: "Built an e-commerce website using a Modular Monolith architecture, organizing product, category, cart, order, customer, and promotion modules. Developed REST APIs, JWT authentication and authorization, guest checkout, and order tracking. Applied Optimistic Locking to reduce inventory inconsistencies under concurrent updates. Used PostgreSQL JSONB and optimized JPA/database queries, with attention to N+1 query issues.",
        github: "https://github.com/tthieu-team/haniu",
        demo: "https://haniu.vercel.app"
      },
      {
        id: "expense-management",
        name: "ExpenseManagement",
        tagline: "Personal Expense Management with AI-Assisted Note-Taking",
        period: "Graduation Project",
        techStack: ["C#", ".NET", "SQLite", "WPF", "AI Integration", "Data Analytics"],
        description: "Graduation Project at Thai Nguyen University of ICT (Software Engineering, GPA 3.1/4.0). Designed a personal finance management desktop application integrating AI-assisted intelligent transaction parsing, categorized expense/income tracking, automated budgeting threshold warnings, and analytical visual reports.",
        github: "https://github.com/tthieu22/expense-management"
      },
      {
        id: "esim-platform",
        name: "eSIM Travel Store",
        tagline: "International Travel eSIM E-Commerce Platform",
        period: "2024 – 2025",
        techStack: ["PHP", "WordPress", "WooCommerce", "MySQL", "JavaScript", "Payment Gateway"],
        description: "Built an international travel eSIM sales platform optimizing digital goods ordering workflows. Implemented customized product variations, automated instant eSIM delivery email pipelines, secure payment integration, and responsive catalog browsing for international travelers.",
        github: "https://github.com/tthieu22/esim"
      },
      {
        id: "digitic-shop",
        name: "Digitic Shop",
        tagline: "Full-Stack Electronic E-Commerce Platform",
        period: "2024",
        techStack: ["Node.js", "Express.js", "MongoDB", "React", "Redux", "JWT", "RESTful API"],
        description: "Developed a full-stack electronic store featuring product catalogs, brand/category filtering, shopping cart state management, checkout processes, customer order tracking, and administrative dashboard for inventory and sales reporting.",
        github: "https://github.com/tthieu22/digitic-shop"
      }
    ],

    technicalArsenal: [
      {
        category: "Languages & Backend",
        items: ["Java", "TypeScript", "JavaScript", "Node.js", "NestJS", "Express.js", "Spring Boot", "C# (.NET)", "PHP", "RESTful APIs", "GraphQL"]
      },
      {
        category: "Databases & Optimization",
        items: ["PostgreSQL (JSONB)", "SQL Server", "MongoDB (Aggregation)", "MySQL", "Redis (Cache)", "SQLite (WAL)", "Schema Design", "Query Optimization"]
      },
      {
        category: "Architecture & Processing",
        items: ["Microservices", "Modular Monolith", "API Gateway", "Event-driven Architecture", "Worker Threads", "Batch & Parallel Processing", "Tauri Desktop"]
      },
      {
        category: "Workflow & Security",
        items: ["Camunda BPMN", "RBAC", "ABAC", "OAuth2", "JWT", "Audit Logging", "Optimistic Locking"]
      },
      {
        category: "Real-time & AI Integration",
        items: ["WebSocket", "Socket.io", "RabbitMQ", "MinIO Storage", "Local AI (Whisper, Ollama Qwen, Piper TTS)", "AI WBS Decomposition"]
      },
      {
        category: "Tools, DevOps & Supporting",
        items: ["Docker", "Linux", "Git", "GitHub", "GitLab", "FFmpeg", "Postman", "Prisma", "Spring Data JPA", "Agile/Scrum", "Supporting: React, Next.js, Tailwind CSS, Zustand"]
      }
    ],

    education: {
      school: "Thai Nguyen University of Information and Communication Technology",
      degree: "Information Technology — Software Engineering",
      period: "Sep 2020 – Sep 2025",
      gpa: "3.1 / 4.0",
      graduationProject: "C# personal expense management application with AI-assisted note-taking."
    },

    ui: {
      navRole: "BACKEND DEVELOPER",
      navStatus: "SYS_STATUS: 100% HEALTHY",
      navClock: "HANOI",
      navLatency: "LATENCY: <12ms",
      navDownloadCv: "CV [PDF]",
      heroMeta: "01 / ENTERPRISE BACKEND & WORKFLOW SYSTEMS",
      heroBioLocation: "LOCATION",
      heroBioExpertise: "EXPERTISE",
      heroBioStatus: "AVAILABILITY",
      heroBtnBenchmark: "BENCHMARK LAB",
      heroBtnCases: "VIEW CASE STUDIES & EXPERIENCE",
      heroBtnCopyEmail: "COPY EMAIL",
      labSectionIndex: "01 // INTERACTIVE ENGINEERING LAB",
      labSectionTitle: "SYSTEMS IN ACTION",
      labSectionSubtitle: "Interactive telemetry demonstrating real-world backend engineering: 15x Worker Threads throughput and BPMN enterprise authorization.",
      tabBenchmark: "15x Worker Threads Benchmark",
      tabArchitecture: "Saigon Newport BPMN Architecture",
      benchTitle: "Internal Data Synchronization Tool (10 TB Migration)",
      benchSubtitle: "Simulating 1M+ document migration: Single-Threaded Legacy vs Parallel Worker Threads Partitioning",
      benchDataset1k: "1,000 Documents",
      benchDataset10k: "10,000 Documents",
      benchDataset50k: "50,000 Documents",
      benchBtnStart: "START BENCHMARK",
      benchBtnRunning: "RUNNING SIMULATION...",
      benchBtnRerun: "RE-RUN BENCHMARK",
      benchLegacyTitle: "LEGACY ENGINE",
      benchLegacySubtitle: "(Single-Threaded I/O)",
      benchWorkerTitle: "OPTIMIZED ARCHITECTURE (WORKER THREADS)",
      benchWorkerSubtitle: "(Worker Threads + Parallel Processing)",
      benchAvgLatency: "Avg Latency / Doc",
      benchProcessedDocs: "Processed Docs",
      benchProgressLabel: "Batch Sync Progress",
      benchLegacyNote: "• Legacy Bottleneck: SharePoint I/O throttling, single-threaded processing, initial timeline projected at nearly 2 months.",
      benchTelemetryHeader: "SYSTEM EVENT BUS TELEMETRY (LIVE LOGS)",
      archHeaderTitle: "Enterprise Document Management System — SNP (Saigon Newport)",
      archHeaderDesc: "Click on any architecture node below to inspect design decisions, ABAC security logic, and real production code snippets.",
      archInspectorBadge: "INTERACTIVE INSPECTOR",
      archInspectorProblem: "Business Challenge",
      archInspectorSolution: "Technical Implementation",
      archInspectorImpact: "Production Impact",
      archInspectorSnippetHeader: "Production Implementation Pattern",
      casesSectionIndex: "02 // PROFESSIONAL EXPERIENCE",
      casesSectionTitle: "ENTERPRISE EXPERIENCE",
      casesSectionSubtitle: "Production-grade enterprise services, high-throughput migrations, and real-time document workflows.",
      casesProblemHeader: "Business Scope & Challenge",
      casesSolutionHeader: "Technical Implementation",
      casesImpactHeader: "Key Achievements & Impact",
      projSectionIndex: "03 // FEATURED PROJECTS",
      projSectionTitle: "GITHUB & PERSONAL PROJECTS",
      projSectionSubtitle: "Local AI multimedia pipelines, high-concurrency e-commerce, AI project management, and full-stack systems.",
      skillsSectionIndex: "04 // TECHNICAL SKILLS",
      skillsSectionTitle: "SKILLS & ARSENAL",
      skillsSectionSubtitle: "Languages, Databases, Architecture, Security, Messaging, and Supporting Technologies.",
      contactSectionIndex: "05 // INITIATE CONTACT",
      contactCtaTitle: "LET'S BUILD\nSOMETHING SCALABLE.",
      contactCtaSubtitle: "Backend Developer experienced in enterprise systems, high concurrency, and data processing. Available within one month after receiving an official offer.",
      contactBtnEmail: "SEND DIRECT EMAIL",
      contactBtnCopy: "COPY EMAIL",
      contactCardHeader: "PROFESSIONAL TRANSMISSION CARD",
      contactPhoneLabel: "PHONE",
      contactLocationLabel: "LOCATION",
      contactGithubLabel: "GITHUB",
      contactAvailLabel: "AVAILABILITY",
      footerCopyright: "© 2026 TRAN TRONG HIEU • BACKEND DEVELOPER",
      footerBackTop: "BACK TO TOP",
      heroTag1: "NESTJS",
      heroTag2: "SPRING BOOT",
      heroTag3: "10 TB MIGRATION",
      heroTag4: "CAMUNDA BPMN",
      runwayTopTitle: "FULLSCREEN ARCHITECTURAL RUNWAY // PINNED 100VH",
      runwayPill1: "01 // 10 TB PIPELINE",
      runwayPill2: "02 // 15x THREADS",
      runwayPill3: "03 // CAMUNDA BPMN",
      runwayPill4: "04 // LOCAL AI ENGINE",
      runwayCh1Tag: "CHAPTER 01 // BIG DATA MIGRATION",
      runwayCh1Title: "10 TB LEGACY PIPELINE",
      runwayCh1MissionHeader: "ARCHITECTURAL MISSION",
      runwayCh1MissionDesc: "Moving 10 Terabytes of historical enterprise data from fragmented SharePoint APIs and disparate SQL instances into a consolidated SQL Server warehouse.",
      runwayCh1Client: "CLIENT: SAIGON NEWPORT CORPORATION (SNP)",
      runwayCh1Result: "RESULT: ~60 DAYS SLASHED TO 4.5 DAYS ➔",
      runwayCh2Tag: "CHAPTER 02 // HARDWARE CONCURRENCY",
      runwayCh2Title: "15x WORKER THREADS",
      runwayCh2BottleneckHeader: "BOTTLENECK OVERCOME",
      runwayCh2BottleneckDesc: "Eradicated single-threaded Node.js event-loop starvation by spawning a multi-threaded WorkerPool with chunk partitioning and SharedArrayBuffer synchronization.",
      runwayCh2MatrixTitle: "8-CORE CPU PARTITION THREADPOOL",
      runwayCh2Starvation: "EVENT LOOP STARVATION: RESOLVED",
      runwayCh2Stack: "STACK: NODE.JS WORKER THREADS • BATCH PROCESSING",
      runwayCh2Fault: "FAULT TOLERANCE: TRANSACTIONAL ROLLBACK ➔",
      runwayCh3Tag: "CHAPTER 03 // ENTERPRISE GOVERNANCE",
      runwayCh3Title: "CAMUNDA BPMN CORE",
      runwayCh3SecHeader: "WORKFLOW-DRIVEN SECURITY",
      runwayCh3SecDesc: "Orchestrated dynamic enterprise workflows serving 7,000+ users. Integrated hybrid RBAC + ABAC access control matrices without recompiling or redeploying backend services.",
      runwayCh3EngineTitle: "SNP ENTERPRISE 5-STAGE WORKFLOW ENGINE",
      runwayCh3AuditBadge: "● AUDIT COMPLIANCE: 100% PASS",
      runwayCh3MemoryBadge: "MEMORY: ZERO HEAP SPIKES",
      runwayCh3System: "SYSTEM: ENTERPRISE DOCUMENT & MEETING WORKFLOWS",
      runwayCh3Security: "SECURITY: OAUTH2 • JWT AUDIT LOGGING ➔",
      runwayCh4Tag: "CHAPTER 04 // LOCAL AI PIPELINE",
      runwayCh4Title: "AUTODUB MULTIMEDIA",
      runwayCh4OffHeader: "OFFLINE MULTIMEDIA PIPELINE",
      runwayCh4OffDesc: "Engineered AutoDubStudio: A 100% local AI video translation and dubbing desktop engine with zero cloud APIs. Orchestrated Whisper, Ollama (Qwen), Piper TTS, and NVENC GPU video acceleration.",
      runwayCh4ChainTitle: "100% OFFLINE INFERENCE CHAIN (ZERO CLOUD LEAK)",
      runwayCh4StatusPrivacy: "100% Local GPU / Privacy First",
      runwayCh4Result: "COMPLETE // CONTINUE TO BENCHMARK LAB",
      runwayBottomLeft: "LATERAL VIEWPORT STREAM // INTERACTIVE SCROLL TRIGGERED",
      runwayBottomRight: "SYSTEM RADAR: 4 OF 4 NODES ONLINE",
      archNode1Title: "Client Layer",
      archNode1Subtitle: "7,000+ Users • Web & App",
      archNode2Title: "NestJS Gateway",
      archNode2Subtitle: "OAuth2 • JWT Guards",
      archNode3Title: "Camunda BPMN",
      archNode3Subtitle: "Dynamic RBAC + ABAC",
      archNode4Title: "File Workers",
      archNode4Subtitle: "DOCX/PDF Stream Java",
      archNode5Title: "Storage Tier",
      archNode5Subtitle: "SQL Server • MinIO • Redis",
      archProblemHeader: "Technical Challenge (Problem)",
      archSolutionHeader: "Architectural Solution",
      archImpactHeader: "Measured Impact",
      archPatternHeader: "Production Implementation Pattern",
      benchBottleneckBadge: "BOTTLENECK",
      benchBoostBadge: "15.2x BOOST",
      benchThreadParallel: "PARALLEL",
      footerLatency: "LATENCY: <10ms",
      footerNominal: "● ALL SYSTEMS NOMINAL",
      toastEmailCopied: "Copied email address: "
    }
  },

  vi: {
    personalInfo: {
      name: "Trần Trọng Hiếu",
      englishName: "Tran Trong Hieu",
      role: "Backend Developer",
      subtitle: "Hệ Thống Doanh Nghiệp & Xử Lý Dữ Liệu Lớn",
      headline: "Kỹ sư Backend có kinh nghiệm xây dựng các hệ thống backend doanh nghiệp, ứng dụng hướng quy trình và các giải pháp xử lý dữ liệu lớn. Thành thạo phát triển dịch vụ production-grade, thiết kế API, hiện thực hóa các quy trình nghiệp vụ phức tạp, tích hợp đa hệ thống và tối ưu hóa hiệu năng, tập trung mạnh mẽ vào khả năng mở rộng, độ tin cậy và phần mềm dễ bảo trì.",
      location: "Thanh Trì, Hà Nội, Việt Nam",
      phone: "0862 584 283",
      email: "tthieu.dev.02@gmail.com",
      githubUrl: "https://github.com/tthieu22",
      githubUsername: "tthieu22",
      statusBadge: "SẴN SÀNG ĐÓN NHẬN CƠ HỘI",
      availability: "Sẵn sàng nhận việc 1 tháng sau khi nhận được offer chính thức",
      avatarUrl: "./assets/images/avatar.jpg",
      avatarCaption: "HÀ NỘI, VN / BACKEND DEVELOPER",
      cvDownloadPath: "./assets/docs/Tran_Trong_Hieu_Backend_Developer_CV_EN.pdf"
    },

    keyMetrics: [
      {
        id: "data-migrated",
        value: "10 TB+",
        rawNumber: 10,
        suffix: " TB+",
        label: "Dữ Liệu Lịch Sử Đã Di Chuyển",
        description: "Di chuyển xấp xỉ 10 TB dữ liệu từ SharePoint và nhiều nguồn SQL sang SQL Server với 100% tính toàn vẹn",
        tag: "BIG DATA"
      },
      {
        id: "sync-speedup",
        value: "15x",
        rawNumber: 15,
        suffix: "x",
        label: "Tối Ưu Độ Trễ: 6s ➔ 0.4s",
        description: "Giảm thời gian đồng bộ mỗi tài liệu từ khoảng 6 giây xuống 0.4 giây nhờ Worker Threads, phân vùng dữ liệu và xử lý song song",
        tag: "HIỆU NĂNG"
      },
      {
        id: "enterprise-users",
        value: "7,000+",
        rawNumber: 7000,
        suffix: "+",
        label: "Quy Mô Người Dùng Doanh Nghiệp",
        description: "Hệ thống quản lý văn bản doanh nghiệp cho SNP (Tân Cảng Sài Gòn) phục vụ quy trình họp, lịch trực và nghiệp vụ",
        tag: "QUY MÔ"
      },
      {
        id: "records-batch",
        value: "5M+",
        rawNumber: 5,
        suffix: "M+",
        label: "Bản Ghi / Bảng Xử Lý Batch",
        description: "Xử lý hơn 1 triệu tài liệu và các bảng liên quan chứa 4–5 triệu bản ghi mỗi bảng, bao quát dữ liệu từ 2014 đến 2026",
        tag: "BATCH PROCESSING"
      }
    ],

    caseStudies: [
      {
        id: "snp-doc-management",
        client: "SNP (Tổng công ty Tân Cảng Sài Gòn)",
        company: "LIFETEX TECHNOLOGY JSC",
        period: "07/2025 – Hiện tại",
        role: "Backend Developer",
        title: "Hệ Thống Quản Lý Văn Bản Doanh Nghiệp — SNP",
        highlight: "Phân Quyền Theo Quy Trình & Phục Vụ 7,000+ Người Dùng",
        problem: "Phát triển các dịch vụ backend NestJS cho hệ thống quản lý doanh nghiệp phục vụ 7,000+ người dùng, bao quát quản lý văn bản, quy trình họp, phân công lịch trực, báo cáo và các module nghiệp vụ nội bộ khác.",
        solution: "Thiết kế phân quyền dựa trên quy trình sử dụng Camunda BPMN, RBAC và ABAC để quản lý quy trình nghiệp vụ, vòng đời văn bản và quyền truy cập theo vai trò tổ chức. Tích hợp các dịch vụ NestJS với module xử lý file Java, lưu trữ MinIO và thông báo WebSocket; hỗ trợ xuất file DOCX, PDF, Excel dung lượng lớn. Triển khai xác thực OAuth2/JWT, audit logging và tối ưu hóa truy vấn SQL Server.",
        techStack: ["NestJS", "SQL Server", "TypeORM", "Camunda BPMN", "Redis", "WebSocket", "MinIO", "OAuth2", "JWT", "Java"],
        metrics: [
          "Phục vụ 7,000+ người dùng doanh nghiệp với độ ổn định cao",
          "Thiết kế phân quyền quy trình động qua Camunda BPMN, RBAC và ABAC",
          "Tích hợp xuất file DOCX/PDF/Excel quy mô lớn qua Java & MinIO không tràn bộ nhớ"
        ],
        architectureSummary: "Client Apps ➔ NestJS Gateway ➔ Camunda BPMN (RBAC/ABAC) ➔ MinIO & SQL Server"
      },
      {
        id: "snp-data-sync",
        client: "SNP (Tổng công ty Tân Cảng Sài Gòn)",
        company: "LIFETEX TECHNOLOGY JSC",
        period: "07/2025 – Hiện tại",
        role: "Backend Developer",
        title: "Công Cụ Đồng Bộ Dữ Liệu Nội Bộ — SNP",
        highlight: "Di Chuyển 10 TB Dữ Liệu: 6 Giây ➔ 0.4 Giây / Tài Liệu",
        problem: "Xây dựng hệ thống đồng bộ và di chuyển khoảng 10 TB dữ liệu cũ từ SharePoint và nhiều nguồn SQL sang SQL Server, bao gồm hơn 1 triệu tài liệu và các bảng liên quan chứa 4–5 triệu bản ghi mỗi bảng (dữ liệu 2014 - 2026). Thời gian ban đầu ước tính gần 2 tháng.",
        solution: "Áp dụng Worker Threads, phân vùng dữ liệu và xử lý song song trên Node.js. Giảm thời gian đồng bộ mỗi tài liệu từ khoảng 6 giây xuống 0.4 giây. Rút ngắn toàn bộ thời gian di chuyển từ gần 2 tháng xuống còn 4–5 ngày; triển khai chiến lược retry và xử lý giao dịch transactional để nâng cao khả năng chịu lỗi và tính nhất quán dữ liệu.",
        techStack: ["Node.js", "Worker Threads", "SQL Server", "SharePoint", "Batch Processing", "Parallel Processing"],
        metrics: [
          "Rút ngắn thời gian di chuyển toàn diện từ gần 2 tháng xuống còn 4–5 ngày",
          "Giảm thời gian đồng bộ mỗi tài liệu từ ~6s xuống 0.4s (tăng tốc 15 lần)",
          "Xử lý thành công hơn 1 triệu tài liệu và 4–5 triệu bản ghi/bảng"
        ],
        architectureSummary: "Nguồn SharePoint & SQL ➔ Phân Vùng Dữ Liệu ➔ 4x Worker Threads ➔ SQL Server Writer"
      },
      {
        id: "mps-doc-system",
        client: "Bộ Công An (MPS)",
        company: "LIFETEX TECHNOLOGY JSC",
        period: "04/2025 – 07/2025",
        role: "Backend Intern",
        title: "Hệ Thống Quản Lý Văn Bản — Bộ Công An",
        highlight: "Thông Báo Thời Gian Thực & MongoDB Aggregation",
        problem: "Xây dựng dịch vụ backend gửi và nhận thông báo thời gian thực trong hệ thống quản lý văn bản, đồng bộ cập nhật văn bản và trạng thái xử lý trên đa nền tảng bao gồm điện thoại và máy tính.",
        solution: "Phát triển API và logic nghiệp vụ cho các luồng thông báo, giúp người dùng nhận thông tin kịp thời khi văn bản chuyển tiếp qua các giai đoạn xử lý. Phát triển các tính năng báo cáo, thống kê sử dụng MongoDB Aggregation; bảo trì, mở rộng API và xử lý lỗi trên hệ thống production.",
        techStack: ["Node.js", "Express.js", "MongoDB", "MongoDB Aggregation", "WebSockets"],
        metrics: [
          "Xây dựng dịch vụ thông báo thời gian thực đồng bộ trên điện thoại và máy tính",
          "Phát triển tính năng báo cáo thống kê sub-second với MongoDB Aggregation"
        ],
        architectureSummary: "Event Dispatcher ➔ Real-time WebSocket Broker ➔ MongoDB Aggregation Engine"
      },
      {
        id: "ovatheme-vietnam",
        client: "Ovatheme Vietnam",
        company: "OVATHEME VIETNAM",
        period: "06/2024 – 03/2025",
        role: "PHP Developer",
        title: "Phát Triển Backend E-Commerce & Hệ Thống Đặt Chỗ",
        highlight: "Tính Năng Backend Cho Website Thương Mại Điện Tử & Dịch Vụ",
        problem: "Phát triển và tùy biến các tính năng backend cho các website thương mại điện tử, đặt chỗ (booking) và dịch vụ.",
        solution: "Hiện thực hóa logic nghiệp vụ và tích hợp API, làm việc với các truy vấn MySQL và xử lý các lỗi phát sinh trong quá trình kiểm thử và bảo trì production. Duy trì các chức năng hiện có và phối hợp cập nhật tính năng mới theo yêu cầu dự án.",
        techStack: ["PHP", "MySQL", "Tích Hợp API", "Hệ Thống E-commerce & Booking"],
        metrics: [
          "Phát triển logic nghiệp vụ và tích hợp API ổn định",
          "Tối ưu hóa các truy vấn MySQL và bảo trì các hệ thống đang vận hành"
        ],
        architectureSummary: "Web Frontends ➔ PHP Backend Modules ➔ MySQL Relational Storage"
      }
    ],

    personalProjects: [
      {
        id: "autodub-studio",
        name: "AutoDubStudio",
        tagline: "Ứng Dụng Desktop Dịch & Lồng Tiếng Video Bằng AI Cục Bộ (100% Local)",
        period: "2026",
        techStack: ["Python", "Tauri", "React", "TypeScript", "faster-whisper", "Ollama (Qwen)", "Piper TTS", "FFmpeg NVENC", "SQLite WAL"],
        description: "Kiến trúc pipeline lồng tiếng video bằng AI chạy cục bộ hoàn toàn không phụ thuộc cloud API. Thiết kế engine điều phối bất đồng bộ với WorkerPool, hàng đợi FIFO theo mức độ ưu tiên, cơ chế atomic locking dựa trên file (.lock), lưu checkpoint từng giai đoạn, đồng bộ âm thanh giữ nguyên cao độ (pitch-preserving) bằng FFmpeg atempo và kỹ thuật ducking âm thanh nền qua sidechain compression.",
        github: "https://github.com/tthieu22/AutoDubStudio"
      },
      {
        id: "smart-collab",
        name: "SmartCollab",
        tagline: "Nền Tảng Quản Lý Dự Án Hỗ Trợ Bởi AI",
        period: "11/2025 – 05/2026",
        techStack: ["NestJS", "Spring Boot", "Next.js", "PostgreSQL", "MongoDB", "Prisma", "RabbitMQ", "Redis", "Docker", "Socket.io"],
        description: "Xây dựng nền tảng quản lý dự án hỗ trợ bởi AI sử dụng API Gateway và các dịch vụ backend phục vụ quản lý tác vụ và cộng tác thời gian thực. Thiết kế REST API, triển khai xác thực JWT/OAuth2 và phân quyền RBAC. Sử dụng RabbitMQ cho xử lý bất đồng bộ và Redis/Socket.io cho các tính năng thời gian thực. Tích hợp AI phân tích yêu cầu và lập kế hoạch dự án (bao gồm cấu trúc WBS và gợi ý tác vụ); container hóa các thành phần bằng Docker.",
        github: "https://github.com/tthieu22/smart-collab",
        demo: "https://tthieu-smart-collab.vercel.app"
      },
      {
        id: "haniu-ecommerce",
        name: "Haniu",
        tagline: "Nền Tảng Thương Mại Điện Tử (Modular Monolith)",
        period: "05/2026 – 06/2026",
        techStack: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "Docker", "Spring Security", "JWT"],
        description: "Xây dựng website thương mại điện tử theo kiến trúc Modular Monolith, tổ chức các module sản phẩm, danh mục, giỏ hàng, đơn hàng, khách hàng và khuyến mãi. Phát triển REST API, xác thực và phân quyền JWT, guest checkout và theo dõi đơn hàng. Áp dụng Optimistic Locking để giảm thiểu không nhất quán tồn kho khi có cập nhật đồng thời. Sử dụng PostgreSQL JSONB và tối ưu hóa truy vấn JPA/database, chú trọng giải quyết vấn đề N+1 query.",
        github: "https://github.com/tthieu-team/haniu",
        demo: "https://haniu.vercel.app"
      },
      {
        id: "expense-management",
        name: "ExpenseManagement",
        tagline: "Quản Lý Tài Chính Cá Nhân Tích Hợp AI Ghi Chép Thông Minh",
        period: "Đồ án tốt nghiệp",
        techStack: ["C#", ".NET", "SQLite", "WPF", "AI Integration", "Phân tích Dữ liệu"],
        description: "Đồ án tốt nghiệp tại Trường Đại học CNTT & Truyền thông Thái Nguyên (Kỹ thuật phần mềm, GPA 3.1/4.0). Thiết kế ứng dụng desktop quản lý tài chính cá nhân tích hợp trợ lý AI phân tích và tự động bóc tách giao dịch từ ghi chép, theo dõi thu chi theo danh mục, cảnh báo hạn mức ngân sách và xuất báo cáo trực quan.",
        github: "https://github.com/tthieu22/expense-management"
      },
      {
        id: "esim-platform",
        name: "eSIM Travel Store",
        tagline: "Nền Tảng Thương Mại Điện Tử Bán eSIM Du Lịch Quốc Tế",
        period: "2024 – 2025",
        techStack: ["PHP", "WordPress", "WooCommerce", "MySQL", "JavaScript", "Cổng thanh toán"],
        description: "Xây dựng nền tảng thương mại điện tử chuyên biệt bán eSIM du lịch quốc tế, tối ưu hóa quy trình đặt hàng sản phẩm số. Tùy biến các gói dữ liệu theo quốc gia, tự động hóa luồng gửi mã QR eSIM qua email sau thanh toán, tích hợp cổng thanh toán trực tuyến và giao diện tra cứu gói cước nhanh.",
        github: "https://github.com/tthieu22/esim"
      },
      {
        id: "digitic-shop",
        name: "Digitic Shop",
        tagline: "Hệ Thống Bán Lẻ & Quản Lý Đơn Hàng Điện Tử Full-Stack",
        period: "2024",
        techStack: ["Node.js", "Express.js", "MongoDB", "React", "Redux", "JWT", "RESTful API"],
        description: "Phát triển hệ thống web bán hàng đồ điện tử hoàn chỉnh: quản lý danh mục sản phẩm, bộ lọc tìm kiếm theo thương hiệu/giá, giỏ hàng, quy trình checkout đơn hàng, tích hợp xác thực JWT an toàn và trang Dashboard quản trị cho admin theo dõi tồn kho và doanh thu.",
        github: "https://github.com/tthieu22/digitic-shop"
      }
    ],

    technicalArsenal: [
      {
        category: "Languages & Backend",
        items: ["Java", "TypeScript", "JavaScript", "Node.js", "NestJS", "Express.js", "Spring Boot", "C# (.NET)", "PHP", "RESTful APIs", "GraphQL"]
      },
      {
        category: "Databases & Tối Ưu Hóa",
        items: ["PostgreSQL (JSONB)", "SQL Server", "MongoDB (Aggregation)", "MySQL", "Redis (Cache)", "SQLite (WAL)", "Thiết kế Schema", "Tối ưu hóa Truy vấn"]
      },
      {
        category: "Kiến Trúc & Xử Lý",
        items: ["Microservices", "Modular Monolith", "API Gateway", "Event-driven Architecture", "Worker Threads", "Batch & Song song", "Tauri Desktop"]
      },
      {
        category: "Quy Trình & Bảo Mật",
        items: ["Camunda BPMN", "RBAC", "ABAC", "OAuth2", "JWT", "Audit Logging", "Optimistic Locking"]
      },
      {
        category: "Thời Gian Thực & Tích Hợp AI",
        items: ["WebSocket", "Socket.io", "RabbitMQ", "MinIO Storage", "Local AI (Whisper, Ollama Qwen, Piper TTS)", "Tích hợp AI WBS"]
      },
      {
        category: "Công Cụ, DevOps & Frontend Phụ Trợ",
        items: ["Docker", "Linux", "Git", "GitHub", "GitLab", "FFmpeg", "Postman", "Prisma", "Spring Data JPA", "Agile/Scrum", "Frontend phụ trợ: React, Next.js, Tailwind CSS, Zustand"]
      }
    ],

    education: {
      school: "Trường Đại học Công nghệ Thông tin và Truyền thông Thái Nguyên",
      degree: "Công nghệ Thông tin — Kỹ thuật Phần mềm",
      period: "09/2020 – 09/2025",
      gpa: "3.1 / 4.0",
      graduationProject: "Ứng dụng quản lý chi tiêu cá nhân C# với AI hỗ trợ ghi chép thông minh."
    },

    ui: {
      navRole: "BACKEND DEVELOPER",
      navStatus: "HỆ THỐNG: 100% HOẠT ĐỘNG",
      navClock: "HÀ NỘI",
      navLatency: "ĐỘ TRỄ: <12ms",
      navDownloadCv: "TẢI CV [PDF]",
      heroMeta: "01 / HỆ THỐNG BACKEND DOANH NGHIỆP & QUY TRÌNH",
      heroBioLocation: "ĐỊA ĐIỂM",
      heroBioExpertise: "CHUYÊN MÔN",
      heroBioStatus: "SẴN SÀNG NHẬN VIỆC",
      heroBtnBenchmark: "BENCHMARK LAB",
      heroBtnCases: "XEM KINH NGHIỆM THỰC CHIẾN",
      heroBtnCopyEmail: "SAO CHÉP EMAIL",
      labSectionIndex: "01 // LAB MÔ PHỎNG HIỆU NĂNG",
      labSectionTitle: "HỆ THỐNG VẬN HÀNH THỰC TẾ",
      labSectionSubtitle: "Mô phỏng trực quan giải pháp kỹ thuật: Đo lường thông lượng đa luồng Worker Threads và mô hình phân quyền Camunda BPMN doanh nghiệp.",
      tabBenchmark: "Benchmark 15x Worker Threads",
      tabArchitecture: "Kiến Trúc BPMN Saigon Newport",
      benchTitle: "Công Cụ Đồng Bộ Dữ Liệu Nội Bộ (10 TB Migration)",
      benchSubtitle: "Mô phỏng di chuyển 1M+ tài liệu: So sánh Single-Thread Legacy vs Phân vùng Worker Threads song song",
      benchDataset1k: "1,000 Tài liệu",
      benchDataset10k: "10,000 Tài liệu",
      benchDataset50k: "50,000 Tài liệu",
      benchBtnStart: "BẮT ĐẦU BENCHMARK",
      benchBtnRunning: "ĐANG CHẠY MÔ PHỎNG...",
      benchBtnRerun: "CHẠY LẠI BENCHMARK",
      benchLegacyTitle: "ENGINE CŨ (LEGACY)",
      benchLegacySubtitle: "(I/O đơn luồng tuần tự)",
      benchWorkerTitle: "KIẾN TRÚC TỐI ƯU (WORKER POOL)",
      benchWorkerSubtitle: "(Worker Threads + Xử lý Song song)",
      benchAvgLatency: "Độ trễ TB / Tài liệu",
      benchProcessedDocs: "Tài liệu Đã Xử Lý",
      benchProgressLabel: "Tiến độ Đồng bộ Batch",
      benchLegacyNote: "• Điểm nghẽn cũ: Nghẽn I/O SharePoint, xử lý đơn luồng tuần tự, tiến độ ban đầu ước tính mất gần 2 tháng.",
      benchTelemetryHeader: "TELEMETRY EVENT BUS HỆ THỐNG (LOGS TRỰC TIẾP)",
      archHeaderTitle: "Hệ Thống Quản Lý Văn Bản Doanh Nghiệp — SNP (Tân Cảng Sài Gòn)",
      archHeaderDesc: "Nhấp vào bất kỳ node kiến trúc nào để xem chi tiết giải pháp kỹ thuật, phân quyền ABAC và đoạn mã nguồn thực tế.",
      archInspectorBadge: "INSPECTOR KIẾN TRÚC",
      archInspectorProblem: "Bài Toán Nghiệp Vụ",
      archInspectorSolution: "Giải Pháp Kỹ Thuật",
      archInspectorImpact: "Hiệu Quả Thực Tế",
      archInspectorSnippetHeader: "Mô Hình Triển Khai Thực Tế (Code)",
      casesSectionIndex: "02 // KINH NGHIỆM LÀM VIỆC",
      casesSectionTitle: "KINH NGHIỆM DOANH NGHIỆP",
      casesSectionSubtitle: "Các dịch vụ production-grade, tối ưu hóa di chuyển dữ liệu lớn 10 TB và hệ thống thông báo thời gian thực.",
      casesProblemHeader: "Phạm Vi & Thách Thức Nghiệp Vụ",
      casesSolutionHeader: "Giải Pháp Kỹ Thuật",
      casesImpactHeader: "Đóng Góp & Kết Quả Đạt Được",
      projSectionIndex: "03 // DỰ ÁN TIÊU BIỂU",
      projSectionTitle: "DỰ ÁN GITHUB & CÁ NHÂN",
      projSectionSubtitle: "Pipeline xử lý đa phương tiện bằng AI cục bộ, e-commerce concurrency cao, quản lý dự án AI và hệ thống full-stack.",
      skillsSectionIndex: "04 // KỸ NĂNG CHUYÊN MÔN",
      skillsSectionTitle: "KỸ NĂNG & CÔNG NGHỆ",
      skillsSectionSubtitle: "Ngôn ngữ, Cơ sở dữ liệu, Kiến trúc, Bảo mật, Thời gian thực và Công cụ hỗ trợ.",
      contactSectionIndex: "05 // KẾT NỐI HỢP TÁC",
      contactCtaTitle: "CÙNG XÂY DỰNG\nHỆ THỐNG MỞ RỘNG VƯỢT TRỘI.",
      contactCtaSubtitle: "Backend Developer có kinh nghiệm về hệ thống doanh nghiệp, concurrency cao và xử lý dữ liệu lớn. Sẵn sàng nhận việc 1 tháng sau khi nhận offer chính thức.",
      contactBtnEmail: "GỬI EMAIL TRỰC TIẾP",
      contactBtnCopy: "SAO CHÉP EMAIL",
      contactCardHeader: "THÔNG TIN LIÊN HỆ KỸ SƯ",
      contactPhoneLabel: "ĐIỆN THOẠI",
      contactLocationLabel: "ĐỊA ĐIỂM",
      contactGithubLabel: "GITHUB",
      contactAvailLabel: "SẴN SÀNG NHẬN VIỆC",
      footerCopyright: "© 2026 TRẦN TRỌNG HIẾU • BACKEND DEVELOPER",
      footerBackTop: "LÊN ĐẦU TRANG",
      heroTag1: "NESTJS",
      heroTag2: "SPRING BOOT",
      heroTag3: "DI CHUYỂN 10 TB",
      heroTag4: "CAMUNDA BPMN",
      runwayTopTitle: "HÀNH TRÌNH KIẾN TRÚC HỆ THỐNG // 4 GIAI ĐOẠN TRỌNG TÂM",
      runwayPill1: "01 // PIPELINE 10 TB",
      runwayPill2: "02 // 15x WORKER THREADS",
      runwayPill3: "03 // CAMUNDA BPMN",
      runwayPill4: "04 // LOCAL AI ENGINE",
      runwayCh1Tag: "CHƯƠNG 01 // DI CHUYỂN DỮ LIỆU LỚN",
      runwayCh1Title: "PIPELINE LEGACY 10 TB",
      runwayCh1MissionHeader: "MỤC TIÊU KIẾN TRÚC",
      runwayCh1MissionDesc: "Di chuyển 10 Terabytes dữ liệu lịch sử doanh nghiệp từ API SharePoint phân mảnh và các hệ CSDL SQL rời rạc vào kho dữ liệu SQL Server hợp nhất.",
      runwayCh1Client: "KHÁCH HÀNG: TỔNG CÔNG TY TÂN CẢNG SÀI GÒN (SNP)",
      runwayCh1Result: "KẾT QUẢ: TỪ ~60 NGÀY XUỐNG CÒN 4.5 NGÀY ➔",
      runwayCh2Tag: "CHƯƠNG 02 // ĐA LUỒNG & TỐI ƯU HIỆU NĂNG CPU",
      runwayCh2Title: "15x WORKER THREADS",
      runwayCh2BottleneckHeader: "TỐI ƯU ĐIỂM NGHẼN HIỆU NĂNG",
      runwayCh2BottleneckDesc: "Xoá bỏ hoàn toàn tình trạng nghẽn Event Loop luồng đơn của Node.js bằng cách khởi tạo WorkerPool đa luồng, phân vùng dữ liệu theo chunk và đồng bộ hoá qua SharedArrayBuffer.",
      runwayCh2MatrixTitle: "THREADPOOL PHÂN VÙNG CPU 8 CORE",
      runwayCh2Starvation: "NGHẼN EVENT LOOP: ĐÃ GIẢI QUYẾT TRIỆT ĐỂ",
      runwayCh2Stack: "STACK: NODE.JS WORKER THREADS • XỬ LÝ THEO BATCH",
      runwayCh2Fault: "CƠ CHẾ CHỊU LỖI: ROLLBACK THEO TRANSACTION ➔",
      runwayCh3Tag: "CHƯƠNG 03 // ĐIỀU PHỐI QUY TRÌNH DOANH NGHIỆP",
      runwayCh3Title: "LÕI CAMUNDA BPMN",
      runwayCh3SecHeader: "PHÂN QUYỀN THEO QUY TRÌNH (WORKFLOW-DRIVEN)",
      runwayCh3SecDesc: "Điều phối quy trình doanh nghiệp linh hoạt phục vụ hơn 7.000 người dùng. Tích hợp ma trận kiểm soát truy cập kết hợp RBAC + ABAC mà không cần biên dịch lại hay triển khai lại backend.",
      runwayCh3EngineTitle: "QUY TRÌNH ĐIỀU PHỐI 5 BƯỚC — SNP",
      runwayCh3AuditBadge: "● TUÂN THỦ AUDIT: 100% ĐẠT CHUẨN",
      runwayCh3MemoryBadge: "BỘ NHỚ: TỐI ƯU HEAP, KHÔNG RÒ RỈ MEMORY",
      runwayCh3System: "HỆ THỐNG: QUẢN LÝ VĂN BẢN & LỊCH HỌP DOANH NGHIỆP",
      runwayCh3Security: "BẢO MẬT: OAUTH2 • JWT AUDIT LOGGING ➔",
      runwayCh4Tag: "CHƯƠNG 04 // PIPELINE AI CỤC BỘ (LOCAL)",
      runwayCh4Title: "PIPELINE ĐA PHƯƠNG TIỆN AUTODUB",
      runwayCh4OffHeader: "PIPELINE ĐA PHƯƠNG TIỆN OFFLINE",
      runwayCh4OffDesc: "Thiết kế & kiến trúc hệ thống AutoDubStudio: Ứng dụng desktop dịch thuật và lồng tiếng video bằng AI chạy 100% cục bộ, không phụ thuộc cloud API. Tích hợp Whisper, Ollama (Qwen), Piper TTS và tăng tốc video GPU NVENC.",
      runwayCh4ChainTitle: "CHUỖI SUY LUẬN AI 100% OFFLINE (BẢO MẬT DỮ LIỆU CỤC BỘ)",
      runwayCh4StatusPrivacy: "100% GPU Cục Bộ / Ưu Tiên Bảo Mật Dữ Liệu",
      runwayCh4Result: "HOÀN THÀNH // TIẾP TỤC ĐẾN BENCHMARK LAB",
      runwayBottomLeft: "TIMELINE KIẾN TRÚC // CUỘN TRANG ĐỂ THEO DÕI",
      runwayBottomRight: "GIÁM SÁT HỆ THỐNG: 4/4 MODULE SẴN SÀNG",
      archNode1Title: "Tầng Ứng Dụng Client",
      archNode1Subtitle: "7.000+ Người Dùng • Web & App",
      archNode2Title: "NestJS Gateway",
      archNode2Subtitle: "OAuth2 • Custom JWT Guards",
      archNode3Title: "Camunda BPMN",
      archNode3Subtitle: "Phân Quyền Linh Hoạt RBAC + ABAC",
      archNode4Title: "File Workers",
      archNode4Subtitle: "Streaming DOCX/PDF qua Java",
      archNode5Title: "Tầng Lưu Trữ (Storage Tier)",
      archNode5Subtitle: "SQL Server • MinIO • Redis",
      archProblemHeader: "Thách Thức Kỹ Thuật (Bài Toán)",
      archSolutionHeader: "Giải Pháp Kiến Trúc",
      archImpactHeader: "Hiệu Quả Đo Lường Được",
      archPatternHeader: "Mô Hình Triển Khai Thực Tế",
      benchBottleneckBadge: "NGHẼN CỔ CHAI",
      benchBoostBadge: "TĂNG TỐC 15.2x",
      benchThreadParallel: "SONG SONG",
      footerLatency: "ĐỘ TRỄ: <10ms",
      footerNominal: "● HỆ THỐNG VẬN HÀNH ỔN ĐỊNH",
      toastEmailCopied: "Đã sao chép địa chỉ email: "
    }
  }
};

export const architectureDictionary: ArchitectureDictionary = {
  en: {
    'client-node': {
      title: 'Client Layer — 7,000+ Enterprise Users',
      badge: 'EDGE & CLIENTS',
      problem: 'Enterprise management system serving 7,000+ users across Saigon Newport Corporation (SNP) covering document management, meeting workflows, duty scheduling, and internal reporting.',
      solution: 'Connected via HTTPS with WebSocket notifications for timely processing status updates across web and mobile platforms.',
      impact: 'Sub-second real-time notifications (< 150ms), zero redundant polling traffic across 7,000+ personnel.',
      codeSnippet: `// WebSocket Subscription for Real-time Document Status
@WebSocketGateway({ namespace: '/documents' })
export class DocumentGateway {
  @SubscribeMessage('subscribe_doc')
  handleDocSubscription(client: Socket, docId: string) {
    client.join(\`doc_\${docId}\`);
  }
}`
    },
    'gateway-node': {
      title: 'NestJS Gateway & Auth Guard (OAuth2 + JWT)',
      badge: 'API GATEWAY & GUARDS',
      problem: 'Implementing secure authentication and traceability across multiple internal business modules while maintaining tight access control.',
      solution: 'Implemented OAuth2/JWT authentication and comprehensive audit logging with optimized SQL Server queries to improve security, traceability, and production performance.',
      impact: '100% audit logging traceability for sensitive actions; token verification and execution in < 2ms.',
      codeSnippet: `@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Audit log requester context & verify OAuth2/JWT scopes
    const request = context.switchToHttp().getRequest();
    return super.canActivate(context);
  }
}`
    },
    'camunda-node': {
      title: 'Camunda BPMN Workflow & Access Control (RBAC + ABAC)',
      badge: 'WORKFLOW & AUTHORIZATION',
      problem: 'Managing complex business processes, document lifecycles, and access permissions across diverse organizational roles.',
      solution: 'Designed workflow-driven authorization using Camunda BPMN, RBAC, and ABAC to dynamically govern business processes and permission rules without code alteration.',
      impact: 'Business process workflows and permission lifecycles can be configured flexibly through Camunda BPMN models.',
      codeSnippet: `// Workflow Authorization via Camunda BPMN & ABAC
async evaluatePermission(user: UserContext, doc: DocumentEntity): Promise<boolean> {
  const isOwner = doc.creatorId === user.id;
  const isSignerInCurrentStage = doc.currentStageAssignee === user.role;
  const isClearanceValid = user.clearanceLevel >= doc.securityLevel;
  return (isOwner || isSignerInCurrentStage) && isClearanceValid;
}`
    },
    'worker-node': {
      title: 'Java File-Processing Modules & MinIO Integration',
      badge: 'FILE PROCESSING & STORAGE',
      problem: 'Supporting large-scale DOCX, PDF, and Excel exports without degrading Node.js event loop or triggering memory leaks.',
      solution: 'Integrated NestJS services with Java-based file-processing modules and MinIO object storage, using streaming pipelines for large exports.',
      impact: 'Zero memory leaks during heavy concurrent exports of large-scale DOCX, PDF, and Excel reports.',
      codeSnippet: `// Integration with Java file module & MinIO stream
async streamExportToMinio(documentStream: Readable, bucket: string, filename: string) {
  return await this.minioClient.putObject(
    bucket,
    filename,
    documentStream // Stream chunking without heap spikes
  );
}`
    },
    'storage-node': {
      title: 'SQL Server, Redis & MinIO Storage Tier',
      badge: 'STORAGE & QUERY OPTIMIZATION',
      problem: 'Storing millions of enterprise records and audit logs while maintaining rapid query performance and transactional integrity.',
      solution: 'Optimized SQL Server queries, applied indexed lookups and TypeORM relations; cached frequent workflows in Redis; stored binary exports in MinIO.',
      impact: 'Production query performance optimized; sub-second lookup across extensive document lifecycles.',
      codeSnippet: `// Optimized SQL Server query with TypeORM & Redis Cache
async getCachedDocumentMeta(docId: string): Promise<DocumentMeta> {
  const cached = await this.redis.get(\`doc_meta:\${docId}\`);
  if (cached) return JSON.parse(cached);
  
  const doc = await this.docRepo.findOne({ where: { id: docId } });
  await this.redis.setex(\`doc_meta:\${docId}\`, 3600, JSON.stringify(doc));
  return doc;
}`
    }
  },

  vi: {
    'client-node': {
      title: 'Tầng Client — 7,000+ Người Dùng Doanh Nghiệp',
      badge: 'EDGE & CLIENTS',
      problem: 'Hệ thống quản lý doanh nghiệp phục vụ hơn 7,000 người dùng trên toàn hệ thống Tổng công ty Tân Cảng Sài Gòn (SNP), bao quát văn bản, lịch trực, họp hành và báo cáo.',
      solution: 'Kết nối qua HTTPS với WebSocket gửi và nhận thông báo cập nhật trạng thái văn bản kịp thời trên máy tính và điện thoại.',
      impact: 'Độ trễ thông báo thời gian thực < 150ms, loại bỏ hoàn toàn 90% lượng request polling dư thừa lên máy chủ.',
      codeSnippet: `// WebSocket Subscription for Real-time Document Status
@WebSocketGateway({ namespace: '/documents' })
export class DocumentGateway {
  @SubscribeMessage('subscribe_doc')
  handleDocSubscription(client: Socket, docId: string) {
    client.join(\`doc_\${docId}\`);
  }
}`
    },
    'gateway-node': {
      title: 'NestJS Gateway & Auth Guard (OAuth2 + JWT)',
      badge: 'API GATEWAY & GUARDS',
      problem: 'Xác thực đa tầng kết hợp phân quyền chặt chẽ giữa các phòng ban, ngăn chặn truy cập trái phép vào văn bản mật.',
      solution: 'Triển khai xác thực OAuth2/JWT và audit logging, kết hợp custom ExecutionContext Guard và tối ưu hóa các truy vấn SQL Server để nâng cao bảo mật, khả năng truy vết và hiệu năng production.',
      impact: 'Ghi nhận audit log 100% các request nhạy cảm, thời gian giải mã và kiểm tra token < 2ms.',
      codeSnippet: `@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Audit log requester context & verify scopes
    const request = context.switchToHttp().getRequest();
    return super.canActivate(context);
  }
}`
    },
    'camunda-node': {
      title: 'Camunda BPMN & Phân Quyền Động (RBAC + ABAC)',
      badge: 'WORKFLOW & PHÂN QUYỀN',
      problem: 'Quản lý quy trình nghiệp vụ, vòng đời văn bản và quyền truy cập đa dạng theo vai trò tổ chức.',
      solution: 'Thiết kế phân quyền dựa trên quy trình sử dụng Camunda BPMN, RBAC và ABAC để quản lý quy trình nghiệp vụ, vòng đời văn bản và quyền truy cập theo vai trò tổ chức.',
      impact: 'Thay đổi quy trình luân chuyển văn bản linh hoạt qua Camunda BPMN mà không cần deploy lại backend server.',
      codeSnippet: `// Dynamic ABAC Decision Matrix
async evaluatePermission(user: UserContext, doc: DocumentEntity): Promise<boolean> {
  const isOwner = doc.creatorId === user.id;
  const isSignerInCurrentStage = doc.currentStageAssignee === user.role;
  const isSecurityClearanceValid = user.clearanceLevel >= doc.securityLevel;
  return (isOwner || isSignerInCurrentStage) && isSecurityClearanceValid;
}`
    },
    'worker-node': {
      title: 'Module File Java & Lưu Trữ MinIO',
      badge: 'XỬ LÝ FILE & STREAMING',
      problem: 'Hỗ trợ xuất file DOCX, PDF và Excel quy mô lớn cho toàn bộ doanh nghiệp mà không làm nghẽn Event Loop của Node.js.',
      solution: 'Tích hợp các dịch vụ NestJS với module xử lý file viết bằng Java, lưu trữ MinIO và thông báo WebSocket, hỗ trợ xuất file DOCX, PDF, Excel quy mô lớn qua kỹ thuật streaming.',
      impact: 'Bộ nhớ RAM ổn định, không rò rỉ bộ nhớ ngay cả khi xuất hàng nghìn trang tài liệu báo cáo song song.',
      codeSnippet: `// Stream-to-MinIO without Memory Spike
async streamExportToMinio(documentStream: Readable, bucket: string, filename: string) {
  return await this.minioClient.putObject(
    bucket,
    filename,
    documentStream // Zero buffering in memory
  );
}`
    },
    'storage-node': {
      title: 'Tầng Lưu Trữ: SQL Server, MinIO & Redis Cache',
      badge: 'DATA & STORAGE',
      problem: 'Lưu trữ hàng triệu metadata văn bản, lịch sử audit log và dữ liệu tệp đính kèm với yêu cầu truy vấn siêu tốc và tính toàn vẹn tuyệt đối (ACID).',
      solution: 'Phân tầng lưu trữ: SQL Server lưu trữ transactional data có quan hệ chặt chẽ; MinIO S3 lưu trữ tệp nhị phân; Redis lưu trữ Session & Cache các danh mục dùng chung.',
      impact: 'Tối ưu hóa các truy vấn SQL Server, thời gian truy vấn trung bình < 12ms.',
      codeSnippet: `// Optimized Query with Indexed Lookups & Redis Cache
async getCachedDocumentMeta(docId: string): Promise<DocumentMeta> {
  const cached = await this.redis.get(\`doc_meta:\${docId}\`);
  if (cached) return JSON.parse(cached);
  
  const doc = await this.docRepo.findOne({ where: { id: docId } });
  await this.redis.setex(\`doc_meta:\${docId}\`, 3600, JSON.stringify(doc));
  return doc;
}`
    }
  }
};

export function getProfileData(lang: Language = 'en'): PortfolioData {
  return portfolioDictionary[lang] || portfolioDictionary.en;
}

export function getArchitectureSpecs(lang: Language = 'en'): ArchitectureSpecMap {
  return architectureDictionary[lang] || architectureDictionary.en;
}
