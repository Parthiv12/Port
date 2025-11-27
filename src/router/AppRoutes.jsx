import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout.jsx";

// Pages
import HomePage from "../pages/Home/HomePage.jsx";
import TimelinePage from "../pages/Timeline/TimelinePage.jsx";
import ProjectsPage from "../pages/Projects/ProjectPage.jsx";
import ProjectsDetailPage from "../pages/Projects/ProjectsDetailPage.jsx";
import AboutPage from "../pages/About/AboutPage.jsx";
import ContactPage from "../pages/Contact/ContactPage.jsx";
import StackPage from "../pages/Stack/StackPage.jsx";
import ExperiencePage from "../pages/Experience/ExperiencePage.jsx";
// import Playground from '../pages/Playground/PlaygroundPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

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

        {/* Experience */}
        <Route path="/experience" element={<ExperiencePage />} />

        {/* Playground */}
        { /* <Route path="/playground/*" element={<Playground />} />
          --> not sure if im going to keep this route for now.
        */}
      </Route>
    </Routes>
  );
}
