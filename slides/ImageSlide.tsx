interface ImageSlideProps {
  title: string;
  image: string;
}

export default function ImageSlide({
  title,
  image,
}: ImageSlideProps) {
  return (
    <div className="w-full h-full flex flex-col">

      <div className="p-8">
        <h1 className="text-4xl font-bold text-white">
          {title}
        </h1>
      </div>

      <div className="flex-1 px-8 pb-8">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

    </div>
  );
}