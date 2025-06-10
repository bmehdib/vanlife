import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/VansPage";
import Layout from "./pages/Layout";
import Host from "./pages/Host";
createRoot(document.getElementById("root")!).render(
  <section className="h-dvh overflow-x-hidden flex flex-col">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vanspage" element={<VansPage />} />
          <Route path="/Host" element={<Host />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </section>
);
