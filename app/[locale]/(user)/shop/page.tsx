"use client";

import { useEffect, useState } from "react";
import { getCart, removeCartItem, updateCartItem } from "@/service/page";import Button from "@/components/Button";
import { Link, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { IconArrowLefth } from "@/public/icons/page";

const Shop = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter();
  
  const fetchCart = () => {
    getCart(1)
    .then(res => res.json())
    .then(data => setCartItems(data.data.items))
  }

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = (itemId: number) => {
    removeCartItem(itemId).then(() => fetchCart());
  };

  const increase = async (item:any) => {

    await updateCartItem(item.id, item.quantity + 1)
  
    fetchCart()
  
  }

  const decrease = async (item:any) => {

    if(item.quantity === 1) return
  
    await updateCartItem(item.id, item.quantity - 1)
  
    fetchCart()
  
  }

  const total = cartItems.reduce(
    (sum,item)=> sum + item.totalPrice,0)
  return (
    <div className="max-w-4xl mx-auto bg-white/80 border border-gray-100 p-6 md:p-10 rounded-[32px] shadow-2xl shadow-gray-200/50 mb-20 mt-10">      
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center  gap-4">
          <Button icon={<IconArrowLefth/>} iconPost="left"type="button" extraStyle="p-2 hover:bg-gray-100 rounded-full border-none transition-all active:scale-95" onClick={() => router.back()}/>
          <h1 className="text-3xl font-black tracking-tight text-gray-900">Savat</h1>
        </div>
        <div className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
          {cartItems.length} mahsulot
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-24 flex flex-col items-center">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-gray-400 text-xl font-medium">Savat hozircha bo'sh</p>
          <Link href="/menu" className="mt-6 text-blue-600 hover:underline font-medium">Xaridni boshlash →</Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col sm:flex-row items-center gap-6 p-5 border border-gray-100 rounded-2xl bg-gray-50/30 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300"
            >
              <div className="relative w-24 h-28 bg-white rounded-xl overflow-hidden shadow-inner p-2 shrink-0">
                <Image  src={`https://anorkhulov.uz/${item.product.image}`}  alt="img"  fill className="object-contain" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-xl text-gray-800 leading-tight mb-1">{item.product.name}</h3>
                <p className="text-gray-400 font-medium">${item.product.price} / dona</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                  <Button type="button" onClick={() => decrease(item)} title="−" disabled={item.quantity === 1} extraStyle="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 disabled:opacity-30 border-none text-xl font-bold transition-colors" />
                  <span className="w-12 text-center font-bold text-lg text-gray-800">{item.quantity}</span>
                  <Button type="button" onClick={() => increase(item)} title="+"  extraStyle="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 border-none text-xl font-bold transition-colors" />
                </div>

                <div className="flex flex-col items-end min-w-25">
                  <span className="font-black text-xl text-gray-900 mb-2">
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </span>
                  <Button type="button" title="O'chirish" onClick={() => removeItem(item.id)} extraStyle="border-none text-red-400 hover:text-red-600 text-sm font-semibold transition-colors flex items-center gap-1" />
                </div>
              </div>
            </div>
          ))}

          <div className="mt-10 p-8 bg-gray-900 rounded-[24px] text-white shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 text-lg">Umumiy summa:</span>
              <span className="text-3xl font-black text-white italic tracking-tighter">
                ${total.toLocaleString()}
              </span>
            </div>

            <Link href={"/Registration"}>
              <Button type="button" title="To'lov sahifasiga o'tish" extraStyle="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 active:scale-[0.98] transition-all"/>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
