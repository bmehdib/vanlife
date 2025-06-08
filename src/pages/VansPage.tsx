import "../../serverData";
export default function VansPage() {
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
    </section>
  );
}
