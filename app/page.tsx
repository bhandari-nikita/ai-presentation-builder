import Navbar from "@/components/Navbar";
import Presentation from "@/components/Presentation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">

      <Navbar />

      <div className="flex items-center justify-center pt-16">
        <Presentation />
      </div>

    </main>
  );
}