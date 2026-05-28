export default function Navbar() {

  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-black/80 backdrop-blur-xl sticky top-0 z-50">

      <div>
        <h1 className="text-2xl font-bold text-white">
          PresentAI
        </h1>

        <p className="text-sm text-zinc-500">
          AI Presentation Builder
        </p>
      </div>

      <div className="flex items-center gap-3">

        <button className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 rounded-xl hover:bg-zinc-800 transition">
          Share
        </button>

        <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-zinc-200 transition">
          Export
        </button>

      </div>

    </nav>
  );
}