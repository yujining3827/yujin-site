import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogList from "./pages/BlogList";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";
import WritePage from "./pages/WritePage";
import Admin from "./pages/AdminPage";

import PortfolioLayout from "./components/PortfolioLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path="/about" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Route>

        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogDetail />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
