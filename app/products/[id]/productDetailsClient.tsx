'use client';

import { Product } from '@/app/components/details';
import { useCart } from '@/app/context/cartContext';

type Props = {
  product: Product;
};

export default function ProductDetailsClient({ product }: Props) {
  const {addToCart } = useCart();


  return (
    <div>
      <div className="bg-white text-black p-6">
        <div className='fixed h-20'></div>
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <img src={product.image} alt={product.title} className="w-48 h-48 object-contain" />
        <p className="mt-4">{product.description}</p>
        <p className="mt-2 font-semibold text-lg">Price: ${product.price}</p>
        <br/>
        <button onClick={()=> addToCart(product)} className="absolute text-gray-600 hover:text-blue-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </button>
        <br/>
        <br/>
      </div>
    </div>
  );
}
