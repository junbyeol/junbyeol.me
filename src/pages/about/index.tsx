import Tabs, { type Tab } from "../../components/Tabs";
import HowTab from "./tabs/HowTab";
import IntroTab from "./tabs/IntroTab";

const TABS: Tab[] = [
  { id: "intro", label: "개요", panel: <IntroTab /> },
  { id: "how", label: "기술배경", panel: <HowTab /> },
];

const About = () => <Tabs tabs={TABS} />;

export default About;
