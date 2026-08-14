import { useEffect } from "react";
const AboutPage = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.products,.about, #support"
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
 

      <div className="about">
       <section >
        <h3 className="text-center m-5 p-2 text-4xl text-[#2563EB]">Our story</h3>
       <div className="lg:grid lg:grid-cols-2  lg:gap-5">
         <div className="text-center p-1 m-2 lg:w-200">
          <p className="m-2 p-2">Poorvika leads India as the Largest Tech and Appliance Omnichannel Retailer, using innovative strategies that provide wider access to latest Premium Technology. Our services span across 450+ Showrooms in India, covering Tamil Nadu, Karnataka and Pondicherry, including an ever-growing legacy of Poorvika Appliances Showrooms in Tamil Nadu. Poorvika sells a wide category of Gadgets and Appliances, both Online and Offline ranging from the Best Smartphones, ACs, Refrigerators, Washing Machines, Laptops, All-in-one PCs, Customized PCs, Gaming Gears, Smart Devices, Smart TVs, Peripherals to many remarkable Accessories and Household Needs. Through www.poorvika.com, Poorvika's popular E-Commerce portal, Customers across India place their orders in just a click and gets them delivered Safely with convenient options like Same Day Delivery and Regular Delivery, while they also opt for Pickup at the Store option based on their location. Till now, Poorvika has served over 40 Million+ Happy Customers over 20 years, as a Leading retailer for Top Brands like Apple, Asus, Acer, Samsung, Oppo, LG, Bosch, Philips, IFB, Lenovo, Vivo, Whirlpool, Xiaomi, OnePlus, Redmi, Godrej, Realme, Nokia, etc. Poorvika remains the best spot to shop for all our everyday Gadgets and other Electronic Needs!</p>
        </div>

        <div className="m-2 p-2 md:mx-10 ">
          <img src="/Blog4.webp" alt="" className="rounded-lg"/>
        </div>
       </div>
       </section>
      </div>


  </>
  )
}

export default AboutPage