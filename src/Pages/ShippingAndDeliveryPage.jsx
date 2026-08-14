import { useEffect } from "react";
const ShippingAndDeliveryPage = () => {
      useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.shipping,.about, #support"
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
      <div className="container shipping">
        <div className="text-center m-2 p-2 md:m-4 md:p-4 lg:m-6 lg:p-6">
        <h1 className="text-center  text-3xl font-semibold text-[#2563EB] ">
          Shipping and Delivery
        </h1>
        <p className="p-2 m-2">Last updated on Feb 20, 2025</p> 

        <div className="">
          <h1 className=" text-xl font-semibold p-1 m-1 text-[#2563EB]">Shipping Policy</h1>
          <hr />  
          <p className="p-2 m-2">Shipping is not applicable as we sell only digital products. All orders are processed and delivered electronically. There are no physical shipments involved. Please note that delivery times may vary based on product availability and the digital medium used for delivery.</p>
        </div>
        <div className="">
          <h1 className=" text-xl font-semibold p-1 m-1 text-[#2563EB]">Delivery Policy</h1>
          <hr />  
          <p className="p-2 m-2">Since we sell only digital products, there are no physical delivery services. All products are delivered electronically through the specified digital medium (e.g., email, download link, etc.). No pick-up arrangements are required.</p>
        </div>
        <div className="">
          <h1 className=" text-xl font-semibold p-1 m-1 text-[#2563EB]">Shipping Restrictions</h1>
          <hr />  
          <p className="p-2 m-2">As we are selling only digital products, shipping restrictions do not apply. There are no geographical or business address limitations for our products. Please ensure that the email or account information provided is valid for digital delivery.</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default ShippingAndDeliveryPage;
