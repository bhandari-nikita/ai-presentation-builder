interface TitleSlideProps {
  title: string;
  subtitle: string;
}

export default function TitleSlide({
  title,
  subtitle,
}: TitleSlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-10">

      <h1 className="text-6xl font-bold text-white mb-6">
        {title}
      </h1>

      <p className="text-2xl text-zinc-400">
        {subtitle}
      </p>

    </div>
  );
}