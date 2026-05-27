export default function Navbar() {
    return (
        <nav className="w-full h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-8">

            <h1 className="text-white text-xl font-bold">
                AI Presentation Builder
            </h1>

            <button className="bg-white text-black px-4 py-2 rounded-lg front-medium hover:bg-zinc-200 transition">
                Create Presentation
            </button>   
        </nav>
    );
}