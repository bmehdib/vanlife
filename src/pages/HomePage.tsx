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
      <main className="homepage text-white ">
        <div className="w-full h-full z-10 relative flex flex-col gap-2 justify-center">
          <h2 className="text-3xl font-bold w-3/4 text-left  mx-auto">
            You got the travel plans, we got the travel vans.
          </h2>
          <p className=" w-3/4 text-left  mx-auto">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="btn mt-5">Find your van</button>
        </div>
      </main>
    </section>
  );
}
