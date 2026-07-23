// i18n: translation dictionary + language switcher
var I18N = {
  en: {
    "skip.link": "Skip to main content",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.eyebrow": "Informatics Engineering &middot; Universitas Islam Riau",
    "hero.tagline": "Fresh graduate. Ships full-stack apps<br />across Next.js/TypeScript &amp; Laravel/PHP.",
    "hero.cta.work": "See my work",
    "hero.cta.contact": "Get in touch",
    "hero.status": "Open to internship &amp; full-time roles &middot; Pekanbaru, Riau (open to relocation)",
    "social.github": "GitHub",
    "social.linkedin": "LinkedIn",
    "social.email": "Email",
    "about.title": "About",
    "about.bio1": "I'm Farhan, a fresh Informatics Engineering graduate at Universitas Islam Riau, open to relocating for the right opportunity. I build production-grade full-stack apps across two ecosystems: Next.js/TypeScript for modern web applications and Laravel/PHP for backend-heavy systems.",
    "about.bio2": "My projects include a deployed news portal with a multi-role CMS, real-time trending analytics, and 256 Playwright E2E tests running green in CI, and a nutrition monitoring system for Indonesia's national free meal program. I also interned at the provincial government's tech department, building a Laravel starter template their team now uses as the base for new projects.",
    "about.stat1": "Full-stack apps (2 in production)",
    "about.stat2": "E2E tests passing in CI",
    "about.stat3": "Lighthouse SEO",
    "about.stat4": "Fresh graduate",
    "skills.title": "Skills",
    "skills.row.languages": "Languages",
    "skills.row.frontend": "Front-end",
    "skills.row.backend": "Back-end",
    "skills.row.database": "Database",
    "skills.row.testing": "Testing & Quality",
    "skills.row.security": "Security",
    "skills.row.cloud": "Cloud & DevOps",
    "skills.row.practices": "Practices",
    "projects.title": "Projects",
    "project.personal": "Personal Project",
    "project.thesis": "Thesis Project",
    "project.newsportal.desc": "Indonesian news portals are often static and editor-heavy. NewsPortal is a production CMS with a structured editorial workflow, real-time trending, and full multi-role access, built on Next.js 15 and TypeScript end to end.",
    "project.newsportal.feature1": "Production news portal with a 4-role CMS (USER, JOURNALIST, EDITOR, ADMIN) and a DRAFT → REVIEW → PUBLISHED editorial workflow, enforced by Next.js middleware and Auth.js v5 JWT with per-request DB revalidation",
    "project.newsportal.feature2": "256 Playwright E2E tests across 11 critical areas, 100% passing in a GitHub Actions CI pipeline — alongside WCAG 2.1 AA compliance and a 100/100 Lighthouse SEO score",
    "project.newsportal.feature3": "Concurrent review actions protected by atomic TOCTOU guards returning 409 Conflict instead of corrupted state",
    "project.newsportal.feature4": "Hardened with dual-layer HTML sanitization, CSP/HSTS headers, Redis-backed rate limiting with Sentry alerting, and server-side re-verification of unsigned uploads",
    "project.newsportal.feature5": "Real-time trending engine (24h view dedup, 7-day rolling window) and full-text search over a normalized 9-model PostgreSQL schema",
    "project.sppg.desc": "Indonesia's free school meal program had no way to verify if daily menus actually met nutritional targets across 12 demographic groups. I built the system that does.",
    "project.sppg.feature1": "RBAC for 4 user roles, each with tailored dashboards and permission scopes",
    "project.sppg.feature2": "Nutrition simulation engine: 8 nutrients benchmarked against RDA with automated status flags",
    "project.sppg.feature3": "830+ Indonesian food-composition (TKPI) records, automated Excel/PDF exports",
    "project.sppg.feature4": "Built 5+ REST API endpoints and a nutrition simulation engine checking 8 nutrients against RDA standards, replacing manual calculation entirely",
    "project.careerflow.desc": "Job hunting across email, spreadsheets, and notes is chaos. CareerFlow is a full-stack SPA that tracks every application, interview, and document in one place.",
    "project.careerflow.feature1": "Laravel 12 REST API, 20+ endpoints across 5 modules, rate limiting, OWASP headers, safe password reset",
    "project.careerflow.feature2": "React 19 frontend with 9 reusable UI primitives and 6 custom data-fetching hooks",
    "project.careerflow.feature3": "Real-time dashboard with Recharts, status breakdown and monthly trend charts",
    "project.careerflow.feature4": "Rate limiting (5/min auth, 60/min protected) and 4 OWASP-aligned security headers; dual validation via React Hook Form + Zod on the client and Laravel rules on the server",
    "link.source": "Source code",
    "link.live": "Live site",
    "link.backend": "Backend",
    "link.frontend": "Frontend",
    "experience.title": "Experience",
    "exp.intern.role": "Web Developer Intern",
    "exp.intern.bullet1": "Co-built Master-Web, a reusable Laravel starter template now adopted as the foundation for all new web projects in the department",
    "exp.intern.bullet2": "Delivered core modules authentication, user & role management with RBAC, base layouts, and starter CRUD on an MVC architecture, cutting initial project scaffolding from days to hours",
    "exp.intern.bullet3": "Applied clean MVC architecture and modular code structure under staff supervision, ensuring the codebase stays maintainable for future devs",
    "exp.media.role": "Media Staff",
    "exp.media.bullet1": "Produced and published social media content for Web Development programming classes, grew community engagement by ~20%",
    "exp.media.bullet2": "Co-organized 3+ workshops covering Web Development, UI/UX, and Cyber Security, reaching 50+ participants per session",
    "education.title": "Education",
    "education.degree": "Bachelor of Informatics Engineering (S.T)",
    "education.detail": "Informatics Engineering",
    "education.languages": "Languages — Indonesian (Native) &middot; English (Professional)",
    "contact.title": "Contact",
    "contact.statement": "I'm looking for an internship or full-time role where I can keep shipping things like this. If you're building something interesting, reach out.",
    "contact.cv": "Download CV",
    "footer.text": "Designed &amp; built by Farhan &middot; Pekanbaru, Riau &middot; &copy; 2026"
  },
  ja: {
    "skip.link": "メインコンテンツへスキップ",
    "nav.about": "自己紹介",
    "nav.skills": "スキル",
    "nav.projects": "プロジェクト",
    "nav.experience": "経歴",
    "nav.education": "学歴",
    "nav.contact": "お問い合わせ",
    "hero.eyebrow": "情報工学専攻 &middot; リアウ・イスラム大学",
    "hero.tagline": "新卒エンジニア。Next.js/TypeScript と Laravel/PHP を軸に<br />フルスタックアプリを開発・リリースしています。",
    "hero.cta.work": "実績を見る",
    "hero.cta.contact": "お問い合わせ",
    "hero.status": "インターン・正社員採用に応募受付中 &middot; プカンバル(リアウ州)在住(転居可)",
    "social.github": "GitHub",
    "social.linkedin": "LinkedIn",
    "social.email": "メール",
    "about.title": "自己紹介",
    "about.bio1": "情報工学専攻の新卒として、リアウ・イスラム大学を卒業しました。適切な機会があれば転居も厭いません。Next.js/TypeScriptによるモダンなWebアプリケーションと、バックエンド中心のLaravel/PHPという2つのエコシステムで、実運用レベルのフルスタックアプリケーションを構築しています。",
    "about.bio2": "手がけたプロジェクトには、マルチロールCMSとリアルタイムのトレンド分析を備え、256件のPlaywright E2Eテストが全てCIでグリーンとなっているデプロイ済みのニュースポータルや、インドネシアの国家無償給食プログラム向け栄養モニタリングシステムなどがあります。また、州政府のIT部門でインターンとして、現在もチームが新規プロジェクトの基盤として使用しているLaravelスターターテンプレートの構築にも携わりました。",
    "about.stat1": "フルスタックアプリ(本番稼働2件)",
    "about.stat2": "CIで通過したE2Eテスト",
    "about.stat3": "LighthouseのSEOスコア",
    "about.stat4": "新卒",
    "skills.title": "スキル",
    "skills.row.languages": "言語",
    "skills.row.frontend": "フロントエンド",
    "skills.row.backend": "バックエンド",
    "skills.row.database": "データベース",
    "skills.row.testing": "テスト・品質",
    "skills.row.security": "セキュリティ",
    "skills.row.cloud": "クラウド・DevOps",
    "skills.row.practices": "開発プラクティス",
    "projects.title": "プロジェクト",
    "project.personal": "個人プロジェクト",
    "project.thesis": "卒業研究プロジェクト",
    "project.newsportal.desc": "インドネシアのニュースポータルは静的で編集作業の負担が大きいものが少なくありません。NewsPortalは、構造化された編集ワークフロー、リアルタイムのトレンド機能、複数ロールへの完全対応を備えた本番運用CMSで、Next.js 15とTypeScriptのみで一貫して構築しています。",
    "project.newsportal.feature1": "USER・JOURNALIST・EDITOR・ADMINの4ロールCMSと、DRAFT→REVIEW→PUBLISHEDの編集ワークフローを実装。Next.jsミドルウェアとAuth.js v5のJWTでリクエストごとにDB再検証を実施",
    "project.newsportal.feature2": "11の重要領域を対象に256件のPlaywright E2Eテストを実装し、GitHub Actions CIパイプラインで100％成功。WCAG 2.1 AA準拠、Lighthouse SEOスコア100/100も達成",
    "project.newsportal.feature3": "同時実行されるレビュー操作をアトミックなTOCTOUガードで保護し、データ破損の代わりに409 Conflictを返す設計",
    "project.newsportal.feature4": "二重層のHTMLサニタイズ、CSP/HSTSヘッダー、Redisベースのレート制限とSentryアラート、未署名アップロードのサーバー側再検証などで堅牢化",
    "project.newsportal.feature5": "24時間の重複排除と7日間のローリングウィンドウを備えたリアルタイムトレンドエンジン、正規化された9モデルのPostgreSQLスキーマ上での全文検索を実装",
    "project.sppg.desc": "インドネシアの無償学校給食プログラムには、日々の献立が12の対象グループの栄養目標を実際に満たしているかを検証する手段がありませんでした。そのための仕組みを構築しました。",
    "project.sppg.feature1": "4つのユーザーロールに対応したRBACを実装し、それぞれ専用ダッシュボードと権限範囲を提供",
    "project.sppg.feature2": "8つの栄養素をRDA基準と照合するシミュレーションエンジンを構築し、ステータスフラグを自動生成",
    "project.sppg.feature3": "830件以上のインドネシア食品成分(TKPI)データを収録し、Excel/PDFの自動出力に対応",
    "project.sppg.feature4": "5つ以上のREST APIエンドポイントと、8つの栄養素をRDA基準で判定する栄養シミュレーションエンジンを構築し、手作業での計算を完全に置き換え",
    "project.careerflow.desc": "メール・スプレッドシート・メモに分散した就活活動の管理は混乱しがちです。CareerFlowは、応募・面接・書類のすべてを一箇所で管理できるフルスタックSPAです。",
    "project.careerflow.feature1": "Laravel 12によるREST APIを5モジュール・20以上のエンドポイントで構築。レート制限、OWASP準拠ヘッダー、安全なパスワードリセットに対応",
    "project.careerflow.feature2": "9つの再利用可能なUIコンポーネントと6つのカスタムデータフェッチングフックを備えたReact 19製フロントエンド",
    "project.careerflow.feature3": "Rechartsによるリアルタイムダッシュボードで、ステータス内訳と月次トレンドチャートを表示",
    "project.careerflow.feature4": "レート制限(認証5回/分・保護対象エンドポイント60回/分)とOWASP準拠のセキュリティヘッダー4種を実装。クライアント側はReact Hook Form + Zod、サーバー側はLaravelのバリデーションで二重に検証",
    "link.source": "ソースコード",
    "link.live": "公開サイト",
    "link.backend": "バックエンド",
    "link.frontend": "フロントエンド",
    "experience.title": "経歴",
    "exp.intern.role": "Webデベロッパーインターン",
    "exp.intern.bullet1": "再利用可能なLaravelスターターテンプレート「Master-Web」を共同開発し、現在は部内の全新規 Web プロジェクトの基盤として採用",
    "exp.intern.bullet2": "認証、RBACによるユーザー・ロール管理、ベースレイアウト、MVCアーキテクチャ上のスターターCRUDといったコアモジュールを実装し、初期プロジェクト構築を数日から数時間に短縮",
    "exp.intern.bullet3": "スタッフの指導のもと、クリーンなMVCアーキテクチャとモジュール化されたコード構造を適用し、将来の開発者にとっても保守しやすいコードベースを維持",
    "exp.media.role": "メディアスタッフ",
    "exp.media.bullet1": "Web開発プログラミング講座向けのSNSコンテンツを制作・公開し、コミュニティのエンゲージメントを約20％向上",
    "exp.media.bullet2": "Web開発・UI/UX・サイバーセキュリティをテーマにしたワークショップを3回以上共同運営し、延べ50名以上が参加",
    "education.title": "学歴",
    "education.degree": "情報工学学士(S.T)",
    "education.detail": "情報工学専攻",
    "education.languages": "使用言語 — インドネシア語(母語) &middot; 英語(ビジネスレベル)",
    "contact.title": "お問い合わせ",
    "contact.statement": "インターンシップまたは正社員のポジションを探しています。こうしたプロダクトを作り続けられる環境を探しているので、面白いことに取り組んでいる方はご連絡ください。",
    "contact.cv": "履歴書をダウンロード",
    "footer.text": "制作 Farhan &middot; プカンバル、リアウ &middot; &copy; 2026"
  },
  ko: {
    "skip.link": "본문으로 건너뛰기",
    "nav.about": "소개",
    "nav.skills": "기술",
    "nav.projects": "프로젝트",
    "nav.experience": "경력",
    "nav.education": "학력",
    "nav.contact": "연락처",
    "hero.eyebrow": "정보공학 전공 &middot; 리아우 이슬람 대학교",
    "hero.tagline": "새내기 개발자. Next.js/TypeScript와 Laravel/PHP를 아우르며<br />풀스택 애플리케이션을 만들고 있습니다.",
    "hero.cta.work": "작업물 보기",
    "hero.cta.contact": "연락하기",
    "hero.status": "인턴십 및 정규직 지원 가능 &middot; 프칸바루, 리아우(이주 가능)",
    "social.github": "GitHub",
    "social.linkedin": "LinkedIn",
    "social.email": "이메일",
    "about.title": "소개",
    "about.bio1": "저는 리아우 이슬람 대학교 정보공학과를 갓 졸업한 개발자로, 좋은 기회가 있다면 이주도 가능합니다. Next.js/TypeScript 기반의 최신 웹 애플리케이션과 백엔드 중심의 Laravel/PHP, 두 생태계를 아우르며 실무 수준의 풀스택 애플리케이션을 만들고 있습니다.",
    "about.bio2": "제가 진행한 프로젝트로는 다중 역할 CMS와 실시간 트렌드 분석을 갖추고 256개의 Playwright E2E 테스트가 CI에서 모두 통과하는 배포된 뉴스 포털, 그리고 인도네시아 국가 무상급식 프로그램을 위한 영양 모니터링 시스템이 있습니다. 또한 주정부 IT 부서에서 인턴으로 근무하며, 현재도 팀이 신규 프로젝트의 기반으로 사용 중인 Laravel 스타터 템플릿을 구축했습니다.",
    "about.stat1": "풀스택 앱 (프로덕션 2건)",
    "about.stat2": "CI 통과 E2E 테스트",
    "about.stat3": "Lighthouse SEO 점수",
    "about.stat4": "신규 졸업자",
    "skills.title": "기술",
    "skills.row.languages": "언어",
    "skills.row.frontend": "프론트엔드",
    "skills.row.backend": "백엔드",
    "skills.row.database": "데이터베이스",
    "skills.row.testing": "테스트 및 품질",
    "skills.row.security": "보안",
    "skills.row.cloud": "클라우드 및 DevOps",
    "skills.row.practices": "개발 방식",
    "projects.title": "프로젝트",
    "project.personal": "개인 프로젝트",
    "project.thesis": "졸업 프로젝트",
    "project.newsportal.desc": "인도네시아의 뉴스 포털은 대부분 정적이고 편집 작업 부담이 큽니다. NewsPortal은 구조화된 편집 워크플로우, 실시간 트렌드 기능, 완전한 다중 역할 지원을 갖춘 프로덕션 CMS로, Next.js 15와 TypeScript로 처음부터 끝까지 구축했습니다.",
    "project.newsportal.feature1": "USER, JOURNALIST, EDITOR, ADMIN 4가지 역할의 CMS와 DRAFT → REVIEW → PUBLISHED 편집 워크플로우를 구현. Next.js 미들웨어와 Auth.js v5 JWT로 요청마다 DB 재검증 수행",
    "project.newsportal.feature2": "11개 핵심 영역에 걸쳐 256개의 Playwright E2E 테스트를 GitHub Actions CI 파이프라인에서 100% 통과. WCAG 2.1 AA 준수 및 Lighthouse SEO 100/100 점수도 달성",
    "project.newsportal.feature3": "동시 리뷰 작업을 원자적 TOCTOU 가드로 보호해, 데이터 손상 대신 409 Conflict를 반환하도록 설계",
    "project.newsportal.feature4": "이중 계층 HTML 새니타이징, CSP/HSTS 헤더, Redis 기반 레이트 리밋과 Sentry 알림, 서명되지 않은 업로드의 서버 측 재검증으로 보안을 강화",
    "project.newsportal.feature5": "24시간 중복 제거와 7일 롤링 윈도우를 갖춘 실시간 트렌드 엔진, 정규화된 9개 모델 PostgreSQL 스키마 기반 전문 검색을 구현",
    "project.sppg.desc": "인도네시아의 무상 학교급식 프로그램은 일일 식단이 12개 대상 그룹의 영양 목표를 실제로 충족하는지 검증할 방법이 없었습니다. 이를 검증하는 시스템을 만들었습니다.",
    "project.sppg.feature1": "4가지 사용자 역할에 대한 RBAC를 구현, 역할별 맞춤 대시보드와 권한 범위 제공",
    "project.sppg.feature2": "8개 영양소를 RDA 기준과 비교하는 시뮬레이션 엔진을 구축, 상태 플래그를 자동 생성",
    "project.sppg.feature3": "830건 이상의 인도네시아 식품 성분(TKPI) 데이터를 수록, Excel/PDF 자동 내보내기 지원",
    "project.sppg.feature4": "5개 이상의 REST API 엔드포인트와 8개 영양소를 RDA 기준으로 판정하는 영양 시뮬레이션 엔진을 구축하여 수작업 계산을 완전히 대체",
    "project.careerflow.desc": "이메일, 스프레드시트, 메모에 흩어진 구직 활동 관리는 혼란스럽기 마련입니다. CareerFlow는 지원, 면접, 서류를 한곳에서 관리하는 풀스택 SPA입니다.",
    "project.careerflow.feature1": "Laravel 12 기반 REST API를 5개 모듈, 20개 이상의 엔드포인트로 구축. 레이트 리밋, OWASP 보안 헤더, 안전한 비밀번호 재설정 지원",
    "project.careerflow.feature2": "9개의 재사용 가능한 UI 컴포넌트와 6개의 커스텀 데이터 패칭 훅을 갖춘 React 19 프론트엔드",
    "project.careerflow.feature3": "Recharts 기반 실시간 대시보드로 상태별 현황과 월별 트렌드 차트를 표시",
    "project.careerflow.feature4": "레이트 리밋(인증 5회/분, 보호된 엔드포인트 60회/분)과 OWASP 보안 헤더 4종을 적용. 클라이언트는 React Hook Form + Zod, 서버는 Laravel 규칙으로 이중 검증",
    "link.source": "소스 코드",
    "link.live": "라이브 사이트",
    "link.backend": "백엔드",
    "link.frontend": "프론트엔드",
    "experience.title": "경력",
    "exp.intern.role": "웹 개발자 인턴",
    "exp.intern.bullet1": "재사용 가능한 Laravel 스타터 템플릿 'Master-Web'을 공동 개발, 현재 부서 내 모든 신규 웹 프로젝트의 기반으로 채택됨",
    "exp.intern.bullet2": "인증, RBAC 기반 사용자·역할 관리, 기본 레이아웃, MVC 아키텍처 기반 스타터 CRUD 등 핵심 모듈을 구현하여 초기 프로젝트 구축 시간을 며칠에서 몇 시간으로 단축",
    "exp.intern.bullet3": "직원의 지도 아래 클린 MVC 아키텍처와 모듈화된 코드 구조를 적용, 향후 개발자도 유지보수하기 쉬운 코드베이스를 유지",
    "exp.media.role": "미디어 스태프",
    "exp.media.bullet1": "웹 개발 프로그래밍 강좌를 위한 소셜 미디어 콘텐츠를 제작·게시하여 커뮤니티 참여도를 약 20% 향상",
    "exp.media.bullet2": "웹 개발, UI/UX, 사이버 보안을 주제로 한 워크샵을 3회 이상 공동 주최, 회당 50명 이상 참여",
    "education.title": "학력",
    "education.degree": "정보공학 학사 (S.T)",
    "education.detail": "정보공학 전공",
    "education.languages": "언어 — 인도네시아어(모국어) &middot; 영어(비즈니스 수준)",
    "contact.title": "연락처",
    "contact.statement": "인턴십 또는 정규직 포지션을 찾고 있습니다. 이런 결과물을 계속 만들어갈 수 있는 곳을 찾고 있으니, 흥미로운 것을 만들고 계시다면 편하게 연락 주세요.",
    "contact.cv": "이력서 다운로드",
    "footer.text": "제작 Farhan &middot; 프칸바루, 리아우 &middot; &copy; 2026"
  }
};

