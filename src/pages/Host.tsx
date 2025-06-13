import { Link, Outlet } from "react-router";
export default function Host() {
  return (
    <section className="bg-orange-50 w-full p-5 flex flex-col h-full gap-5">
      <header className="w-full">
        <nav className="w-full flex justify-center gap-6 text-lg font-bold">
          <Link to={"/Host"}>
            <p>Dashboard</p>
          </Link>
          <Link to={"/Host/Income"}>
            <p>Income</p>
          </Link>
          <Link to={"/Host/Dashboard"}>
            <p>Vans</p>
          </Link>
          <Link to={"/Host/Dashboard"}>
            <p>Review</p>
          </Link>
        </nav>
      </header>
      <Outlet />
    </section>
  );
}
