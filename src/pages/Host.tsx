import { NavLink, Outlet } from "react-router";
export default function Host() {
  return (
    <section className="bg-orange-50 w-full p-5 flex flex-col h-full gap-5">
      <header className="w-full">
        <nav className="w-full flex justify-center gap-6 text-lg font-bold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            to={"/Host"}
            end
          >
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            to={"Income"}
          >
            <p>Income</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            to={"Dashboard"}
          >
            <p>Vans</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-400" : "")}
            to={"Dashboard"}
          >
            <p>Review</p>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </section>
  );
}
