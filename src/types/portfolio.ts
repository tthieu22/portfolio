/**
 * =========================================================================
 * TYPESCRIPT TYPE DEFINITIONS (portfolio.ts)
 * =========================================================================
 * Khai báo kiểu dữ liệu rõ ràng, chuẩn mực cho toàn bộ hệ thống Portfolio.
 * Hỗ trợ đa ngôn ngữ (EN / VI) và Strict Type Safety.
 * =========================================================================
 */

export type Language = 'en' | 'vi';

export interface PersonalInfo {
  readonly name: string;
  readonly englishName: string;
  readonly role: string;
  readonly subtitle: string;
  readonly headline: string;
  readonly location: string;
  readonly phone: string;
  readonly email: string;
  readonly githubUrl: string;
  readonly githubUsername: string;
  readonly statusBadge: string;
  readonly availability: string;
  readonly avatarUrl: string;
  readonly avatarCaption: string;
  readonly cvDownloadPath: string;
}

export interface KeyMetric {
  readonly id: string;
  readonly value: string;
  readonly rawNumber?: number;
  readonly suffix?: string;
  readonly label: string;
  readonly description: string;
  readonly tag: string;
}

export interface CaseStudy {
  readonly id: string;
  readonly client: string;
  readonly company: string;
  readonly period: string;
  readonly role: string;
  readonly title: string;
  readonly highlight: string;
  readonly problem: string;
  readonly solution: string;
  readonly techStack: readonly string[];
  readonly metrics: readonly string[];
  readonly architectureSummary: string;
}

export interface PersonalProject {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly period: string;
  readonly techStack: readonly string[];
  readonly description: string;
  readonly github?: string;
  readonly demo?: string;
}

export interface TechnicalCategory {
  readonly category: string;
  readonly items: readonly string[];
}

export interface Education {
  readonly school: string;
  readonly degree: string;
  readonly period: string;
  readonly gpa: string;
  readonly graduationProject: string;
}

