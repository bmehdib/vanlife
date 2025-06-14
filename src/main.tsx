import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/VansPage";
import Layout from "./pages/Layout";
import Host from "./pages/Host";
import Van from "./components/Van";
import Income from "./components/Income";
import Dashboard from "./components/Dashboard";
import HostVan from "./components/HostVan";
import HostVans from "./components/HostVans";
createRoot(document.getElementById("root")!).render(
  <section className="h-dvh overflow-x-hidden flex flex-col">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vanspage" element={<VansPage />} />
          <Route path="vanspage/:id" element={<Van />} />
          <Route path="Host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="Income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVan />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </section>
);
