import { useState } from "react";
import { useParams, Link } from "react-router";
export default function HostVan() {
  const [vans] = useState([
    {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "simple",
    },
    {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "rugged",
    },
    {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury",
    },
  ]);
  const param = useParams();
  const id = Number(param?.id);

  function cardColor(car: string) {
    if (car == "simple") return "bg-orange-400";
    if (car == "rugged") return "bg-blue-400";
    if (car == "luxury") return "bg-black";
  }
  return (
    <section>
      <Link to="/Host/vans/">
        <h2>back to all vans</h2>
      </Link>
      {id ? (
        <main className="bg-white rounded-2xl max-w-[40rem] h-full mt-4">
          <div className="flex  p-4 ">
            <img
              className="max-w-72 rounded-2xl"
              src={vans[id - 1].imageUrl}
              alt=""
            />
            <div className="w-full text-right">
              <div
                className={`p-2 text-white rounded-md max-w-20 text-center ml-auto  ${cardColor(
                  vans[id - 1].type
                )}`}
              >
                {vans[id - 1].type}
              </div>
              <div className="mt-20 ">
                <p className="text-2xl font-bold">{vans[id - 1].name}</p>
                <p className="">{vans[id - 1].price}/a Day</p>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <h1>{id}</h1>
      )}
    </section>
  );
}
