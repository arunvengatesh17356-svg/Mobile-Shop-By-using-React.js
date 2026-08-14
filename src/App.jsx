import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeadPage from "./Pages/HeadPage";
import FooterPage from "./Pages/FooterPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import PaymentPage from "./Pages/PaymentPage";
import OrderSuccessPage from "./Pages/OrderSuccessPage";
import BlogPage from "./Pages/BlogPage";
import TermsofServicePage from "./Pages/TermsofServicePage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import CancellationAndRefundPage from "./Pages/CancellationAndRefundPage";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage";
import ShippingAndDeliveryPage from "./Pages/ShippingAndDeliveryPage";
import FAQPage from "./Pages/FAQPage";
import HelpCenterPage from "./Pages/HelpCenterPage";
import SignupForm from "./Pages/SignupForm";
import ScrollToTop from "./componants/ScrollToTop";
import CartProvider from "./Pages/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <ScrollToTop />

      <HeadPage />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/products/:slug" element={<ProductDetails />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/order-success" element={<OrderSuccessPage />} />

        <Route path="/BlogPage" element={<BlogPage />} />

        <Route path="/SignupForm" element={<SignupForm />} />

        <Route
          path="/TermsofServicePage"
          element={<TermsofServicePage />}
        />

        <Route
          path="/PrivacyPolicyPage"
          element={<PrivacyPolicyPage />}
        />

        <Route
          path="/CancellationAndRefundPage"
          element={<CancellationAndRefundPage />}
        />

        <Route
          path="/TermsAndConditionsPage"
          element={<TermsAndConditionsPage />}
        />

        <Route
          path="/ShippingAndDeliveryPage"
          element={<ShippingAndDeliveryPage />}
        />

        <Route path="/FAQPage" element={<FAQPage />} />

        <Route
          path="/HelpCenterPage"
          element={<HelpCenterPage />}
        />
      </Routes>

      <a
        href="https://wa.me/919445844624"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-14 hover:scale-110 transition duration-300"
        />
      </a>

      <FooterPage />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;