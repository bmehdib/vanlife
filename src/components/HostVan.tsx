export default function HostVan() {
  return (
    <section>
      <h2 className="text-center text-2xl font-bold">Your Listed Vans</h2>
      <main className="flex flex-wrap gap-4 my-4">
        <div className="w-full h-24 max-w-96 bg-white p-2 rounded-2xl mx-auto text-right font-bold flex justify-between">
          <img
            className="w-20 h-20 rounded-xl "
            src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
            alt=""
          />
          <div>
            <p>Modest Explorer</p>
            <p>$60/day</p>
          </div>
        </div>
        <div className="w-full h-24 max-w-96 bg-white p-2 rounded-2xl mx-auto text-right font-bold flex justify-between">
          <img
            className="w-20 h-20 rounded-xl "
            src="https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
            alt=""
          />
          <div>
            <p>Beach Bum</p>
            <p>$80/day</p>
          </div>
        </div>
        <div className="w-full h-24 max-w-96 bg-white p-2 rounded-2xl mx-auto text-right font-bold flex justify-between">
          <img
            className="w-20 h-20 rounded-xl "
            src="https://assets.scrimba.com/advanced-react/react-router/reliable-red.png"
            alt=""
          />
          <div>
            <p>Reliable Red</p>
            <p>$100/day</p>
          </div>
        </div>
      </main>
    </section>
  );
}
