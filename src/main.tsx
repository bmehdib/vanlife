import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/VansPage";
import Van from "./components/Van";
import Layout from "./pages/Layout";
createRoot(document.getElementById("root")!).render(
  <section className="h-dvh overflow-x-hidden flex flex-col">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vanspage" element={<VansPage />} />
          <Route path="/vanspage/:id" element={<Van />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </section>
);
