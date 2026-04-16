import Tabs, { type Tab } from "../../components/Tabs";
import ProjectsTab from "./tabs/ProjectsTab";
import RecordsTab from "./tabs/RecordsTab";

const TABS: Tab[] = [
  { id: "projects", label: "프로젝트", panel: <ProjectsTab /> },
  { id: "records", label: "기록", panel: <RecordsTab /> },
];

const Archive = () => <Tabs tabs={TABS} />;

export default Archive;
