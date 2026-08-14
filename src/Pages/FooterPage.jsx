
import { Link } from "react-router-dom";
const FooterPage = () => {
  return (
    <>
      <footer>
        <div>
          <div className="text-center md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-9 bg-[#111827]">
            <div class="p-5 m-5 lg:m-10 text-center">
              <h3 className="m-1 p-1 text-1px font-medium text-center text-[#FFFFFF]">
                Download Our App
              </h3>
              <p className="text-[#D1D5DB] text-center">
                Download App for Android and iso mobile phone.
              </p>
              <div class="flex p-5 gap-1  ">
                <img
                  src="/play-store.png "
                  className="w-30 mx-5 sm:mx-18 md:mx-0 lg:w-35 lg:ml-0"
                />
                <img src="/app-store.png" alt="" className="w-35 lg:w-40 " />
              </div>
            </div>
            <div className="p-5 m-5 text-center ">
              {/* <h1 className="m-1 p-1 text-2xl font-bold">RX Square</h1> */}
              <img
                src="./lg.png"
                alt=""
                className="w-60 mx-auto my-0 sm:w-50 sm:my-0 md:my-0 md:w-40  "
              />
              <address className=" p-1 text-[#D1D5DB]">
                2nd Floor, 37, Pycrofts Rd Narayana Krishnaraja Puram, <br />
                Triplicane,Chennai, Tamil Nadu 600005
              </address>
              <p className="m-1 p-1 text-[#D1D5DB]">
                <b className="text-[#6B7280] m-1">Phone: </b>+91 63853 33384
              </p>
              <p className="m-1 p-1 text-[#D1D5DB]">
                <b className="text-[#6B7280] m-1">Email:</b>info@rxsquare.in
              </p>
              <div className="flex items-center gap-4 m-1 p-1  icon">
                <a
                  href="https://www.facebook.com/people/RX-Square/pfbid02cvKqsuyeu1KveHCz2oWp8eEfCeWwEsYMijimXsYz3rTAMifLDQzfNjgV4Rf5c5swl/?rdid=twvT20AJpZ58Th6z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DmQoqQQua%2F "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/facebook.png"
                    alt="Facebook"
                    className="w-8 hover:scale-110 transition duration-300 "
                  />
                </a>
                <a
                  href="https://www.instagram.com/rx.square"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram.png"
                    alt="Instagram"
                    className="w-8 hover:scale-110 transition duration-300"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/rx-square/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="w-8 hover:scale-110 transition duration-300"
                  />
                </a>
              </div>
            </div>
            <div className="p-5 m-5 text-center">
              <h4 className="m-1 p-1 text-1px font-medium text-[#FFFFFF]">
                Useful Links
              </h4>
              <ul>
                <li className="m-1 p-1">
                  {/* <a href="">Home</a> */}
                  <Link to="/" className=" hover:text-[#3B82F6] text-[#D1D5DB]">
                    Home
                  </Link>
                </li>
                <li className="m-1 p-1">
                  <Link
                    to="/about"
                    className=" hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    About
                  </Link>
                </li>
                <li className="m-1 p-1">
                  <Link
                    to="/products"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Products
                  </Link>
                </li>
                {/* <li className="m-1 p-1">
                <Link to="/Services" className="hover:text-[#4294f7]">Services</Link>
              </li> */}
                <li className="m-1 p-1">
                  {/* <a href="">Blog</a> */}
                  <Link
                    to="/BlogPage"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Blog
                  </Link>
                </li>
                <li className="m-1 p-1">
                  {/* <a href="">Terms of Service</a> */}
                  <Link
                    to="/TermsofServicePage"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="m-1 p-1">
                  {/* <a href="">Privacy Policy</a> */}
                  <Link
                    to="/PrivacyPolicyPage"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="m-1 p-1">
                  {/* <a href="CancellationAndRefundPage">Cancellation and Refund</a> */}
                  <Link
                    to="/CancellationAndRefundPage"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Cancellation and Refund
                  </Link>
                </li>
                <li className="m-1 p-1">
                  {/* <a href="TermsAndConditionsPage">Terms And Conditions</a> */}
                  <Link
                    to="/TermsAndConditionsPage"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Terms And Conditions
                  </Link>
                </li>
                <li className="m-1 p-1">
                  {/* <a href="ShippingAndDeliveryPage">Shipping And Delivery</a> */}
                  <Link
                    to="/ShippingAndDeliveryPage"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Shipping And Delivery
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="p-3 m-3">
            <h4 className="m-1 p-1 text-1px font-medium">Our Services</h4>
            <ul>
              <li className="m-1 p-1">
                <a href="">Software Development</a>
              </li>
              <li className="m-1 p-1">
                <a href="">Business Solutions</a>
              </li>
              <li className="m-1 p-1">
                <a href="">Automation</a>
              </li>
              <li className="m-1 p-1">
                <a href="">Consulting</a>
              </li>
              <li className="m-1 p-1">
                <a href="">IT Support</a>
              </li>
            </ul>
          </div>
          <div className="p-3 m-3">
            <h4 className="m-1 p-1 text-1px font-medium">
              Industries We Serve
            </h4>
            <ul>
              <li className="m-1 p-1">
                <a href="">Insurance</a>
              </li>
              <li className="m-1 p-1">
                <a href="">Retail</a>
              </li>
              <li className="m-1 p-1">
                <a href="">Finance</a>
              </li>
              <li className="m-1 p-1">
                <a href="">Healthcare</a>l
              </li>
              <li className="m-1 p-1">
                <a href="">Manufacturing</a>
              </li>
            </ul>
          </div> */}
            <div className="p-5 m-5 text-center">
              <h4 className="m-1 p-1 text-1px font-medium text-[#FFFFFF]">
                Support
              </h4>
              <ul>
                <li className="m-1 p-1">
                  <Link
                    to="/FAQPage"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="m-1 p-1">
                  <Link
                    to="/HelpCenterPage"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="m-1 p-1">
                  <Link
                    to="/contact"
                    className="hover:text-[#3B82F6] text-[#D1D5DB]"
                  >
                    Contact Us
                  </Link>
                </li>

                {/* <li className="m-1 p-1">
                <a href="">Careers</a>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <br />
      <hr className="text-gray-100" />
      <div className="text-center m-3 p-3">
        <p>&copy; CopyrightVaibhav EnterprisesAll Rights Reserved</p>
        <p>
          Designed by <span className="text-[#3B82F6]">RX Square</span>
        </p>
      </div>
    </>
  );
};
export default FooterPage;
