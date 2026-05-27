"use client";

import { useState } from "react";
import TitleSlide from "@/slides/TitleSlide";
import BulletSlide from "@/slides/BulletSlide";
import QuoteSlide from "@/slides/QuoteSlide";

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
      type: "bullet",
      title: "Core Features",
      bullets: [
        "AI-generated presentations",
        "Dynamic slide layouts",
        "Editable slides",
        "PDF export",
      ],
    },

    {
      id: 3,
      type: "quote",
      quote: "AI will not replace developers. Developers using AI will replace those who don't.",
      author: "Modern Engineering Reality",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slide: any = slides[currentSlide];

  return (
    <div className="flex flex-col items-center gap-6">

      <div className="w-[900px] h-[450px] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">

        {
          slides[currentSlide].type === "title" && (
            <TitleSlide
              title={slide.title}
              subtitle={slide.subtitle}
            />
          )
        }

        {
          slides[currentSlide].type === "bullet" && (
            <BulletSlide
              title={slide.title}
              bullets={slide.bullets}
            />
          )
        }

        {
          slides[currentSlide].type === "quote" && (
            <QuoteSlide
              quote={slide.quote}
              author={slide.author}
            />
          )
        }

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