"use client";

import { useEffect, useState } from "react";
import { getCart, removeCartItem } from "@/service/page";
import Button from "@/components/Button";
import { Link, useRouter } from "@/i18n/navigation";
import Image from "next/image";

const Shop = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter();
  
  const fetchCart = () => {
    
    getCart(1, "1")
      .then(res => res.json())
      .then(data => setCartItems(data.data?.items || []));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = (itemId: number) => {
    removeCartItem(itemId).then(() => fetchCart());
  };

  const increase = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item )
    );
  };

  const decrease = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1? { ...item, quantity: item.quantity - 1 }: item )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto bg-white/50 p-8 rounded-2xl shadow-lg mb-30!">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          <Button title="⬅️" type="button" onClick={() => router.back()}/>
          🛒 Тележка</h2>
        <span className="text-gray-500">{cartItems.length} товаров</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">Тележка пуста 🗑️</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-black border rounded-xl p-4 hover:shadow-md transition">
              <div>
                <Image src={`https://anorkhulov.uz/${item.product.image}`} alt="img" width={50} height={60}/>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.product.name}</h3>
                <p className="text-gray-500">1 шт / ${item.product.price}$</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center border  rounded-lg overflow-hidden">
                  <Button type="button" onClick={() => decrease(item.id)} title="-" disabled={item.quantity === 1} extraStyle="px-3 border-none py-1 bg-gray-200 disabled:opacity-40!  text-[19px]" />
                  <span className="px-4  border-x">{item.quantity}</span>
                  <Button type="button" onClick={() => increase(item.id)} title="+"  extraStyle="px-3 py-1 bg-gray-200 disabled:opacity-40! border-none text-[19px]" />
                </div>

                <span className="font-bold text-lg">
                  ${item.product.price * item.quantity}
                </span>
                <Button type="button" title="Удалить" onClick={() => removeItem(item.id)} extraStyle="bg-red-500 hover:bg-red-600 border-red-200  text-white px-4 py-2 rounded-lg transition"/>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t border-black pt-6 mt-6">
            <h3 className="text-xl font-semibold">Общий:</h3>
            <span className="text-2xl font-bold">${total}</span>
          </div>

          <Button
            type="button"
            title="Разместить заказ"
            extraStyle="w-full mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          />
        </div>
      )}
    </div>
  );
};

export default Shop;