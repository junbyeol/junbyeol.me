type Status = "active" | "archived" | "wip";

type Project = {
  name: string;
  description: string;
  status: Status;
  github?: string;
  link?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    name: "junbyeol.me",
    description: "지금 보고 있는 이 사이트.",
    status: "active",
    github: "https://github.com/junbyeol/junbyeol.me",
    link: "https://junbyeol.me",
  },
  {
    name: "my-garage",
    description:
      "모든 개인 프로젝트가 동작하는 단일 VM 인프라. Nginx 게이트웨이와 Docker 컨테이너 기반으로 운영.",
    status: "active",
    github: "https://github.com/junbyeol/my-garage",
  },
  {
    name: "resume.junbyeol.me",
    description: "이력서를 웹으로 제공하는 정적 페이지.",
    status: "active",
    link: "https://resume.junbyeol.me",
  },
  {
    name: "@junbyeol/tiptap-editor",
    description:
      "Headless EditorKit인 tiptap을 이용해 개발중인 리치 텍스트 에디터 npm 패키지. 외주 개발 사이트인 knaps.or.kr에서 사용중",
    status: "active",
    demo: "https://tiptap.junbyeol.me",
  },
  {
    name: "KNAPS 공식 페이지",
    description:
      "한국약학대학생연합(KNAPS)의 공식 페이지와 어드민 페이지를 외주 개발. 해당 단체의 구글 계정 소유의 GCP에서 호스팅 및 유 지보수 중",
    status: "active",
    link: "https://knaps.or.kr",
  },
  {
    name: "garage-template-web",
    description:
      "my-garage에 웹사이트를 빠르게 올릴 수 있도록 만든 github template",
    status: "active",
    github: "https://github.com/junbyeol/garage-template-web",
  },
];

const STATUS_CONFIG: Record<Status, { label: string; className: string }> = {
  active: {
    label: "운영 중",
    className: "text-emerald-600 dark:text-emerald-400",
  },
  wip: {
    label: "개발 중",
    className: "text-amber-600 dark:text-amber-400",
  },
  archived: {
    label: "종료",
    className: "text-text/40",
  },
};

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ProjectsTab = () => (
  <div
    id="tabpanel-projects"
    role="tabpanel"
    aria-labelledby="tab-projects"
    className="grid grid-cols-1 md:grid-cols-2 gap-4"
  >
    {PROJECTS.map((project) => {
      const status = STATUS_CONFIG[project.status];
      return (
        <article
          key={project.name}
          className="border-2 border-text/15 p-5 flex flex-col gap-3 hover:border-text/40 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-bold leading-snug">{project.name}</h3>
            <span
              className={`text-xs font-medium shrink-0 mt-0.5 ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-text/70">
            {project.description}
          </p>

          <div className="flex gap-4 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub 저장소로 이동`}
                tabIndex={0}
                className="flex items-center gap-1.5 text-xs text-text/50 hover:text-[#D03020] transition-colors"
              >
                <GitHubIcon />
                GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} 사이트로 이동`}
                tabIndex={0}
                className="flex items-center gap-1.5 text-xs text-text/50 hover:text-[#D03020] transition-colors"
              >
                <ExternalLinkIcon />
                바로가기
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} 데모 사이트로 이동`}
                tabIndex={0}
                className="flex items-center gap-1.5 text-xs text-text/50 hover:text-[#D03020] transition-colors"
              >
                <ExternalLinkIcon />
                데모로 이동
              </a>
            )}
          </div>
        </article>
      );
    })}
  </div>
);

export default ProjectsTab;
