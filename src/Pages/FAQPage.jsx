import { useEffect } from "react";
import { Link} from "react-router-dom";
const FAQPage = () => {
        useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.FAQ,.about, #support"
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
   <div className="container FAQ">
     <div className="m-10 md:m-15 lg:flex lg:p-3 lg:m-3 lg:gap-9">
      <div className="p-1 m-1 sm:block">
        <div>
          <h1 className="text-4xl">
            Have a question? Check out <br /> the FAQ
          </h1>
          <p className="">
            Find answers to common questions about RX Square’s features,
            pricing, and services.
          </p>
        </div>
      </div>
      <div className="p-1 m-1">
        <div className="shadow-lg rounded-lg">
          <h3 className="text-[#2563EB] p-2 m-2">What is RX Square and how does it help businesses?</h3>
          <p className="p-2 m-2">
            RX Square is an all-in-one business automation software designed for
            retailers, SMEs, and enterprises. It includes billing, CRM,
            accounting, HR management, marketing tools, and e-commerce
            integration in a single platform.
          </p>
        </div>

        <div className="shadow-lg rounded-lg p-4 m-3">
     <Link to="" > <div className=""> <p className=" hover:text-[#2563EB]">Can I integrate RX Square with my existing software?</p></div></Link>
        </div>
        
         <div className="shadow-lg rounded-lg p-4 m-3">
     <Link to="" > <div className=""> <p className=" hover:text-[#2563EB]">Is RX Square suitable for multi-branch businesses?</p></div></Link>
        </div>
         <div className="shadow-lg rounded-lg p-4 m-3">
     <Link to="" > <div className=""> <p className=" hover:text-[#2563EB]">Does RX Square offer customer support?</p></div></Link>
        </div>
         <div className="shadow-lg rounded-lg p-4 m-3">
     <Link to="" > <div className=""> <p className=" hover:text-[#2563EB]">Can I send invoices and reports via WhatsApp?</p></div></Link>
        </div>
         <div className="shadow-lg rounded-lg p-4 m-3">
     <Link to="" > <div className=""> <p className=" hover:text-[#2563EB]">How do I get started with RX Square?</p></div></Link>
        </div>

      </div>
    </div>
   </div>
  );
};

export default FAQPage;
