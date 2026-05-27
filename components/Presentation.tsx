"use client";

import { useState } from "react";
import TitleSlide from "@/slides/TitleSlide";

export default function Presentation() {

  const slides = [
    {
      id: 1,
      type: "title",
      title: "AI Presentation Builder",
      subtitle: "Build beautiful AI-powered presentations",
    },
    {
      id: 2,
      type: "title",
      title: "Future of AI",
      subtitle: "How AI will change software engineering",
    },
    {
      id: 3,
      type: "title",
      title: "Why This Project Matters",
      subtitle: "AI + Design + Engineering",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6">

      <div className="w-[900px] h-[450px] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden">

        <TitleSlide
          title={slides[currentSlide].title}
          subtitle={slides[currentSlide].subtitle}
        />

      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev > 0 ? prev - 1 : prev
            )
          }
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition"
        >
          Previous
        </button>

        <p className="text-zinc-400">
          Slide {currentSlide + 1} / {slides.length}
        </p>

        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev < slides.length - 1 ? prev + 1 : prev
            )
          }
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition"
        >
          Next
        </button>

      </div>

    </div>
  );
}