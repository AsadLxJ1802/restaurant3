"use client";

import { useEffect, useState } from "react";
import { getCart, removeCartItem } from "@/service/page";
import Button from "@/components/Button";

const Shop = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const fetchCart = () => {
    getCart(1, "1")
      .then(res => res.json())
      .then(data => setCartItems(data.data?.items || []))
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = (itemId: number) => {
    removeCartItem(itemId)
      .then(() => fetchCart())
  };

  return (
    <div className=" containers bg-white/50 p-10 mb-100!">
      <h2>Savatcha</h2>

      {cartItems.length === 0 ? ( <div>
      </div>) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.product.name} — {item.quantity} ta — {item.product.price * item.quantity}$
              <Button title="Delet" type="button" onClick={() => removeItem(item.id)}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Shop;