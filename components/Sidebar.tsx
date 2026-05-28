import {
    DndContext,
    closestCenter,
} from "@dnd-kit/core";

import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

interface SidebarProps {
    slides: any[];
    currentSlide: number;
    setCurrentSlide: (index: number) => void;
    addNewSlide: () => void;
    setSlides: React.Dispatch<any>;
}

function SortableSlideItem({
    slide,
    index,
    currentSlide,
    setCurrentSlide,
}: any) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: slide.id,
    });

    const style = {
        transform: CSS.Transform.toString(
            transform
        ),
        transition,
    };

    return (
        <button
  ref={setNodeRef}
  style={style}
  {...attributes}
  {...listeners}
  onClick={() => setCurrentSlide(index)}
  className={`w-full rounded-2xl overflow-hidden border transition ${
    currentSlide === index
      ? "border-white"
      : "border-zinc-800 hover:border-zinc-600"
  }`}
>

  <div className="aspect-video bg-zinc-800 flex items-center justify-center p-3">

    <p className="text-sm font-semibold text-center text-white line-clamp-2">
      {slide.title ||
        slide.quote ||
        "Untitled Slide"}
    </p>

  </div>

  <div className="bg-zinc-900 px-3 py-2 text-xs text-zinc-400 text-left">
    {slide.type.charAt(0).toUpperCase() +
      slide.type.slice(1)}{" "}
    Slide
  </div>

</button>
    );
}


export default function Sidebar({
    slides,
    currentSlide,
    setCurrentSlide,
    addNewSlide,
    setSlides,
}: SidebarProps) {
    
    function handleDragEnd(event: any) {
    
        const { active, over } = event;
    
        if (!over || active.id === over.id) return;
    
        const oldIndex = slides.findIndex(
            (slide) => slide.id === active.id
        );
    
        const newIndex = slides.findIndex(
            (slide) => slide.id === over.id
        );
    
        const updatedSlides = arrayMove(
            slides,
            oldIndex,
            newIndex
        );
    
        setSlides(updatedSlides);
        setCurrentSlide(newIndex);
    }

    return (
        <div className="w-72 h-[700px] bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-4 overflow-y-auto border border-zinc-800">

            <h2 className="text-white font-bold mb-4">
                Slides
            </h2>

            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >

                <SortableContext
                    items={slides.map((slide) => slide.id)}
                    strategy={verticalListSortingStrategy}
                >

                    <div className="space-y-3">

                        {slides.map((s: any, index: number) => (

                            <SortableSlideItem
                                key={s.id}
                                slide={s}
                                index={index}
                                currentSlide={currentSlide}
                                setCurrentSlide={setCurrentSlide}
                            />

                        ))}

                    </div>

                </SortableContext>

            </DndContext>

            <button
                onClick={addNewSlide}
                className="w-full mt-6 bg-white text-black p-3 rounded-xl font-semibold hover:bg-zinc-200 transition"
            >
                + Add Slide
            </button>

        </div>
    );
}