import { useEffect, useState } from "react";

const images = [
  "/slide1.webp",
  "/slide6.webp",
  "/slide3.webp",
  "/slide4.webp",
  "/slide7.webp",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full overflow-hidden">

   
      <div className="relative  h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[88vh]">

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 text-white text-3xl hover:bg-black/60 transition"
        >
          ❮
        </button>

    
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 text-white text-3xl hover:bg-black/60 transition"
        >
          ❯
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-[4px] rounded-full transition-all duration-300 ${
                current === index
                  ? "w-16 bg-[#4294f7]"
                  : "w-12 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}