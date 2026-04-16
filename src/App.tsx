import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/about";
import Blog from "./pages/Blog";
import Guestbook from "./pages/Guestbook";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="resume" element={<Resume />} />
          <Route path="guestbook" element={<Guestbook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
