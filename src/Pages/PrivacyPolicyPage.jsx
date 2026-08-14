import { useEffect } from "react";
const PrivacyPolicyPage = () => {
    useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".hero-section,.privacy,.about, #support"
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
    <div className="container privacy">
      <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 bg-white shadow-lg rounded-xl p-5">
            <h1 className="text-2xl font-bold text-center mb-6 text-[#2563EB]">
              Privacy Policy
            </h1>

            <nav className="space-y-3">
              <a
                href="#overview"
                className="block w-full rounded-lg border p-3 text-center hover:bg-[#D9FF00] text-black transition "
              >
                Overview
              </a>

              <a
                href="#Collect"
                className="block w-full rounded-lg border p-3 text-center hover:bg-[#D9FF00] text-black transition"
              >
                Information We Collect
              </a>

              <a
                href="#Information"
                className="block w-full rounded-lg border p-3 text-center hover:bg-[#D9FF00] text-black transition"
              >
                How We Use Information
              </a>

              <a
                href="#Cookies"
                className="block w-full rounded-lg border p-3 text-center hover:bg-[#D9FF00] text-black transition"
              >
                Cookies & Tracking
              </a>

              <a
                href="#Security"
                className="block w-full rounded-lg border p-3 text-center hover:bg-[#D9FF00] text-black transition"
              >
                Data Security
              </a>

              <a
                href="#Controlling"
                className="block w-full rounded-lg border p-3 text-center hover:bg-[#D9FF00] text-black transition"
              >
                Controlling Personal Information
              </a>

              <a
                href="#Party"
                className="block w-full rounded-lg border p-3 text-center hover:bg-[#D9FF00] text-black transition"
              >
                Third-Party Links
              </a>

              <a
                href="#Policy"
                className="block w-full rounded-lg border p-3 text-center hover:bg-[#D9FF00] text-black transition"
              >
                Policy Changes
              </a>
            </nav>
          </div>
        </aside>
        <main className="lg:col-span-3 space-y-8">
          <section id="overview" className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#2563EB]">
              Last updated on Feb 20, 2025
            </h2>

            <p className="mb-4 text-gray-700 leading-7">
              This privacy policy explains how VAIBHAV ENTERPRISES collects,
              uses, and protects any information that you provide when visiting
              our website or purchasing products.
            </p>

            <p className="mb-4 text-gray-700 leading-7">
              VAIBHAV ENTERPRISES is committed to ensuring that your privacy is
              protected. Any personal information collected will only be used
              according to this privacy policy.
            </p>

            <p className="text-gray-700 leading-7">
              We may update this policy from time to time. Please review this
              page periodically for changes.
            </p>
          </section>
          <section id="Collect" className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold  mb-4 text-[#2563EB]">
              1. Information We Collect
            </h2>

            <p className="mb-4 text-gray-700 leading-7">
              We may collect your name, email address, phone number, delivery
              address, payment information and other details required to process
              your orders.
            </p>

            <p className="text-gray-700 leading-7">
              We may also collect technical information such as browser type, IP
              address and usage statistics to improve our services.
            </p>
          </section>
          <section
            id="Information"
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-[#2563EB] mb-4">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Maintain internal records.</li>
              <li>Improve products and services.</li>
              <li>Send promotional offers.</li>
              <li>Conduct customer research.</li>
              <li>Provide better customer support.</li>
              <li>Personalize your website experience.</li>
            </ul>
          </section>
          <section id="Cookies" className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#2563EB] mb-4">
              3. Cookies & Tracking
            </h2>

            <p className="mb-4 text-gray-700 leading-7">
              Cookies are small files stored on your device that help us improve
              your browsing experience and understand website usage.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Analyze website traffic.</li>
              <li>Improve user experience.</li>
              <li>Remember user preferences.</li>
              <li>Generate anonymous statistics.</li>
            </ul>

            <p className="mt-4 text-gray-700 leading-7">
              You may disable cookies through your browser settings, although
              some features of the website may not function properly.
            </p>
          </section>
          <section id="Security" className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#2563EB] mb-4">
              4. Data Security
            </h2>

            <p className="text-gray-700 leading-7">
              We use appropriate technical and organizational security measures
              to protect your personal information against unauthorized access,
              disclosure, alteration, or destruction.
            </p>
          </section>
          <section
            id="Controlling"
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-[#2563EB] mb-4">
              5. Controlling Your Personal Information
            </h2>

            <p className="mb-4 text-gray-700 leading-7">
              You may choose to restrict the collection or use of your personal
              information.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Opt out of marketing communications.</li>
              <li>Request correction of your personal information.</li>
              <li>Request deletion of your information where applicable.</li>
            </ul>

            <div className="mt-6 space-y-2 text-gray-700 break-words">
              <p>
                <strong>Address:</strong> NO.73/1, 89, NANDIVARAM SREENIVASA
                COMPLEX, NH SERVICE ROAD, GST ROAD, Kanchipuram, Tamil Nadu -
                603202
              </p>

              <p>
                <strong>Phone:</strong> 9445844624
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <span className="text-[#2563EB]">support@rxsquare.in</span>
              </p>
            </div>
          </section>
          <section id="Party" className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#2563EB] mb-4">
              6. Third-Party Links
            </h2>

            <p className="text-gray-700 leading-7">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy policies, practices, or content of
              those external websites.
            </p>
          </section>
          <section id="Policy" className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#2563EB] mb-4">
              7. Policy Changes
            </h2>

            <p className="text-gray-700 leading-7">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page. Continued use of our website after
              updates constitutes your acceptance of the revised policy.
            </p>
          </section>
        </main>
      </div>
    </div>
    </div>
  );
};

export default PrivacyPolicyPage;
