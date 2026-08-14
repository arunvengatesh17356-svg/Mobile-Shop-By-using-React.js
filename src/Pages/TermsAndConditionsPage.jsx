import { useEffect } from "react";
const TermsAndConditionsPage = () => {
        useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.terms,.about, #support"
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
      <div className="container terms">
        <div className="text-center">
          <h1 className="text-3xl text-center p-3 m-3 text-[#2563EB]">Terms & Conditions</h1>
          <p className="text-center p-2 m-2">Last updated on Feb 20, 2025</p>
        </div>
        <hr className="text-gray-400 p-2 m-2" />
        <div className="rounded-lg shadow-xl p-4 m-4 bg-white md:p-2 md:m-0 lg:p-10 lg:m-10">
          <p className="p-2 m-2">
            For the purpose of these Terms and Conditions, the terms "we", "us",
            "our" refer to VAIBHAV ENTERPRISES, whose registered office is
            NO.73/1, 89, NANDIVARAM SREENIVASA COMPLEX, NH SERVICE ROAD, GST
            ROAD, Kanchipuram, Tamil Nadu 603202. The terms "you", "your",
            "user", "visitor" refer to any person using our website or making a
            purchase from us.
          </p>
        </div>
        <div className="p-3 m-3 text-center md:grid md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">Use of Website</h2>
            <p className="p-1 m-1">
             
              Your use of this website and/or purchases from us are governed by
              the following Terms and Conditions. Content on this website is
              subject to change without notice.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">
              Accuracy of Information
            </h2>
            <p className="p-1 m-1">
              We do not provide any warranty or guarantee as to the accuracy,
              timeliness, or completeness of the content. You acknowledge such
              content may have errors and we exclude liability to the fullest
              extent permitted by law.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">
              Your Responsibility
            </h2>
            <p className="p-1 m-1">
              Your use of any information or material from our website is at
              your own risk. It is your responsibility to ensure our products or
              services meet your requirements before purchase.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">Trademarks</h2>
            <p className="p-1 m-1">
              Trademarks not owned by or licensed to us are acknowledged on the
              website.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">Unauthorized Use</h2>
            <p className="p-1 m-1">
              Unauthorized use of the information may result in a claim for
              damages and/or be a criminal offense.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">External Links</h2>
            <p className="p-1 m-1">
              We may include links to third-party sites for your convenience. We
              do not endorse the content of those sites.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">
              Linking to Our Site
            </h2>
            <p className="p-1 m-1">
              You may not link to our website without prior written permission
              from VAIBHAV ENTERPRISES.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">Governing Law</h2>
            <p className="p-1 m-1">
              Any disputes arising from use of our site or purchases with us
              shall be governed by the laws of India.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">
              Payment Authorization
            </h2>
            <p className="p-1 m-1">
              We shall not be liable for any loss arising from declined
              transactions due to the cardholder exceeding authorized limits as
              set with our acquiring bank.
            </p>
          </div>
          <div className="rounded-lg shadow-xl p-5 m-5 bg-white">
            <h2 className="p-2 m-2 text-[#2563EB] text-lg">Use of Website</h2>
            <p className="p-1 m-1">
              Your use of this website and/or purchases from us are governed by
              the following Terms and Conditions. Content on this website is
              subject to change without notice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
