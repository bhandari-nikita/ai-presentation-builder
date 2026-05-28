import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900">

      <Navbar />

      <div className="flex items-center justify-center p-10">
        <Presentation />
      </div>

    </main>
  );
}