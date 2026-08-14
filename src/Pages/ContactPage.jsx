import { useEffect } from "react";
const ContactPage = () => {
    useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.products,.about, .contact"
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
      <div className="py-10 px-4 sm:px-6 lg:px-12 contact">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2563EB]">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to us for any inquiries,
            collaborations, or support.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-center text-[#2563EB]">
              Contact Info
            </h2>

            <p className="text-gray-700 mb-6">
              Let's connect and explore how RX Square can help your business
              grow.
            </p>

            <div className="flex items-start gap-4 mb-6">
              <i className="fa-solid fa-location-dot text-2xl  mt-1"></i>

              <div>
                <h3 className="font-semibold ">
                  Our Location
                </h3>

                <address className="not-italic text-gray-700 leading-7">
                  2nd Floor, 37, Pycrofts Rd,
                  <br />
                  Narayana Krishnaraja Puram,
                  <br />
                  Triplicane,
                  <br />
                  Chennai, Tamil Nadu - 600005
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <i className="fa-solid fa-phone text-2xl mt-1"></i>

              <div>
                <h3 className="font-semibold ">
                  Phone Number
                </h3>

                <p className="text-gray-700 leading-7">
                  +91 94458 44624
                  <br />
                  +91 63853 33384
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="fa-solid fa-envelope text-2xl  mt-1"></i>

              <div>
                <h3 className="font-semibold ">
                  Email Address
                </h3>

                <p className="text-gray-700 leading-7">
                  info@rxsquare.in
                  <br />
                  contact@rxsquare.in
                </p>
              </div>
            </div>
          </div>

          <div className="shadow-lg rounded-xl p-6 bg-white">
            <h2 className="text-2xl font-semibold text-[#2563EB] mb-4">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-6">
              Have any questions or need assistance? Fill out the form, and our
              team will get back to you soon.
            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              ></textarea>

              <button
                type="submit"
                className="inline-block border p-3 m-3 rounded-lg text-base md:text-xl bg-[#3B82F6] text-white transition duration-300 ease-in-out transform "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;