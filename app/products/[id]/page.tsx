import { Product } from '@/app/components/details';
import ProductDetailsClient from './productDetailsClient';

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  try {
    const {id} = params
    console.log("id-------", id);
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch product. Status: ${res.status}`);
    }

    const product: Product = await res.json();
    console.log("res-------", product);

    return <ProductDetailsClient product={product} />;
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="p-6 text-red-600 text-center">
        <h1 className="text-2xl font-semibold">Product Not Found</h1>
        <p>We couldn’t load the product details. Please try again later.</p>
      </div>
    );
  }
}
