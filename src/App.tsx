import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/about";
import Archive from "./pages/archive";
import Guestbook from "./pages/Guestbook";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="archive" element={<Archive />} />
          <Route path="guestbook" element={<Guestbook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
