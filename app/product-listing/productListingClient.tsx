'use client';

import { Product } from '../components/details';
import { useCart } from '../context/cartContext';
import Link from 'next/link';


export default function ProductsClient({ products }: { products: Product[] }) {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="bg-white text-black p-6">
      <div className='fixed h-20'></div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <Link href={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
              <h3 className="text-lg font-semibold">{product.title}</h3>
            </Link>

            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="text-gray-600 hover:text-blue-500 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
