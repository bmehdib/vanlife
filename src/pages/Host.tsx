import { Outlet } from "react-router";

export default function Host() {
  return (
    <section className="bg-orange-50 w-full p-5 flex h-full">
      <header className="w-full">
        <nav className="w-full flex justify-center gap-6 text-lg font-bold">
          <p>Dashboard</p>
          <p>Income</p>
          <p>Vans</p>
          <p>Review</p>
        </nav>
      </header>
      <Outlet />
    </section>
  );
}
