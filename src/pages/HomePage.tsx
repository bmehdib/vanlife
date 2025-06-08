export default function HomePage() {
  return (
    <section className="w-screen h-full">
      <main className="homepage text-white ">
        <div className="w-full h-full z-10 relative flex flex-col gap-2 justify-center">
          <h2 className="text-3xl font-bold w-3/4 text-center  mx-auto">
            You got the travel plans, we got the travel vans.
          </h2>
          <p className=" w-3/4 text-center  mx-auto">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="btn w-3/4 mt-5">Find your van</button>
        </div>
      </main>
    </section>
  );
}
