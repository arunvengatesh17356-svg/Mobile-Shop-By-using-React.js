const data = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/41QOX6YsT5L._SY300_SX300_QL70_FMwebp_.jpg",
    brand: "Samsung Galaxy M17 5G",
    price: "₹18,999",
    ram: "8 GB",
    storage: "128 GB",
    processor: "Exynos 1380",
    display: "6.7-inch FHD+ Super AMOLED, 120Hz",
    battery: "6000 mAh",
    camera: "50 MP + 8 MP + 2 MP",
    frontCamera: "13 MP",
    os: "Android 15 (One UI)",
    color: "Blue",
  },

  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/I/61yZ+3pjkYL._SX679_.jpg",
    brand: "realme C71 4G",
    price: "₹15,980",
    ram: "6 GB",
    storage: "128 GB",
    processor: "Unisoc T7250",
    display: "6.72-inch HD+ LCD, 120Hz",
    battery: "6300 mAh",
    camera: "50 MP AI Camera",
    frontCamera: "8 MP",
    os: "Android 15 (realme UI)",
    color: "Green",
  },

  {
    id: 3,
    image:
      "https://m.media-amazon.com/images/I/61NsPikkMBL._SX679_.jpg",
    brand: "Motorola Edge 60 Fusion",
    price: "₹23,999",
    ram: "8 GB",
    storage: "256 GB",
    processor: "MediaTek Dimensity 7400",
    display: "6.67-inch pOLED, 144Hz",
    battery: "5500 mAh",
    camera: "50 MP + 13 MP",
    frontCamera: "32 MP",
    os: "Android 15",
    color: "Forest Blue",
  },

  {
    id: 4,
    image:
      "https://m.media-amazon.com/images/I/61wEl1TXntL._SX522_.jpg",
    brand: "OPPO K14x 5G",
    price: "₹15,980",
    ram: "8 GB",
    storage: "128 GB",
    processor: "MediaTek Dimensity 6300",
    display: "6.67-inch HD+ LCD, 120Hz",
    battery: "6000 mAh",
    camera: "50 MP + 2 MP",
    frontCamera: "8 MP",
    os: "Android 15 (ColorOS)",
    color: "Midnight Violet",
  },

  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/I/411RhleBYqL.jpg",
    brand: "Acerpure Acerone Liquid 4G",
    price: "₹13,599",
    ram: "6 GB",
    storage: "128 GB",
    processor: "MediaTek Helio G99",
    display: "6.78-inch FHD+ IPS LCD",
    battery: "5000 mAh",
    camera: "64 MP + 2 MP",
    frontCamera: "16 MP",
    os: "Android 14",
    color: "Black",
  },
    {
    id: 6,
    image:
      "https://m.media-amazon.com/images/I/51UOnCphehL._SX679_.jpg",
    brand: "IKALL Z10",
    price: "₹15,980",
    ram: "6 GB",
    storage: "128 GB",
    processor: "MediaTek Helio G85",
    display: "6.6-inch HD+ IPS LCD",
    battery: "5000 mAh",
    camera: "50 MP + AI Lens",
    frontCamera: "8 MP",
    os: "Android 14",
    color: "Black",
  },

  {
    id: 7,
    image:
      "https://m.media-amazon.com/images/I/71hbZwIVwQL._SY741_.jpg",
    brand: "MOTOROLA Edge 60 Pro 5G",
    price: "₹18,999",
    ram: "12 GB",
    storage: "256 GB",
    processor: "MediaTek Dimensity 8350",
    display: "6.7-inch pOLED, 144Hz",
    battery: "6000 mAh",
    camera: "50 MP + 50 MP + 10 MP",
    frontCamera: "50 MP",
    os: "Android 15",
    color: "Pantone Shadow",
  },

  {
    id: 8,
    image:
      "https://m.media-amazon.com/images/I/71UdkYWXjCL._SX679_.jpg",
    brand: "Lava Agni 3 5G",
    price: "₹7,799",
    ram: "8 GB",
    storage: "256 GB",
    processor: "MediaTek Dimensity 7300X",
    display: "6.78-inch AMOLED, 120Hz",
    battery: "5000 mAh",
    camera: "50 MP + 8 MP + 8 MP",
    frontCamera: "16 MP",
    os: "Android 14",
    color: "Heather Glass",
  },

  {
    id: 9,
    image:
      "https://m.media-amazon.com/images/I/81GhaMvvHTL._SX679_.jpg",
    brand: "Redmi 13 5G",
    price: "₹23,999",
    ram: "8 GB",
    storage: "128 GB",
    processor: "Snapdragon 4 Gen 2 AE",
    display: "6.79-inch FHD+ LCD, 120Hz",
    battery: "5030 mAh",
    camera: "108 MP + 2 MP",
    frontCamera: "13 MP",
    os: "Android 14 (HyperOS)",
    color: "Black",
  },

  {
    id: 10,
    image:
      "https://m.media-amazon.com/images/I/613RKG4NCgL._SX679_.jpg",
    brand: "vivo T5x 5G",
    price: "₹19,980",
    ram: "8 GB",
    storage: "128 GB",
    processor: "MediaTek Dimensity 7300",
    display: "6.72-inch FHD+ LCD, 120Hz",
    battery: "6500 mAh",
    camera: "50 MP + 2 MP",
    frontCamera: "8 MP",
    os: "Android 15 (Funtouch OS)",
    color: "Pronto Purple",
  },
  
  
];

