import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {" "}
      {products.map(
        (
          item
        ) => (
          <div
            key={item.id}
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-contain group-hover:scale-110 transition-transform"
                />{" "}
              </div>
              <h3 className="font-bold text-gray-800 line-clamp-2 mb-2">
                {item.title}
              </h3>{" "}
              <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-3">
                {item.category}
              </p>{" "}
            </div>

            <div className="mt-4">
              <p
                className={`text-2xl font-black mb-4 ${
                  item.price > 100 ? "text-red-500" : "text-emerald-500"
                }`}
              >
                ${item.price} 
              </p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition-colors shadow-lg shadow-indigo-200 active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