export interface UiTranslations {
  readonly navRole: string;
  readonly navStatus: string;
  readonly navClock: string;
  readonly navLatency: string;
  readonly navDownloadCv: string;
  readonly heroMeta: string;
  readonly heroBioLocation: string;
  readonly heroBioExpertise: string;
  readonly heroBioStatus: string;
  readonly heroBtnBenchmark: string;
  readonly heroBtnCases: string;
  readonly heroBtnCopyEmail: string;
  readonly labSectionIndex: string;
  readonly labSectionTitle: string;
  readonly labSectionSubtitle: string;
  readonly tabBenchmark: string;
  readonly tabArchitecture: string;
  readonly benchTitle: string;
  readonly benchSubtitle: string;
  readonly benchDataset1k: string;
  readonly benchDataset10k: string;
  readonly benchDataset50k: string;
  readonly benchBtnStart: string;
  readonly benchBtnRunning: string;
  readonly benchBtnRerun: string;
  readonly benchLegacyTitle: string;
  readonly benchLegacySubtitle: string;
  readonly benchWorkerTitle: string;
  readonly benchWorkerSubtitle: string;
  readonly benchAvgLatency: string;
  readonly benchProcessedDocs: string;
  readonly benchProgressLabel: string;
  readonly benchLegacyNote: string;
  readonly benchTelemetryHeader: string;
  readonly archHeaderTitle: string;
  readonly archHeaderDesc: string;
  readonly archInspectorBadge: string;
  readonly archInspectorProblem: string;
  readonly archInspectorSolution: string;
  readonly archInspectorImpact: string;
  readonly archInspectorSnippetHeader: string;
  readonly casesSectionIndex: string;
  readonly casesSectionTitle: string;
  readonly casesSectionSubtitle: string;
  readonly casesProblemHeader: string;
  readonly casesSolutionHeader: string;
  readonly casesImpactHeader: string;
  readonly projSectionIndex: string;
  readonly projSectionTitle: string;
  readonly projSectionSubtitle: string;
  readonly skillsSectionIndex: string;
  readonly skillsSectionTitle: string;
  readonly skillsSectionSubtitle: string;
  readonly contactSectionIndex: string;
  readonly contactCtaTitle: string;
  readonly contactCtaSubtitle: string;
  readonly contactBtnEmail: string;
  readonly contactBtnCopy: string;
  readonly contactCardHeader: string;
  readonly contactPhoneLabel: string;
  readonly contactLocationLabel: string;
  readonly contactGithubLabel: string;
  readonly contactAvailLabel: string;
  readonly footerCopyright: string;
  readonly footerBackTop: string;
  readonly heroTag1: string;
  readonly heroTag2: string;
  readonly heroTag3: string;
  readonly heroTag4: string;
  readonly runwayTopTitle: string;
  readonly runwayPill1: string;
  readonly runwayPill2: string;
  readonly runwayPill3: string;
  readonly runwayPill4: string;
  readonly runwayCh1Tag: string;
  readonly runwayCh1Title: string;
  readonly runwayCh1MissionHeader: string;
  readonly runwayCh1MissionDesc: string;
  readonly runwayCh1Client: string;
  readonly runwayCh1Result: string;
  readonly runwayCh2Tag: string;
  readonly runwayCh2Title: string;
  readonly runwayCh2BottleneckHeader: string;
  readonly runwayCh2BottleneckDesc: string;
  readonly runwayCh2MatrixTitle: string;
  readonly runwayCh2Starvation: string;
  readonly runwayCh2Stack: string;
  readonly runwayCh2Fault: string;
  readonly runwayCh3Tag: string;
  readonly runwayCh3Title: string;
  readonly runwayCh3SecHeader: string;
  readonly runwayCh3SecDesc: string;
  readonly runwayCh3EngineTitle: string;
  readonly runwayCh3AuditBadge: string;
  readonly runwayCh3MemoryBadge: string;
  readonly runwayCh3System: string;
  readonly runwayCh3Security: string;
  readonly runwayCh4Tag: string;
  readonly runwayCh4Title: string;
  readonly runwayCh4OffHeader: string;
  readonly runwayCh4OffDesc: string;
  readonly runwayCh4ChainTitle: string;
  readonly runwayCh4StatusPrivacy: string;
  readonly runwayCh4Result: string;
  readonly runwayBottomLeft: string;
  readonly runwayBottomRight: string;
  readonly archNode1Title: string;
  readonly archNode1Subtitle: string;
  readonly archNode2Title: string;
  readonly archNode2Subtitle: string;
  readonly archNode3Title: string;
  readonly archNode3Subtitle: string;
  readonly archNode4Title: string;
  readonly archNode4Subtitle: string;
  readonly archNode5Title: string;
  readonly archNode5Subtitle: string;
  readonly archProblemHeader: string;
  readonly archSolutionHeader: string;
  readonly archImpactHeader: string;
  readonly archPatternHeader: string;
  readonly benchBottleneckBadge: string;
  readonly benchBoostBadge: string;
  readonly benchThreadParallel: string;
  readonly footerLatency: string;
  readonly footerNominal: string;
  readonly toastEmailCopied: string;
}

export interface PortfolioData {
  readonly personalInfo: PersonalInfo;
  readonly keyMetrics: readonly KeyMetric[];
  readonly caseStudies: readonly CaseStudy[];
  readonly personalProjects: readonly PersonalProject[];
  readonly technicalArsenal: readonly TechnicalCategory[];
  readonly education: Education;
  readonly ui: UiTranslations;
}

export interface ArchitectureSpec {
  readonly title: string;
  readonly badge: string;
  readonly problem: string;
  readonly solution: string;
  readonly impact: string;
  readonly codeSnippet: string;
}

export type ArchitectureSpecMap = Record<string, ArchitectureSpec>;
export type PortfolioDictionary = Record<Language, PortfolioData>;
export type ArchitectureDictionary = Record<Language, ArchitectureSpecMap>;
