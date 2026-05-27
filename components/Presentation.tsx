"use client";

import { useState } from "react";

import TitleSlide from "@/slides/TitleSlide";
import BulletSlide from "@/slides/BulletSlide";
import QuoteSlide from "@/slides/QuoteSlide";
import ImageSlide from "@/slides/ImageSlide";

export default function Presentation() {

  const [slides, setSlides] = useState([
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
      quote:
        "AI will not replace developers. Developers using AI will replace those who don't.",
      author: "Modern Engineering Reality",
    },

    {
      id: 4,
      type: "image",
      title: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slide: any = slides[currentSlide];

  function updateSlideField(field: string, value: string) {

    const updatedSlides = [...slides];

    updatedSlides[currentSlide] = {
      ...updatedSlides[currentSlide],
      [field]: value,
    };

    setSlides(updatedSlides);
  }

  function renderSlide() {

    switch (slide.type) {

      case "title":
        return (
          <TitleSlide
            title={slide.title}
            subtitle={slide.subtitle}
          />
        );

      case "bullet":
        return (
          <BulletSlide
            title={slide.title}
            bullets={slide.bullets}
          />
        );

      case "quote":
        return (
          <QuoteSlide
            quote={slide.quote}
            author={slide.author}
          />
        );

      case "image":
        return (
          <ImageSlide
            title={slide.title}
            image={slide.image}
          />
        );

      default:
        return null;
    }
  }

  return (
    <div className="flex gap-6 items-start">

      {/* Sidebar */}
      <div className="w-64 h-[700px] bg-zinc-900 rounded-2xl p-4 overflow-y-auto">

        <h2 className="text-white font-bold mb-4">
          Slides
        </h2>

        <div className="space-y-3">

          {slides.map((s: any, index: number) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-full text-left p-3 rounded-xl transition ${
                currentSlide === index
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              {s.type.charAt(0).toUpperCase() + s.type.slice(1)} Slide
            </button>
          ))}

        </div>

      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-6">

        {/* Presentation Preview */}
        <div className="w-[900px] h-[450px] bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out">
          {renderSlide()}
        </div>

        {/* Edit Panel */}
        <div className="w-[900px] bg-zinc-900 rounded-2xl p-6">

          <h2 className="text-white text-2xl font-bold mb-6">
            Edit Slide
          </h2>

          {(slide.type === "title" ||
            slide.type === "bullet" ||
            slide.type === "image") && (

            <div className="mb-4">

              <label className="block text-zinc-400 mb-2">
                Title
              </label>

              <input
                type="text"
                value={slide.title}
                onChange={(e) =>
                  updateSlideField("title", e.target.value)
                }
                className="w-full bg-zinc-800 text-white p-3 rounded-xl outline-none"
              />

            </div>
          )}

          {slide.type === "title" && (

            <div className="mb-4">

              <label className="block text-zinc-400 mb-2">
                Subtitle
              </label>

              <input
                type="text"
                value={slide.subtitle}
                onChange={(e) =>
                  updateSlideField("subtitle", e.target.value)
                }
                className="w-full bg-zinc-800 text-white p-3 rounded-xl outline-none"
              />

            </div>
          )}

          {slide.type === "quote" && (

            <div className="space-y-4">

              <div>

                <label className="block text-zinc-400 mb-2">
                  Quote
                </label>

                <textarea
                  value={slide.quote}
                  onChange={(e) =>
                    updateSlideField("quote", e.target.value)
                  }
                  className="w-full bg-zinc-800 text-white p-3 rounded-xl outline-none"
                />

              </div>

              <div>

                <label className="block text-zinc-400 mb-2">
                  Author
                </label>

                <input
                  type="text"
                  value={slide.author}
                  onChange={(e) =>
                    updateSlideField("author", e.target.value)
                  }
                  className="w-full bg-zinc-800 text-white p-3 rounded-xl outline-none"
                />

              </div>

            </div>
          )}

          {slide.type === "bullet" && (

            <div>

              <label className="block text-zinc-400 mb-4">
                Bullet Points
              </label>

              <div className="space-y-3">

                {slide.bullets.map(
                  (bullet: string, index: number) => (

                    <input
                      key={index}
                      type="text"
                      value={bullet}
                      onChange={(e) => {

                        const updatedSlides = [...slides];

                        updatedSlides[currentSlide].bullets[index] =
                          e.target.value;

                        setSlides(updatedSlides);
                      }}
                      className="w-full bg-zinc-800 text-white p-3 rounded-xl outline-none"
                    />

                  )
                )}

              </div>

            </div>
          )}

        </div>

        {/* Navigation */}
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

    </div>
  );
}