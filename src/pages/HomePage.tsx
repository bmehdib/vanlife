import Logo from "../../images/logog.png";
import { Link } from "react-router";
export default function HomePage() {
  return (
    <section className="w-screen max-w-[40rem]">
      <header className="bg-white w-full h-24 p-5 grid items-center">
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
    </section>
  );
}
