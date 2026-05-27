interface EditorPanelProps {
    slide: any;
    slides: any[];
    currentSlide: number;
    setSlides: React.Dispatch<any>;
    updateSlideField: (
        field: string,
        value: string
    ) => void;
    deleteSlide: () => void;
}

export default function EditorPanel({
    slide,
    slides,
    currentSlide,
    setSlides,
    updateSlideField,
    deleteSlide,
}: EditorPanelProps) {

    return (
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
                                updateSlideField(
                                    "title",
                                    e.target.value
                                )
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
                            updateSlideField(
                                "subtitle",
                                e.target.value
                            )
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
                                updateSlideField(
                                    "quote",
                                    e.target.value
                                )
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
                                updateSlideField(
                                    "author",
                                    e.target.value
                                )
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
                            (
                                bullet: string,
                                index: number
                            ) => (

                                <input
                                    key={index}
                                    type="text"
                                    value={bullet}
                                    onChange={(e) => {

                                        const updatedSlides = [
                                            ...slides,
                                        ];

                                        (
                                            updatedSlides[
                                            currentSlide
                                            ] as any
                                        ).bullets[index] =
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

            <button
                onClick={deleteSlide}
                className="mt-8 bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition"
            >
                Delete Current Slide
            </button>

        </div>
    );
}