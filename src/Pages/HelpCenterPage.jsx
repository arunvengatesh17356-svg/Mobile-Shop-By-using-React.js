import { useEffect } from "react";
const HelpCenterPage = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.Help,.about, #support"
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
      <div className="container Help">
        <div className="text-center p-3 m-3">
        <h1 className="text-3xl p-2 m-2 text-[#2563EB]">Help Center</h1>
        <p className="text-lg p-2 m-2">
          Find answers to common questions or contact us for further assistance.
        </p>
        <input
          type="text"
          placeholder="search for help...."
          className="rounded-lg p-3 m-3 border-1 border-solid border-[#2563EB]"
        />
        <button className="bg-[#D9FF00] hover:hover:bg-[#C5F000] text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          search
        </button>
      </div>
      </div>
    </>
  );
};

export default HelpCenterPage;
