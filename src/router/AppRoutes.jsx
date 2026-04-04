import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout.jsx";

// Pages — lazy loaded so each route gets its own chunk
const HomePage = lazy(() => import("../pages/Home/HomePage.jsx"));
const TimelinePage = lazy(() => import("../pages/Timeline/TimelinePage.jsx"));
const ProjectsPage = lazy(() => import("../pages/Projects/ProjectPage.jsx"));
const ProjectsDetailPage = lazy(() => import("../pages/Projects/ProjectsDetailPage.jsx"));
const AboutPage = lazy(() => import("../pages/About/AboutPage.jsx"));
const ContactPage = lazy(() => import("../pages/Contact/ContactPage.jsx"));
const StackPage = lazy(() => import("../pages/Stack/StackPage.jsx"));
const RAGPage = lazy(() => import("../pages/RAG/RAGPage.jsx"));
// const Playground = lazy(() => import('../pages/Playground/PlaygroundPage.jsx'));
const T2Page = lazy(() => import("../pages/T2/T2Page.jsx"));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<PageLayout />}>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/t2" element={<T2Page />} />

          {/* Projects */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectsDetailPage />} />

          {/* Timeline */}
          <Route path="/timeline" element={<TimelinePage />} />

          {/* About & Contact */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Tech Stack */}
          <Route path="/stack" element={<StackPage />} />

          {/* RAG Research */}
          <Route path="/rag" element={<RAGPage />} />

          {/* Playground */}
          {/* <Route path="/playground/*" element={<Playground />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}
