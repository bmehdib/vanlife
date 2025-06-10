import { useState } from "react";
import { Link } from "react-router";
type Van = {
  id: number;
  imageUrl: string;
  price: number;
  name: string;
  description: string;
  type: string;
};
export default function VanCard({ vanDetail }: { vanDetail: Van }) {
  function cardColor(car: string) {
    if (car == "simple") return "bg-orange-400";
    if (car == "rugged") return "bg-blue-400";
    if (car == "luxury") return "bg-black";
  }
  const [imageIsLaoded, setImageIsLoaded] = useState(false);
  return (
    <Link key={vanDetail.id} to={`/vanspage/${vanDetail.id}`}>
      <div className="relative w-80 h-72  bg-orange-50 grid justify-center p-2 py-5 rounded-xl hover:bg-orange-200 transition">
        <img
          onLoad={() => setImageIsLoaded(true)}
          className={`w-40 h-40 rounded-xl -mt-2 ${
            imageIsLaoded ? "block" : "hidden"
          } `}
          src={vanDetail.imageUrl}
          alt=""
        />
        <div
          className={`w-40 h-40 bg-gray-200 rounded-xl -mt-2 ${
            !imageIsLaoded ? "block" : "hidden"
          } `}
        ></div>
        <div className="flex">
          <p className="font-bold">{vanDetail.name}</p>
          <div className="flex flex-col ml-4">
            <p className="font-bold">${vanDetail.price}</p>
            <p className="font-light  -mt-1">/day</p>
          </div>
        </div>
        <div
          className={`absolute bottom-6 left-20 p-2 text-white rounded-md max-w-20 text-center ${cardColor(
            vanDetail.type
          )}`}
        >
          {vanDetail.type}
        </div>
      </div>
    </Link>
  );
}
