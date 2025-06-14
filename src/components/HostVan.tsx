import { useState } from "react";
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
  const vanItems = vans.map((van) => {
    return (
      <div className="w-full h-24 max-w-96 bg-white p-2 rounded-2xl mx-auto text-right font-bold flex justify-between hover:bg-orange-200">
        <img className="w-20 h-20 rounded-xl " src={van.imageUrl} alt="" />
        <div>
          <p>{van.name}</p>
          <p>${van.price}/day</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <h2 className="text-center text-2xl font-bold">Your Listed Vans</h2>
      <main className="flex flex-wrap gap-4 my-4">{vanItems}</main>
    </section>
  );
}
