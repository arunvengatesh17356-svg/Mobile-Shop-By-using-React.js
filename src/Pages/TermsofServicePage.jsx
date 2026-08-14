import { useEffect } from "react";
const TermsofServicePage = () => {
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
        <div className="text-center p-5 m-10 border-1 rounded-lg  bg-[#FFFFFF] ">
        <h1 className="text-4xl font-semibold text-center p-2 m-2 text-[#2563EB]">
          Terms of Service
        </h1>
        <p className="p-2 m-2  text-xl ">
          Please review our terms carefully. By using our website, you agree to
          these terms and conditions.
        </p>
      </div>

      <div className="p-2 m-2">
        <div id="accordion-card" data-accordion="collapse ">
          <h2 id="accordion-card-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
              data-accordion-target="#accordion-card-body-1"
              aria-expanded="true"
              aria-controls="accordion-card-body-1"
            >
              <span>1.Acceptance of Terms</span>
              <svg
                data-accordion-icon
                class="w-5 h-5 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-card-body-1"
            class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
            aria-labelledby="accordion-card-heading-1"
          >
            <div class="p-4 md:p-5">
              <p class="mb-2 text-body">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p class="text-body">
                Check out this guide to learn how to{" "}
                <a
                  href="/docs/getting-started/introduction/"
                  class="text-fg-brand hover:underline"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div>
          <h2 id="accordion-card-heading-2" class="mt-4">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
              data-accordion-target="#accordion-card-body-2"
              aria-expanded="false"
              aria-controls="accordion-card-body-2"
            >
              <span>2.Use of the Website</span>
              <svg
                data-accordion-icon
                class="w-5 h-5 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-card-body-2"
            class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
            aria-labelledby="accordion-card-heading-2"
          >
            <div class="p-4 md:p-5">
              <p class="mb-2 text-body">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p class="text-body">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  class="text-fg-brand hover:underline"
                >
                  Figma design system
                </a>{" "}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
          <h2 id="accordion-card-heading-3" class="mt-4">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none"
              data-accordion-target="#accordion-card-body-3"
              aria-expanded="false"
              aria-controls="accordion-card-body-3"
            >
              <span>3. Intellectual Property</span>
              <svg
                data-accordion-icon
                class="w-5 h-5 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-card-body-3"
            class="hidden border border-t-0 border-default rounded-b-base shadow-xs"
            aria-labelledby="accordion-card-heading-3"
          >
            <div class="p-4 md:p-5">
              <p class="mb-2 text-body">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p class="mb-2 text-body">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p class="mb-2 text-body">Learn more about these technologies:</p>
              <ul class="ps-5 text-body list-disc">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    class="text-fg-brand hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    class="text-fg-brand hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TermsofServicePage;
