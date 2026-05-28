"use client";

import { useState, useEffect } from "react";

import TitleSlide from "@/slides/TitleSlide";
import BulletSlide from "@/slides/BulletSlide";
import QuoteSlide from "@/slides/QuoteSlide";
import ImageSlide from "@/slides/ImageSlide";

import Sidebar from "@/components/Sidebar";
import SlideNavigation from "@/components/SlideNavigation";
import EditorPanel from "@/components/EditorPanel";

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

  useEffect(() => {
    const savedSlides = localStorage.getItem(
      "presentation-slides"
    );

    if (savedSlides) {
      setSlides(JSON.parse(savedSlides));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "presentation-slides",
      JSON.stringify(slides)
    );
  }, [slides]);

  const slide: any = slides[currentSlide];
  const [isGenerating, setIsGenerating] =
    useState(false);

  const [prompt, setPrompt] = useState("");

  if (!slide) return null;

  function updateSlideField(field: string, value: string) {

    const updatedSlides = [...slides];

    updatedSlides[currentSlide] = {
      ...updatedSlides[currentSlide],
      [field]: value,
    };

    setSlides(updatedSlides);
  }

  function addNewSlide() {

    const newSlide = {
      id: Date.now(),
      type: "title",
      title: "New Slide",
      subtitle: "Edit this slide",
    };

    const updatedSlides = [...slides, newSlide];
    setSlides(updatedSlides);
    setCurrentSlide(updatedSlides.length - 1);
  }

  function deleteSlide() {

    if (slides.length === 1) return;

    const updatedSlides = slides.filter(
      (_, index) => index !== currentSlide
    );

    setSlides(updatedSlides);

    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(0);
    }
  }

  function changeSlideType(type: string) {

    const updatedSlides = [...slides];

    switch (type) {

      case "title":
        updatedSlides[currentSlide] = {
          id: slide.id,
          type: "title",
          title: "New Title",
          subtitle: "New Subtitle",
        };
        break;

      case "bullet":
        updatedSlides[currentSlide] = {
          id: slide.id,
          type: "bullet",
          title: "Bullet Slide",
          bullets: [
            "Point 1",
            "Point 2",
            "Point 3",
          ],
        };
        break;

      case "quote":
        updatedSlides[currentSlide] = {
          id: slide.id,
          type: "quote",
          quote: "New Quote",
          author: "Author",
        };
        break;

      case "image":
        updatedSlides[currentSlide] = {
          id: slide.id,
          type: "image",
          title: "Image Slide",
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        };
        break;
    }

    setSlides(updatedSlides);
  }

async function generatePresentation() {

  if (!prompt.trim()) return;

  setIsGenerating(true);

  try {

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    const generatedSlides = [

      {
        id: Date.now(),
        type: "title",
        title: prompt,
        subtitle: "AI-generated presentation",
      },

      {
        id: Date.now() + 1,
        type: "bullet",
        title: "Key Concepts",
        bullets: [
          "Introduction",
          "Core Ideas",
          "Applications",
          "Future Impact",
        ],
      },

      {
        id: Date.now() + 2,
        type: "quote",
        quote:
          "Artificial intelligence is the new electricity.",
        author: "Andrew Ng",
      },

      {
        id: Date.now() + 3,
        type: "image",
        title: "Visual Overview",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      },

    ];

    setSlides(generatedSlides);

    setCurrentSlide(0);

  } finally {

    setIsGenerating(false);
  }
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
      <Sidebar
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        addNewSlide={addNewSlide}
        setSlides={setSlides}
      />

      {/* Main Content */}
      <div className="flex flex-col items-center gap-6">

        <div className="w-[900px] bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-white text-2xl font-bold mb-4">
            Generate Presentation
          </h2>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter presentation topic..."
              value={prompt}
              onChange={(e) =>
                setPrompt(e.target.value)
              }
              className="flex-1 bg-zinc-950 border border-zinc-800 focus:border-zinc-600 transition text-white p-4 rounded-xl outline-none"
            />

            <button
              disabled={isGenerating}
              onClick={generatePresentation}
              className={`px-6 rounded-xl font-semibold transition ${isGenerating
                  ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                  : "bg-white text-black hover:bg-zinc-200"
                }`}
            >
              {isGenerating ? "Generating..." : "Generate"}
            </button>

          </div>

        </div>

        {/* Presentation Preview */}
        <div className="w-[900px] h-[450px] bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out">
          {renderSlide()}
        </div>

        {/* Edit Panel */}
        <EditorPanel
          slide={slide}
          slides={slides}
          currentSlide={currentSlide}
          setSlides={setSlides}
          updateSlideField={updateSlideField}
          deleteSlide={deleteSlide}
          changeSlideType={changeSlideType}
        />

        {/* Navigation */}
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          setCurrentSlide={setCurrentSlide}
        />

      </div>

    </div>
  );
}