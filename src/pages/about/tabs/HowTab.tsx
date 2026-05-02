import { useState } from "react";
import garageDiagram from "../../../assets/garage-diagram.png";

type ListItem = {
  label: string;
  description: string;
};

const PROS: ListItem[] = [
  {
    label: "경제성",
    description:
      "본업 외 프로젝트에 투입되는 인프라 유지 비용을 최소화할 수 있습니다.",
  },
  {
    label: "지속성",
    description:
      "방치되는 프로젝트가 없도록, 모든 프로젝트의 관리 지점을 한 곳으로 모읍니다.",
  },
  {
    label: "확장성",
    description:
      "기존 프로젝트들의 패턴을 이용하면 새로운 프로젝트의 킥오프와 배포, 유지보수를 더 빠르게 할 수 있습니다.",
  },
  {
    label: "AOP(Aspect-Oriented Programming)",
    description:
      "단일 게이트웨이를 통해 로깅, 모니터링 등의 공통된 니즈를 해소할 수 있습니다.",
  },
  {
    label: "미래(?)",
    description:
      "현재 VM은 GCP를 이용하고 있지만, 미래에는 홈 랩으로의 이관을 꿈꾸고 있습니다.",
  },
];

const CONS: ListItem[] = [
  {
    label: "SPOF",
    description:
      "VM 또는 gateway가 단일 장애점(single point of failure)이 될 수 있습니다.",
  },
  {
    label: "부하 전파",
    description:
      "특정 시스템의 부하가 시스템 전체에 영향을 줄 수 있습니다 (이런 고민을 할 정도의 서비스가 탄생했으면 좋겠습니다).",
  },
];

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-text">{children}</strong>
);

const HowTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageMouseEnter = () => setIsExpanded(true);
  const handleImageMouseLeave = () => setIsExpanded(false);

  return (
    <div
      id="tabpanel-how"
      role="tabpanel"
      aria-labelledby="tab-how"
      className="flex flex-col gap-10"
    >
      {/* 프로젝트 소개 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">프로젝트: My-garage</h2>
        <p className="text-base leading-relaxed text-text/80">
          저의 모든 서비스는 하나의 <B>Virtual Machine</B>에서 동작하고
          있습니다.
        </p>
        <p className="text-base leading-relaxed text-text/80">
          저는 이 VM을 <B>"garage"</B>라고 부르고 있습니다.
        </p>
        <p className="text-base text-text/80">
          코드베이스는{" "}
          <a
            href="https://github.com/junbyeol/my-garage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my-garage GitHub 저장소로 이동"
            className="underline underline-offset-4 hover:text-[#D03020] transition-colors"
          >
            GitHub
          </a>
          에서 볼 수 있습니다.
        </p>
      </div>

      {/* 아키텍처 — 본문 왼쪽, 이미지 오른쪽 */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold border-b border-text/20 pb-2">
          아키텍처
        </h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4 flex-1">
            <p className="text-base leading-relaxed text-text/80">
              <B>junbyeol.me</B> 도메인을 통하는 요청은 모두 VM의 단일{" "}
              <B>게이트웨이</B>로 도착합니다.
            </p>
            <p className="text-base leading-relaxed text-text/80">
              해당 게이트웨이는 <B>Nginx</B> 컨테이너이며, 요청의 내용에 따라
              요청을 적절한 내부 컨테이너로 <B>포워딩</B>하거나 외부 사이트로{" "}
              <B>리다이렉션</B>합니다.
            </p>
            <p className="text-base leading-relaxed text-text/80">
              하나의 <B>VM</B>, 하나의 <B>게이트웨이</B>를 이용하는 것은 아래의
              트레이드오프가 있습니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold uppercase underline underline-offset-4 tracking-widest text-text/50">
                  장점
                </span>
                {PROS.map(({ label, description }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm">{label}</span>
                    <p className="text-sm text-text/70 leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold uppercase underline underline-offset-4 tracking-widest text-text/50">
                  단점
                </span>
                {CONS.map(({ label, description }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm">{label}</span>
                    <p className="text-sm text-text/70 leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 인프라 다이어그램 */}
          <div
            className="border border-text/20 md:w-64 flex-none self-start md:cursor-zoom-in"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
          >
            <img
              src={garageDiagram}
              alt="My-garage 인프라 다이어그램"
              className="w-full"
            />
          </div>

          {/* 확대 오버레이 (데스크탑 전용) */}
          {isExpanded && (
            <div
              className="fixed top-20 right-20 z-50 hidden md:flex items-center justify-center"
              onMouseEnter={handleImageMouseEnter}
              onMouseLeave={handleImageMouseLeave}
            >
              <img
                src={garageDiagram}
                alt="My-garage 인프라 다이어그램 확대"
                className="w-[50vw] object-contain border border-text/20"
              />
            </div>
          )}
        </div>
      </div>

      {/* 운영 */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold border-b border-text/20 pb-2">운영</h3>
        <p className="text-base leading-relaxed text-text/80">
          게이트웨이 뒷편에서는 <B>MySQL</B>, <B>Redis</B>와 같은 공용 인프라와
          각 서비스의 애플리케이션 서버들이 모두 <B>Docker</B> 컨테이너로
          관리됩니다.
        </p>
        <p className="text-base leading-relaxed text-text/80">
          이 컨테이너 이미지들은 <B>GitHub Actions</B>을 통해 유지됩니다.
        </p>
        <p className="text-base leading-relaxed text-text/80">
          GitHub에 코드가 <B>push</B>될 때, 이미지들은 빌드되어{" "}
          <B>GitHub Container Registry(GHCR)</B>에 저장됩니다.
        </p>
        <p className="text-base leading-relaxed text-text/80">
          그리고 GitHub Actions는 VM이 GHCR에서 이미지를 <B>pull</B>받아 배포
          중인 이미지를 교체하도록 합니다.
        </p>
      </div>
    </div>
  );
};

export default HowTab;
