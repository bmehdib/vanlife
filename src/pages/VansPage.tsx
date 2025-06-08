import { useEffect, useState } from "react";
import "../../serverData";
export default function VansPage() {
  const [vans, SetVans] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => SetVans(data.vans));
  }, []);
  const vansCard = vans.map((van) => {
    function cardColor(car: any) {
      if (car == "simple") return "bg-orange-400";
      if (car == "rugged") return "bg-blue-400";
      if (car == "luxury") return "bg-black";
    }
    return (
      <div
        key={van.id}
        className="relative w-60 h-60 bg-orange-50 grid justify-center p-2 rounded-xl"
      >
        <img className="w-40" src={van.imageUrl} alt="" />
        <div className="flex ">
          <p className="font-bold">{van.name}</p>
          <div className="flex flex-col ml-4">
            <p className="font-bold">${van.price}</p>
            <p className="font-light  -mt-1">/day</p>
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-9 p-2 text-white rounded-md max-w-20 text-center ${cardColor(
            van.type
          )}`}
        >
          {van.type}
        </div>
      </div>
    );
  });

  return (
    <section>
      <h2 className="text-3xl font-bold w-3/4 text-center  mx-auto mt-4">
        Explore our van options
      </h2>
      <div className="flex w-full justify-center gap-10 font-bold mt-5 items-center">
        <button className="p-4 bg-orange-200 rounded-md cursor-pointer">
          Simple
        </button>
        <button className="p-4 bg-orange-200 rounded-md cursor-pointer">
          Luxary
        </button>
        <button className="p-4 bg-orange-200 rounded-md cursor-pointer">
          Rugged
        </button>
        <p className="border-b-2 cursor-pointer">clear filters</p>
      </div>
      <main className="grid grid-cols-3 gap-5 mt-5 place-items-center">
        {vansCard}
      </main>
    </section>
  );
}
