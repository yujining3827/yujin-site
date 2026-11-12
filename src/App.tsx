import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";

import Admin from "./pages/Admin";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import Guestbook from "./pages/Guestbook";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

import PortfolioLayout from "./components/PortfolioLayout";

// 인스타 프로필에 거는 짧은 주소. /reels로 들어온 방문이 분석 화면의 Pages에 따로 잡힌다
// (무료 플랜은 UTM 파라미터를 보여주지 않아서 경로로 구분한다)
const REELS_TARGET = "/post/2026-11-12-vibe-coding-guide";

// Vercel Web Analytics: 화면이 바뀔 때마다 조회를 보낸다.
// route는 글·프로젝트를 한 묶음으로 보는 용도, path는 실제 주소
function PageAnalytics() {
  const { pathname } = useLocation();
  const route = pathname
    .replace(/^\/post\/[^/]+$/, "/post/[slug]")
    .replace(/^\/projects\/[^/]+$/, "/projects/[slug]");

  return (
    <Analytics
      route={route}
      path={pathname}
      mode={import.meta.env.DEV ? "development" : "production"}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PageAnalytics />
      <Routes>
        <Route path="/reels" element={<Navigate to={REELS_TARGET} replace />} />
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
