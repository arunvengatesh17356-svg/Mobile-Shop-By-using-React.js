import { useEffect } from "react";
const CancellationAndRefundPage = () => {
      useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.cancellation,.about, #support"
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
     <div className="container cancellation">
       <div className=" text-center md:p-4 md:m-4 md:rounded-lg bg-gray-100 xl:mx-60">
        <h1 className="text-center font-semibold p-2 m-2 text-2xl text-[#2563EB]">
          Cancel & Refund Policy
        </h1>
        <p className="text-center p-2 m-2">Last updated on Feb 20, 2025</p>

        <div className="shadow-xl p-3 m-3 rounded-lg bg-white">
          <h2 className="p-2 m-2 text-[#2563EB] text-lg">
            1. Cancellation Policy
          </h2>
          <p className="p-2 m-2">
            Cancellations will be considered only if the request is made within
            7 days of placing the order. However, cancellation requests may not
            be entertained if the orders have already been processed or shipped
            by our vendors.
          </p>
        </div>
        <div className="shadow-xl p-3 m-3 rounded-lg bg-white">
          <h2 className="p-2 m-2 text-[#2563EB] text-lg">
            2. Non-Cancellable Items
          </h2>
          <p className="p-2 m-2">
            Cancellation requests will not be accepted for perishable items like
            flowers or eatables. Refunds/replacements are available only if the
            delivered product is proven to be of poor quality.
          </p>
        </div>
        <div className="shadow-xl p-3 m-3 rounded-lg bg-white">
          <h2 className="p-2 m-2 text-[#2563EB] text-lg">
            3. Damaged or Defective Products
          </h2>
          <p className="p-2 m-2">
            Please report any damaged or defective items to our Customer Service
            within 7 days of receiving the product. The request will be
            processed once the merchant verifies the claim.
          </p>
        </div>
        <div className="shadow-xl p-3 m-3 rounded-lg bg-white">
          <h2 className="p-2 m-2 text-[#2563EB] text-lg">
            4. Product Not as Expected
          </h2>
          <p className="p-2 m-2">
            If the received product differs from what's shown on the site or
            does not meet your expectations, notify our Customer Service within
            7 days. We will review and address the issue appropriately.
          </p>
        </div>
        <div className="shadow-xl p-3 m-3 rounded-lg bg-white">
          <h2 className="p-2 m-2 text-[#2563EB] text-lg">
            5. Warranty-Related Issues
          </h2>
          <p className="p-2 m-2">
            For products with manufacturer warranties, please contact the
            respective manufacturer directly for assistance.
          </p>
        </div>
        <div className="shadow-xl p-3 m-3 rounded-lg bg-white">
          <h2 className="p-2 m-2 text-[#2563EB] text-lg">6. Refunds</h2>
          <p className="p-2 m-2">
            Once approved by VAIBHAV ENTERPRISES, refunds will be processed
            within 7 business days to the original payment method.
          </p>
        </div>
      </div>
     </div>
    </>
  );
};

export default CancellationAndRefundPage;
