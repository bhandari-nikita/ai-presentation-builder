interface BulletSlideProps {
  title: string;
  bullets: string[];
}

export default function BulletSlide({
  title,
  bullets,
}: BulletSlideProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center px-20">

      <h1 className="text-5xl font-bold text-white mb-10">
        {title}
      </h1>

      <ul className="space-y-6">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="text-2xl text-zinc-300"
          >
            • {bullet}
          </li>
        ))}
      </ul>

    </div>
  );
}