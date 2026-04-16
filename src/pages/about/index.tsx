import { useState } from "react";
import IntroTab from "./tabs/IntroTab";
import HowTab from "./tabs/HowTab";

type TabId = "intro" | "how";

type Tab = {
  id: TabId;
  label: string;
};

const TABS: Tab[] = [
  { id: "intro", label: "여긴 어디?" },
  { id: "how", label: "어떻게 만들었나요?" },
];

const TAB_PANELS: Record<TabId, React.ReactNode> = {
  intro: <IntroTab />,
  how: <HowTab />,
};

const About = () => {
  const [activeTab, setActiveTab] = useState<TabId>("intro");

  const handleTabClick = (id: TabId) => setActiveTab(id);

  const handleTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: TabId,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveTab(id);
    }
  };

  return (
    <section className="px-8 py-8 md:px-32 md:py-12">
      <div className="flex border-b-[3px] border-text">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeTab === id}
            aria-controls={`tabpanel-${id}`}
            tabIndex={activeTab === id ? 0 : -1}
            onClick={() => handleTabClick(id)}
            onKeyDown={(e) => handleTabKeyDown(e, id)}
            className={[
              "px-5 py-3 text-sm md:text-base font-medium transition-colors relative",
              "focus:outline-none",
              activeTab === id
                ? "font-bold after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[3px] after:bg-text"
                : "text-text/50 hover:text-text",
            ].join(" ")}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8">{TAB_PANELS[activeTab]}</div>
    </section>
  );
};

export default About;
