import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/VansPage";
import Logo from "../images/logog.png";
import { Link } from "react-router";
import Van from "./components/Van";
createRoot(document.getElementById("root")!).render(
  <section className="h-dvh overflow-x-hidden flex flex-col">
    <BrowserRouter>
      <header className="bg-orange-50 w-full p-5 grid items-center">
        <nav className="flex justify-between">
          <div>
            <Link to="/">
              <img className="w-40" src={Logo} alt="" />
            </Link>
          </div>
          <div className="flex gap-5 text-lg font-bold text-gray-600">
            <Link to={"/about"}>About</Link>
            <Link to={"/vanspage"}>Vans</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vanspage" element={<VansPage />} />
        <Route path="/vanspage/:id" element={<Van />} />
      </Routes>
    </BrowserRouter>
  </section>
);
