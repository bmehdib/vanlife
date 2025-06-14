import Logo from "../../images/logog.png";
import { NavLink } from "react-router";
export default function Header() {
  return (
    <header className="bg-orange-50 w-full p-5 grid items-center">
      <nav className="flex justify-between">
        <div>
          <NavLink to="/">
            <img className="w-40" src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="flex gap-5 text-lg font-bold text-gray-600">
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            to={"Host"}
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            to={"about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            to={"vanspage"}
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
