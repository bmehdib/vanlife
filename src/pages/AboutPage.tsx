import bg from "../../images/bg-about.jpg";
export default function AboutPage() {
  return (
    <section className="w-screen h-full">
      <div className="w-full">
        <img
          style={{ objectPosition: "0 80%" }}
          className="w-full h-[25rem] object-cover "
          src={bg}
          alt=""
        />
      </div>
      <div className="text-black grid gap-4 mt-4 ">
        <h2 className="text-3xl font-bold w-3/4 text-center  mx-auto">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className=" w-2/4 text-center  mx-auto mb-7">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
      </div>
      <div className="text-black  w-3/4 bg-orange-300 mx-auto p-8 rounded-xl">
        <p className="text-xl max-w-60 mb-5">
          Your destination is waiting. Your van is ready.
        </p>
        <button className="bg-black text-white p-2">Explore our Vans</button>
      </div>
    </section>
  );
}
