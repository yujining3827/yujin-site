import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import Guestbook from "./pages/Guestbook";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

import PortfolioLayout from "./components/PortfolioLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/post/:slug" element={<BlogDetail />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
