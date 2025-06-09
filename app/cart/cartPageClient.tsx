'use client'
import React from 'react'
import { useCart } from '../context/cartContext'

function CartPageClient() {
  const { cart, removeFromCart, increaseQty, decreaseQty,totalPrice, getItemTotal } = useCart();

  return (
    <div className='bg-white p-6'>
      <h1 className="text-2xl text-black font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className='font-sans fixed text-center text-black'>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="border p-4 mb-4 rounded">
            <h2 className="text-lg text-black font-semibold">{item.title}</h2>
            <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
            <p className="text-gray-700">{item.description}</p>
            <span className="text-black font-bold">${item.price}</span>
            <span className="text-gray-700"> x {item.quantity}</span>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button onClick={() => removeFromCart(item.id)} type="button" className="pt-1 pb-1 pl-2 pr-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center me-2 mb-0.8 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 cursor-pointer">Delete</button>
                  <button onClick={() => decreaseQty(item.id)} className="m-0.3 pt-0.8 pb-0.8 pl-2 pr-2 text-black border rounded cursor-pointer hover:bg-gray-900 hover:text-white">-</button>
                  <span className="w-8 text-gray-900 text-center">{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="m-0.3 pt-0.8 pb-0.8 pl-2 pr-2 text-black border rounded cursor-pointer hover:bg-gray-900 hover:text-white">+</button><br/>
                  <span className="text-black font-bold m-0.3 pt-0.8 pb-0.8 pl-2 pr-2">${getItemTotal(item.id).toFixed(2)}</span>
                </div>
              </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="text-right mt-6 text-xl font-bold text-black">
            Total Price: ${totalPrice.toFixed(2)}
        </div>
      )}
    </div>
  );
}

export default CartPageClient;