import { useEffect, useState } from "react";
import "../../serverData";
import VanCard from "./VanCard";
export default function VansPage() {
  const [vans, SetVans] = useState<van[] | null>(null);
  type van = {
    id: number;
    imageUrl: string;
    price: number;
    name: string;
    description: string;
    type: string;
  };
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => SetVans(data.vans));
  }, []);
  const vansCard = vans?.map((van: van) => {
    return <VanCard key={van.id} vanDetail={van} />;
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
      <main className="cardsGridProperty gap-5 mt-5 place-items-center">
        {vansCard}
      </main>
    </section>
  );
}