function applyLanguage(lang) {
  if (!I18N[lang]) lang = "en";
  var dict = I18N[lang];
  var fallback = I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    el.innerHTML = dict[key] || fallback[key] || el.innerHTML;
  });
  document.documentElement.lang = lang;
  var labels = { en: "EN", ja: "JA", ko: "KO" };
  var currentEl = document.getElementById("lang-switch-current");
  if (currentEl) currentEl.textContent = labels[lang] || "EN";
  document.querySelectorAll("#lang-switch-list [role='option']").forEach(function(opt) {
    opt.setAttribute("aria-selected", opt.getAttribute("data-lang") === lang ? "true" : "false");
  });
  try { localStorage.setItem("site-lang", lang); } catch (e) {}
}

(function() {
  var switchEl  = document.getElementById("lang-switch");
  var btn       = document.getElementById("lang-switch-btn");
  var list      = document.getElementById("lang-switch-list");
  if (!switchEl || !btn || !list) return;
  var options   = Array.from(list.querySelectorAll("[role='option']"));

  function openList() {
    list.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  }
  function closeList() {
    list.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }
  function toggleList() {
    if (list.hidden) openList(); else closeList();
  }

  btn.addEventListener("click", function(e) {
    e.stopPropagation();
    toggleList();
  });

  options.forEach(function(opt, i) {
    opt.addEventListener("click", function() {
      applyLanguage(opt.getAttribute("data-lang"));
      closeList();
      btn.focus();
    });
    opt.addEventListener("keydown", function(e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        (options[i + 1] || options[0]).focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        (options[i - 1] || options[options.length - 1]).focus();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        applyLanguage(opt.getAttribute("data-lang"));
        closeList();
        btn.focus();
      } else if (e.key === "Escape") {
        closeList();
        btn.focus();
      }
    });
  });

  btn.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openList();
      if (options[0]) options[0].focus();
    } else if (e.key === "Escape") {
      closeList();
    }
  });

  document.addEventListener("click", function(e) {
    if (!switchEl.contains(e.target)) closeList();
  });

  applyLanguage((function() {
    try { return localStorage.getItem("site-lang") || "en"; } catch (e) { return "en"; }
  })());
})();