export default data;





import { useEffect } from "react";
import data from "./data"
const Products = () => {

  // const api = [
  //   {
  //     id: 1,
  //     image:
  //       "https://m.media-amazon.com/images/I/41QOX6YsT5L._SY300_SX300_QL70_FMwebp_.jpg",
  //     brand: "Samsung Galaxy M17 5G",
  //     price: "₹18,999",
  //   },
  //   {
  //     id: 2,
  //     image: "https://m.media-amazon.com/images/I/61yZ+3pjkYL._SX679_.jpg",
  //     brand: "realme C71 4G",
  //     price: "₹15,980",
  //   },
  //   {
  //     id: 3,
  //     image: "https://m.media-amazon.com/images/I/61NsPikkMBL._SX679_.jpg",
  //     brand: "Motorola Edge 60 Fusion",
  //     price: "₹23,999",
  //   },
  //   {
  //     id: 4,
  //     image: "https://m.media-amazon.com/images/I/61wEl1TXntL._SX522_.jpg",
  //     brand: "OPPO K14x 5G",
  //     price: "₹15,980",
  //   },
  //   {
  //     id: 5,
  //     image: "https://m.media-amazon.com/images/I/411RhleBYqL.jpg",
  //     brand: "Acerpure Acerone Liquid 4G",
  //     price: "₹13,599",
  //   },
  //   {
  //     id: 6,
  //     image: "https://m.media-amazon.com/images/I/51UOnCphehL._SX679_.jpg",
  //     brand: "IKALL Z10",
  //     price: "₹15,980",
  //   },
  //   {
  //     id: 7,
  //     image: [`https://m.media-amazon.com/images/I/71hbZwIVwQL._SY741_.jpg`],
  //     brand: "MOTOROLA Edge 60 Pro 5G",
  //     price: "₹18,999",
  //   },
  //   {
  //     id: 8,
  //     image: [`https://m.media-amazon.com/images/I/71UdkYWXjCL._SX679_.jpg`],
  //     brand: "Lava Agni 3 5G",
  //     price: "₹7,799 ",
  //   },
  //   {
  //     id: 9,
  //     image: [`https://m.media-amazon.com/images/I/81GhaMvvHTL._SX679_.jpg`],
  //     brand: "Redmi 13 5G ",
  //     price: "₹23,999",
  //   },
  //   {
  //     id: 10,
  //     image: [`https://m.media-amazon.com/images/I/613RKG4NCgL._SX679_.jpg`],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 11,
  //     image: [
  //       `https://m.media-amazon.com/images/I/41kMt2xKT1L._SY300_SX300_QL70_FMwebp_.jpg`,
  //     ],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 12,
  //     image: [`https://m.media-amazon.com/images/I/71UzHCLBm1L._SX679_.jpg`],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 13,
  //     image: [`https://m.media-amazon.com/images/I/71COyYSvUOL._SX679_.jpg`],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 14,
  //     image: [
  //       `https://m.media-amazon.com/images/I/41kMt2xKT1L._SY300_SX300_QL70_FMwebp_.jpg`,
  //     ],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 15,
  //     image: [
  //       `https://m.media-amazon.com/images/I/41GljVEEkxL._SY300_SX300_QL70_FMwebp_.jpg`,
  //     ],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 16,
  //     image: [
  //       `https://image01.realme.net/general/20260506/1778059123711b341176bd22443cb8f3bd683aed1685c.png.webp?width=1080&height=1080&size=1068607`,
  //     ],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 17,
  //     image: [
  //       `https://image01.realme.net/general/20260507/1778148667036368eb467efee402ba73103155160d874.png.webp?width=1080&height=1080&size=321173`,
  //     ],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 18,
  //     image: [
  //       `https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1757906903066/f16e9a7322d437577c49747e8bd63b98.png`,
  //     ],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 19,
  //     image: [
  //       `https://m.media-amazon.com/images/I/41bD8uY5o8L._SY300_SX300_QL70_FMwebp_.jpg`,
  //     ],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  //   {
  //     id: 20,
  //     image: [
  //       `https://m.media-amazon.com/images/I/41ak5hK59LL._SY300_SX300_QL70_FMwebp_.jpg`,
  //     ],
  //     brand: "vivo T5x 5G",
  //     price: "₹19,980",
  //   },
  // ];


  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.products, #trust-us, #support"
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
      <div className="text-center p-3 mt-10  products">
        <h1 className="text-3xl p-1 m-1 text-[#3B82F6]">Latest Smartphones</h1>
        <p>Discover the latest smartphones at the best prices.</p>
        <main className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 ">
            {data.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl border shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="flex items-center justify-center h-40 sm:h-48 md:h-52 lg:h-56 p-4 bg-gray-50">
                  <img
                    src={p.image}
                    alt={p.brand}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center line-clamp-2 min-h-[50px]">
                    {p.brand}
                  </h3>

                  <p className="mt-2 text-center text-lg sm:text-xl font-bold text-[#4294f7]">
                    {p.price}
                  </p>

                  <button className="mt-4 bg-lime-500 hover:bg-lime-600 text-white rounded-lg py-2 text-sm sm:text-base transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <section>
          <h3 className="text-3xl p-2 m-4">Exclusive Offers</h3>

          <div className="md:grid md:grid-cols-2 md:gap2 lg:grid-cols-3 lg:justify-center lg:items-center lg:mx-30">
            <div className="rounded-lg bg-[#FFFFFF] p-3 m-5 lg:w-100 lg:h-110  hover:shadow-xl">
              <img src="/p-5.webp" alt="" />
              <h2 className="text-2xl p-2 m-3">
                Free Spotify Premium Standard
              </h2>
              <p className="p-2 m-2">Enjoy up to 4 Months of Ad-free Music</p>
            </div>
            <div className="rounded-lg bg-[#FFFFFF] p-3 m-5 lg:w-100 lg:h-110 hover:shadow-xl">
              <img src="/p-2.webp" alt="" />
              <h2 className="text-2xl p-2 m-3">Exclusive Student Offers</h2>
            </div>
            <div className="rounded-lg bg-[#FFFFFF] p-3 m-5 lg:w-100 lg:h-110 hover:shadow-xl">
              <img src="/p-1.webp" alt="" />
              <h2 className="text-2xl p-2 m-3">New User Zone</h2>
              <p className="p-2 m-2">Get the Xiaomi Store App</p>
            </div>
          </div>
        </section>

        <h1 className="text-2xl  p-5 m-5">Why Shop on RX Square Mobiles.com</h1>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-5 lg:mx-20">
          <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-50 lg:h-40  hover:shadow-xl">
            <i class="fa-solid fa-shield-halved text-blue-600 text-4xl p-2 m-3"></i>

            <p className="p-1 m-4">official wesite</p>
          </div>
          <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-50 lg:h-40  hover:shadow-xl">
            <i class="fa-solid fa-truck text-blue-600 text-4xl p-2 m-3"></i>
            <p className="p-1 m-4">Delivery in 2-5 days</p>
          </div>
          <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-50 lg:h-40  hover:shadow-xl">
            <i class="fa-solid fa-screwdriver-wrench text-blue-600 text-4xl p-2 m-3"></i>
            <p className="p-1 m-4">Xiamomi official Warranty Service</p>
          </div>
          <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-50 lg:h-40  hover:shadow-xl">
            <i class="fa-solid fa-globe text-blue-600 text-4xl p-2 m-3"></i>

            <p className="p-1 m-4">Full service</p>
          </div>
          <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-50 lg:h-40  hover:shadow-xl">
            <i
              class="fa fa-exchange text-blue-600 text-4xl p-2 m-3"
              aria-hidden="true"
            ></i>
            <p className="p-1 m-4">RX Exchange</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
