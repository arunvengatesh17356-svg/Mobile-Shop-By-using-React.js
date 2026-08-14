import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "./products";

const Products = () => {
  const api = products;

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.products, #trust-us, #support",
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
      },
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

  const [brandFilter, setBrandFilter] = useState("All");
  const [search, setSearch] = useState("");

  const brands = ["All", ...new Set(api.map((item) => item.company))];

  const filteredProducts = api.filter((item) => {
    const brandMatch = brandFilter === "All" || item.company === brandFilter;

    const searchMatch = item.brand.toLowerCase().includes(search.toLowerCase());

    return brandMatch && searchMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10  products">
      <h1 className="text-4xl font-bold text-center text-[#2563EB]">
        Latest Smartphones
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Discover the latest smartphones at the best prices.
      </p>
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search Mobile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-8">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setBrandFilter(brand)}
            className={`px-5 py-2 rounded-full transition font-medium ${
              brandFilter === brand
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-blue-100"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10">
        {filteredProducts.map((p) => (
          <Link key={p.id} to={`/products/${p.slug}`}>
          <div
            className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="h-56 flex justify-center items-center bg-gray-50 p-4">
              <img
                src={p.image}
                alt={p.brand}
                className="h-full object-contain"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-center h-12">{p.brand}</h3>

              <p className="text-center text-blue-600 text-xl font-bold mt-2">
                ₹{Number(p.price).toLocaleString("en-IN")}
              </p>

                <button className="w-full mt-4 bg-lime-500 hover:bg-lime-600 text-white py-2 rounded-lg">
                  View Details
                </button>
            </div>
          </div>
           </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <h2 className="text-center text-red-500 text-xl mt-10">
          No products found.
        </h2>
      )}

      <section className="text-center ">
        <h3 className="text-3xl p-2 m-4">Exclusive Offers</h3>

        <div className="md:grid md:grid-cols-2 md:gap2 lg:grid-cols-3 lg:justify-center lg:items-center lg:mx-30 ">
          <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-81 lg:h-110  hover:shadow-xl ">
            <img src="/p-3.webp" alt="" />
            <h2 className="text-2xl p-2 m-3">Free Spotify Premium Standard</h2>
            <p className="p-2 m-2">Enjoy up to 4 Months of Ad-free Music</p>
          </div>
          <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-81 lg:h-110 hover:shadow-xl">
            <img src="/p-2.webp" alt="" />
            <h2 className="text-2xl p-2 m-3">Exclusive Student Offers</h2>
          </div>
          <div className="rounded-lg bg-[#FFFFFF] p-3 m-3 lg:w-81 lg:h-110 hover:shadow-xl">
            <img src="/p-1.webp" alt="" />
            <h2 className="text-2xl p-2 m-3">New User Zone</h2>
            <p className="p-2 m-2">Get the Xiaomi Store App</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
