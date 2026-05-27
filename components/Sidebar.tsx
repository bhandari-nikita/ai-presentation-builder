interface SidebarProps {
    slides: any[];
    currentSlide: number;
    setCurrentSlide: (index: number) => void;
    addNewSlide: () => void;
}

export default function Sidebar({
    slides,
    currentSlide,
    setCurrentSlide,
    addNewSlide,
}: SidebarProps) {

    return (
        <div className="w-64 h-[700px] bg-zinc-900 rounded-2xl p-4 overflow-y-auto">

            <h2 className="text-white font-bold mb-4">
                Slides
            </h2>

            <div className="space-y-3">

                {slides.map((s: any, index: number) => (
                    <button
                        key={s.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-full text-left p-3 rounded-xl transition ${currentSlide === index
                                ? "bg-white text-black"
                                : "bg-zinc-800 text-white hover:bg-zinc-700"
                            }`}
                    >
                        {s.type.charAt(0).toUpperCase() +
                            s.type.slice(1)}{" "}
                        Slide
                    </button>
                ))}

            </div>

            <button
                onClick={addNewSlide}
                className="w-full mt-6 bg-white text-black p-3 rounded-xl font-semibold hover:bg-zinc-200 transition"
            >
                + Add Slide
            </button>

        </div>
    );
}