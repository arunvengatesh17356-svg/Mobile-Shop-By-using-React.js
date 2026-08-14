import { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products, { formatPrice } from "./products";
import { CartContext } from "./CartContext";

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
   const navigate1 = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.slug === slug);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl">Product Not Found</h1>
        <Link
          to="/products"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          &larr; Back to Products
        </Link>
      </div>
    );
  }
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate("/payment");
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/payment");
  };

  const specs = [
    { label: "RAM", value: product.ram },
    { label: "Storage", value: product.storage },
    { label: "Processor", value: product.processor },
    { label: "Display", value: product.display },
    { label: "Battery", value: product.battery },
    { label: "Rear Camera", value: product.camera },
    { label: "Front Camera", value: product.frontCamera },
    { label: "OS", value: product.os },
    { label: "Color", value: product.color },
  ].filter((s) => s.value);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
       <button onClick={()=>{navigate1("/products")}} className="bg-[#4294f7] text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer ">Back to products page</button>
      <div className="grid md:grid-cols-2 gap-10 items-start">
       
        <div className="bg-gray-100 rounded-xl p-10">
          <img
            src={product.image}
            alt={product.brand}
            className="w-full object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.brand}</h1>

          <h2 className="text-2xl text-blue-600 mt-5 font-bold">
            {formatPrice(product.price)}
          </h2>

          <p className="mt-5 text-gray-600">Brand : {product.company}</p>

          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            recusandae. This is the detailed description of the mobile.
          </p>

          {specs.length > 0 && (
            <div className="mt-6 border rounded-lg divide-y">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between px-4 py-2 text-sm">
                  <span className="text-gray-500">{s.label}</span>
                  <span className="font-medium text-gray-800">{s.value}</span>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-gray-600">Quantity</span>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
              >
                -
              </button>
              <span className="px-5 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-lg transition"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
