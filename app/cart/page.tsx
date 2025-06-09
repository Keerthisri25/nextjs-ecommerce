import CartPageClient from "./cartPageClient";
import { Suspense } from "react";

export default function CartPage(){
  return(
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CartPageClient/>
      </Suspense>
    </>
  )
}
