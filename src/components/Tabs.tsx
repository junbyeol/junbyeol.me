import { useState } from "react";

export type Tab = {
  id: string;
  label: string;
  panel: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTabId?: string;
};

const Tabs = ({ tabs, defaultTabId }: TabsProps) => {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id);

  const handleTabClick = (id: string) => setActiveId(id);

  const handleTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: string,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(id);
    }
  };

  const activePanel = tabs.find((tab) => tab.id === activeId)?.panel;

  return (
    <section className="px-2 py-8 md:px-32 md:py-12">
      <div className="flex border-b-[3px] border-text">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeId === id}
            aria-controls={`tabpanel-${id}`}
            tabIndex={activeId === id ? 0 : -1}
            onClick={() => handleTabClick(id)}
            onKeyDown={(e) => handleTabKeyDown(e, id)}
            className={[
              "px-5 py-3 text-sm md:text-base font-medium transition-colors relative",
              "focus:outline-none",
              "cursor-pointer",
              activeId === id
                ? "font-bold after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[3px] after:bg-text"
                : "text-text/50 hover:text-text",
            ].join(" ")}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8">{activePanel}</div>
    </section>
  );
};

export default Tabs;
