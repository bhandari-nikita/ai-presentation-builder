interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  setCurrentSlide: React.Dispatch<
    React.SetStateAction<number>
  >;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  setCurrentSlide,
}: SlideNavigationProps) {

  return (
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
        Slide {currentSlide + 1} / {totalSlides}
      </p>

      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev < totalSlides - 1
              ? prev + 1
              : prev
          )
        }
        className="bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition"
      >
        Next
      </button>

    </div>
  );
}