// Navbar scroll state
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

// Mobile hamburger menu
var hamburger = document.getElementById("hamburger");
var navLinks  = document.getElementById("nav-links");

hamburger.addEventListener("click", function() {
  var isOpen = navLinks.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll(".nav__link").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", function(e) {
  if (!navbar.contains(e.target) && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

// Active nav link
var sections   = document.querySelectorAll("main section[id]");
var navLinkEls = document.querySelectorAll(".nav__link");

var sectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var id = entry.target.id;
      navLinkEls.forEach(function(link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + id);
      });
    }
  });
}, { rootMargin: "-64px 0px -55% 0px", threshold: 0 });

sections.forEach(function(s) { sectionObserver.observe(s); });

// Scroll reveal
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (!entry.isIntersecting) return;
    var el = entry.target;
    var parent = el.parentElement;
    var siblings = parent ? Array.from(parent.querySelectorAll(".reveal")) : [];
    var index = siblings.indexOf(el);
    el.style.transitionDelay = Math.min(index * 60, 300) + "ms";
    el.classList.add("visible");
    revealObserver.unobserve(el);
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach(function(el) {
  revealObserver.observe(el);
});

// Project image sliders
(function() {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".project-slider").forEach(function(slider) {
    var track       = slider.querySelector(".project-slider__track");
    var placeholder = slider.querySelector(".project-slider__placeholder");
    var prevBtn     = slider.querySelector(".project-slider__arrow--prev");
    var nextBtn     = slider.querySelector(".project-slider__arrow--next");
    var dotsEl      = slider.querySelector(".project-slider__dots");
    var slides      = Array.from(track.querySelectorAll(".project-slider__slide"));
    var pending     = slides.length;

    if (pending === 0) { activate([]); return; }

    slides.forEach(function(slide) {
      var img = slide.querySelector("img");
      if (!img || img.complete) {
        pending--;
        if (pending === 0) activate(collect());
        return;
      }
      function resolve() {
        pending--;
        if (pending === 0) activate(collect());
      }
      img.addEventListener("load",  resolve, { once: true });
      img.addEventListener("error", resolve, { once: true });
    });

    function collect() {
      return Array.from(track.querySelectorAll(".project-slider__slide"));
    }

    function activate(active) {
      if (active.length === 0) {
        track.hidden              = true;
        prevBtn.hidden            = true;
        nextBtn.hidden            = true;
        dotsEl.hidden             = true;
        placeholder.style.display = "flex";
        return;
      }
      if (active.length === 1) {
        prevBtn.hidden = true;
        nextBtn.hidden = true;
        dotsEl.hidden  = true;
        return;
      }

      // 2+ slides: full carousel
      var current  = 0;
      var autoId   = null;
      var resumeId = null;
      var hovered  = false;

      active.forEach(function(_, i) {
        var dot = document.createElement("button");
        dot.className = "project-slider__dot";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Slide " + (i + 1));
        dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
        dot.addEventListener("click", function() { goTo(i); scheduleResume(); });
        dotsEl.appendChild(dot);
      });

      function goTo(idx) {
        current = idx;
        track.style.transform = "translateX(-" + (idx * 100) + "%)";
        dotsEl.querySelectorAll(".project-slider__dot").forEach(function(d, i) {
          d.setAttribute("aria-selected", i === idx ? "true" : "false");
        });
      }

      function next() { goTo((current + 1) % active.length); }
      function prev() { goTo((current - 1 + active.length) % active.length); }

      function startAuto() {
        if (reducedMotion) return;
        autoId = setInterval(function() { if (!hovered) next(); }, 4000);
      }
      function stopAuto() { clearInterval(autoId); autoId = null; }
      function scheduleResume() {
        stopAuto();
        clearTimeout(resumeId);
        resumeId = setTimeout(startAuto, 6000);
      }

      nextBtn.addEventListener("click", function() { next(); scheduleResume(); });
      prevBtn.addEventListener("click", function() { prev(); scheduleResume(); });

      slider.addEventListener("mouseenter", function() { hovered = true; });
      slider.addEventListener("mouseleave", function() { hovered = false; });

      var touchStartX = 0;
      slider.addEventListener("touchstart", function(e) {
        touchStartX = e.changedTouches[0].clientX;
      }, { passive: true });
      slider.addEventListener("touchend", function(e) {
        var dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) >= 50) {
          if (dx < 0) next(); else prev();
          scheduleResume();
        }
      }, { passive: true });

      slider.setAttribute("tabindex", "0");
      slider.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft")  { prev(); scheduleResume(); e.preventDefault(); }
        if (e.key === "ArrowRight") { next(); scheduleResume(); e.preventDefault(); }
      });

      startAuto();
    }
  });
})();
