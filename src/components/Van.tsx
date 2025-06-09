import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import "../../serverData";
export default function Van() {
  const [vanDetails, setVanDetail] = useState<van | null>(null);
  const param = useParams();
  type van = {
    id: number;
    imageUrl: string;
    price: number;
    name: string;
    description: string;
    type: string;
  };
  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, [param.id]);
  function cardColor(car: string | undefined) {
    if (car == "simple") return "bg-orange-400";
    if (car == "rugged") return "bg-blue-400";
    if (car == "luxury") return "bg-black";
  }
  return (
    <section className="flex flex-col gap-5 p-5 h-screen w-full">
      <Link to={"/vanspage"}>
        <p className="border-b-2 w-32">back to all Vans</p>
      </Link>

      {vanDetails ? (
        <div className="flex w-full justify-center h-2/3 gap-4 ">
          <img
            className="object-contain rounded-lg max-h-[37rem]"
            src={vanDetails.imageUrl}
            alt=""
          />
          <div className="flex flex-col">
            <button
              className={`mr-auto p-2 text-white rounded-md max-w-20 text-center ${cardColor(
                vanDetails.type
              )}`}
            >
              {vanDetails.type}
            </button>
            <h2 className="mx-auto text-2xl font-bold">{vanDetails?.name}</h2>
            <p className="font-bold">
              ${vanDetails.price}/<span className="font-normal">day</span>
            </p>
            <p className="text-center p-12">{vanDetails?.description}</p>
            <button className=" w-3/4 bg-orange-300 mx-auto p-4 rounded-xl mt-auto text-white font-bold cursor-pointer">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-2/3 gap-4 ">
          <div className="w-[45rem] h-full  bg-gray-400"></div>
          <div className="flex w-full flex-col">
            <button
              className={`mr-auto p-2 text-white rounded-md max-w-20 text-center bg-gray-300`}
            >
              _______
            </button>
            <h2 className="mx-auto text-2xl font-bold"></h2>
            <p className="font-bold">
              $??/<span className="font-normal">day</span>
            </p>
            <div className="text-center  h-full mb-2 bg-gray-400"></div>
            <button className=" w-3/4 bg-orange-300 mx-auto p-4 rounded-xl mt-auto text-white font-bold cursor-pointer">
              Rent this van
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
