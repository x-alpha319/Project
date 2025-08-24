import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel() {
  const slides = [
    {
      id: 1,
      image: "OIP.webp",
      title: "First Slide",
      desc: "This is the description for the first slide.",
    },
    {
      id: 2,
      image: "OIP (1).webp",
      title: "Second Slide",
      desc: "This is the description for the second slide.",
    },
    {
      id: 3,
      image: "OIP (2).webp",
      title: "Third Slide",
      desc: "This is the description for the third slide.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-60 max-w-3xl ml-6 mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex-shrink-0 flex flex-col items-center justify-center bg-gray-100"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-500">{slide.title}</h2>
              <p className="text-gray-400">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <ChevronRight />
      </button>

      <div className="flex justify-center gap-2 mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
