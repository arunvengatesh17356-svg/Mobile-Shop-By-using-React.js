import { useEffect } from "react";
const BlogPage = () => {
    useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.blog,.about, #support"
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
      <div className="container blog">
        <div>
        <h1 className="text-2xl text-center p-3 m-3 font-medium text-[#2563EB] ">
          Blogs
        </h1>
        <p className="text-center p-3 m-3 ">
          Read the latest mobile phone reviews, tech tips, buying guides, and
          smartphone news on <br />
          The Chennai Mobiles blog. Stay updated with the latest in mobile
          technology across Tamil Nadu and Kerala.
        </p>
      </div>

      <div className="">
        <div className="p-4 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 ">
          <div className="p-4 mb-3 shadow-lg text-center lg:w-80 lg:mr-0 lg:ml-10 ">
            <img className="w-full" src="/Blog1.webp" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Top 5 Budget Smartphones to Buy in 2026
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="p-1 m-1 inline-block">
                <i class="fa-solid fa-calendar"></i>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                20 Apr, 2026
              </span>
            </div>
          </div>
          <div className="p-4 mb-3 shadow-lg text-center lg:w-80 lg:w-80 lg:mr-0 lg:ml-10 ">
            <img className="w-full" src="/Blog2.webp" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                OPPO F33 Pro 5G vs OPPO F33 5G – Full Comparison & Best Buy
                Guide 2026
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="p-1 m-1 inline-block">
                <i class="fa-solid fa-calendar"></i>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                21 Apr, 2026
              </span>
            </div>
          </div>
          <div className="p-4 mb-3 shadow-lg text-center lg:w-80 lg:w-80 lg:mr-0 lg:ml-10 ">
            <img
              className="w-full lg:w-80"
              src="/Blog3.webp"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Top Mobile Deals at The Chennai Mobiles – Best Smartphone Offers
                & Discounts in Tamil Nadu
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="p-1 m-1 inline-block">
                <i class="fa-solid fa-calendar"></i>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 m-1">
                22 Apr, 2026
              </span>
            </div>
          </div>
          <div className="p-4 mb-3 shadow-lg text-center lg:w-80 lg:w-80 lg:mr-0 lg:ml-10 ">
            <img
              className="w-full"
              src="/Blog4.webp"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Why Buy Mobiles from The Chennai Mobiles – Best Mobile Store in
                Tamil Nadu
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="p-1 m-1 inline-block">
                <i class="fa-solid fa-calendar"></i>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                22 Apr, 2026
              </span>
            </div>
          </div>
          <div className="p-4 mb-3 shadow-lg text-center lg:w-80 lg:w-80 lg:mr-0 lg:ml-10 ">
            <img
              className="w-70 flex justify-center"
              src="/Blog9.webp"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Trusted Electronics Store in Tamil Nadu – The Chennai Mobiles
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="p-1 m-1 inline-block">
                <i class="fa-solid fa-calendar"></i>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                05 May, 2026
              </span>
            </div>
          </div>
          <div className="p-4 mb-3 shadow-lg text-center lg:w-80 lg:w-80 lg:mr-0 lg:ml-10 ">
            <img
              className="w-75 flex justify-center"
              src="/Blog6.webp"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Best Budget Phones Under ₹20,000 in India
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="p-1 m-1 inline-block">
                <i class="fa-solid fa-calendar"></i>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                20 Apr, 2026
              </span>
            </div>
          </div>
          <div className="p-4 mb-3 shadow-lg text-center lg:w-80 lg:w-80 lg:mr-0 lg:ml-10 ">
            <img
              className="w-full"
              src="/Blog7.webp"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Latest Mobile Accessories You Need in 2026
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="p-1 m-1 inline-block">
                <i class="fa-solid fa-calendar"></i>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                20 Apr, 2026
              </span>
            </div>
          </div>
          <div className="p-4 mb-3 shadow-lg text-center lg:w-80 lg:w-80 lg:mr-0 lg:ml-10   ">
            <img
              className="w-full"
              src="/Blog8.webp"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Why Oppo F33 Pro 5G is a Great Choice in 2026
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="p-1 m-1 inline-block">
                <i class="fa-solid fa-calendar"></i>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                20 Apr, 2026
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BlogPage;
