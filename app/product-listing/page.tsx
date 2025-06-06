import ProductsClient from "./productListingClient";

export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await res.json();

  return (
    <div>
      <ProductsClient products={products}/>
    </div>
  );
}