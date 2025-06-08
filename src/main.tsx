import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Logo from "../images/logog.png";
import { Link } from "react-router";
createRoot(document.getElementById("root")!).render(
  <section className="h-svh overflow-hidden">
    <BrowserRouter>
      <header className="bg-orange-50 w-full h-24 p-5 grid items-center">
        <nav className="flex justify-between">
          <div>
            <img className="w-40" src={Logo} alt="" />
          </div>
          <div className="flex gap-5 text-lg font-bold text-gray-600">
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Vans</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </section>
);
