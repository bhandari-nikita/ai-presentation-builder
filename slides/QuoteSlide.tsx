interface QuoteSlideProps {
  quote: string;
  author: string;
}

export default function QuoteSlide({
  quote,
  author,
}: QuoteSlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-20">

      <h1 className="text-4xl text-white font-semibold italic leading-relaxed mb-8">
        "{quote}"
      </h1>

      <p className="text-2xl text-zinc-400">
        — {author}
      </p>

    </div>
  );
}