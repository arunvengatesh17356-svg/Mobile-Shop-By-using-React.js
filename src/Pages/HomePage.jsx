import HeroCarousel from "./HeroCarousel";
import { useState } from "react";
import ProductsPage from "./ProductsPage"
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const videos = [
  {
    id: 1,
    title: "Realme & Claudio Miranda",
    subtitle: "A cinematic taste. Master co-operated camera filters.",
    video: "/v-3.mp4",
    thumb: "/thumbs/thumb1.jpg",
  },
  {
    id: 2,
    title: "Nature",
    subtitle: "Beautiful landscape.",
    video: "/v-1.mp4",
    thumb: "/thumbs/thumb2.jpg",
  },
  {
    id: 3,
    title: "Travel",
    subtitle: "Adventure begins.",
    video: "/v-4.mp4",
    thumb: "/thumbs/thumb3.jpg",
  },
  {
    id: 4,
    title: "City",
    subtitle: "Urban photography.",
    video: "/v-5.mp4",
    thumb: "/thumbs/thumb4.jpg",
  },
  {
    id: 5,
    title: "Fashion",
    subtitle: "Creative portrait mode.",
    video: "/v-6.mp4",
    thumb: "/thumbs/thumb5.jpg",
  },
];
const HomePage = () => {
  const [current, setCurrent] = useState(0);
   const [count,setCount]=useState(0);
  const navigate = useNavigate();
useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section"
    );

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((el) => {
      el.classList.add("reveal");
      scrollObserver.observe(el);
    });

    return () => {
      revealElements.forEach((el) => {
        scrollObserver.unobserve(el);
      });
      scrollObserver.disconnect();
    };
  }, []);
  return (
    <>
      <HeroCarousel />
      <br />
      <br />
     <div className="hero-section">
       <div className="container">
        <h2 className="m-8 text-center text-3xl text-[#111827]">
          Featured Products
        </h2>
        <section className=" p-2 m-2 bg-[#F8FAFC]">
          <div className="text-center p-1 m-2 lg:flex lg:justify-center lg:items-center lg:gap-2  rounded-lg  lg:relative  ">
            <div className="p-1 m-2">
              <img
                src="/Hero-Featured-1.webp"
                className="lg:w-230 bg-red-400 rounded-lg"
                alt=""
              />
            </div>
            <div className="mt-2  text-center lg:absolute lg:left-80 lg:top-70 ">
              <h4 className="p-1 m-3 md:text-2xl text-[#6B7280]">phones</h4>
              <Link
                to="/products"
                className="inline-block border p-3 m-3 rounded-full text-base md:text-xl bg-[#3B82F6] text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-[#2563EB] "
              >
              purchase
              </Link>
            </div>
          </div>

          <div className="text-center  p-1 m-1 gap-2 md:grid md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-70 lg:h-110 hover:shadow-xl">
                    <div>   <img src="/AV-1.png" className="w-90 mx-auto " alt="" /></div>
                    <h3 className="text-3xl p1 m-2 text[#111827]"><b>OPPO F33 Pro <sup>5G</sup> </b></h3>
                    <p className="text-xl text-[#2563EB]">From ₹59,999 <span className="line-through text-[#9CA3AF]">₹84,999</span></p>
                    <button className="mt-4 bg-lime-500 hover:bg-lime-600 text-white rounded-lg py-2 text-sm sm:text-base transition p-5" onClick={() => navigate("/products")}>
                    View Details
                  </button>
              </div>
              <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-70 lg:h-110 hover:shadow-xl">
                    <div>   <img src="/Av-2.avif"  className="w-90 mx-auto " alt="" /></div>
                    <h3 className="text-3xl p1 m-2"><b>Y31 <sup>5G</sup></b></h3>
                    <p className="text-xl text-[#2563EB]">From ₹59,999 <span className="line-through  text-[#9CA3AF]">₹84,999</span></p>
                    <button className="mt-4 bg-lime-500 hover:bg-lime-600 text-white rounded-lg py-2 text-sm sm:text-base transition p-5 " onClick={() => navigate("/products")}> 
                    View Details
                  </button>
              </div>
              <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-70 lg:h-110 hover:shadow-xl">
                    <div>   <img src="/AV-3.png"   className="w-90 mx-auto "alt="" /></div>
                    <h3 className="text-3xl p1 m-2"><b>Xiaomi 17T</b></h3>
                    <p className="text-xl text-[#2563EB]">From ₹59,999 <span className="line-through  text-[#9CA3AF]">₹84,999</span></p>
                    <button className="mt-4 bg-lime-500 hover:bg-lime-600 text-white rounded-lg py-2 text-sm sm:text-base transition p-5" onClick={() => navigate("/products")}>
                    View Details
                  </button>
              </div>
              <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-70 lg:h-110 hover:shadow-xl">
                    <div>   <img src="/AV-4.png"  className="w-90 mx-auto " alt="" /></div>
                    <h3 className="text-3xl p1 m-2"> <b>Galaxy A57 5G</b>
                    </h3>
                   <p className="text-xl text-[#2563EB]">From ₹59,999 <span className="line-through  text-[#9CA3AF]">₹84,999</span></p>
                   <button className="mt-4 bg-lime-500 hover:bg-lime-600 text-white rounded-lg py-2 text-sm sm:text-base transition p-5" onClick={() => navigate("/products")}>
                    View Details
                  </button>
              </div>
          </div>
        </section>

        <h1 className="m-8 text-center text-3xl text-[#111827]">Top Brands </h1>
        <div className="mx-25 sm:grid sm:grid-cols-2 lg:flex">
          <div>
            <img
              src="/brand1.avif"
              alt=""
              className="w-45 h-30 rounded-full p-2 m-2 rounded-3xl"
            />
          </div>
          <div>
            <img
              src="/brand2.avif"
              alt=""
              className="w-45 h-30 rounded-full p-2 m-2 rounded-3xl"
            />
          </div>
          <div>
            <img
              src="/brand3.avif"
              alt=""
              className="w-45 h-30 rounded-full p-2 m-2 rounded-3xl"
            />
          </div>
          <div>
            <img
              src="/brand4.avif"
              alt=""
              className="w-45 h-30 rounded-full p-2 m-2 rounded-3xl"
            />
          </div>
          <div>
            <img
              src="/brand5.avif"
              alt=""
              className="w-45 h-30 rounded-full p-2 m-2 rounded-3xl"
            />
          </div>
          <div>
            <img
              src="/brand6.avif"
              alt=""
              className="w-45 h-30 rounded-full p-2 m-2 rounded-3xl"
            />
          </div>
          <div>
            <img
              src="/brand7.avif"
              alt=""
              className="w-45 h-30 rounded-full p-2 m-2 rounded-3xl"
            />
          </div>
        </div>

        <div className="bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex h-[650px] overflow-hidden rounded-3xl shadow-2xl bg-black">
              {/* Main Video */}
              <div className="relative flex-1">
                <video
                  key={current}
                  src={videos[current].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute bottom-16 left-14 text-white max-w-xl">
                  <h1 className="text-5xl font-bold mb-5">
                    {videos[current].title}
                  </h1>

                  <p className="text-lg text-gray-200 mb-8">
                    {videos[current].subtitle}
                  </p>

                  {/* <button className="bg-[#D9FF00] hover:hover:bg-[#C5F000] text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition" onClick={()=>{<ProductsPage/>}}>
                
                  </button> */}
                     <Link
                to="/products"
                 className="bg-[#D9FF00] hover:hover:bg-[#C5F000] text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition" onClick={()=>{<ProductsPage/>}}
              >
                  Learn More
              </Link>
                </div>
              </div>

           
              <div className="flex h-full w-[220px]">
                {videos.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setCurrent(index)}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      current === index ? "flex-[3]" : "flex-1"
                    }`}
                  >
                    <img
                      src={item.thumb}
                      alt=""
                      className={`w-full h-full object-cover ${
                        current === index ? "brightness-100" : "brightness-50"
                      }`}
                    />

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white font-bold text-xl">
                      {String(item.id).padStart(2, "0")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    
     </div>
    </>
  );
};

export default HomePage;

