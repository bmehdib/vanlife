import Logo from "../../images/logog.png";
import { Link } from "react-router";
export default function Header() {
  return (
    <header className="bg-orange-50 w-full p-5 grid items-center">
      <nav className="flex justify-between">
        <div>
          <Link to="/">
            <img className="w-40" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex gap-5 text-lg font-bold text-gray-600">
          <Link to={"/Host/Dashboard"}>Host</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/vanspage"}>Vans</Link>
        </div>
      </nav>
    </header>
  );
}
