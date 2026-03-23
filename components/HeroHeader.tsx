"use client";

import Image from "next/image";
import Button from "./Button";
import { IconLike, IconShop } from "@/public/icons/page";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { getCart } from "@/service/page";

const HeroHeader = ({ extraClass }: { extraClass?: string }) => {
  const path = usePathname();
  const [cartCount, setCartCount] = useState(0);

  const HeroList = [
    { id: "1", href: "/menu", title: "Меню" },
    { id: "2", href: "/news", title: "Новости" },
    { id: "3", href: "/booking", title: "Бронирование" },
    { id: "4", href: "/about", title: "О нас" },
    { id: "5", href: "/contact", title: "Контакты" },
  ];

  const fetchCart = async () => {
      const res = await getCart(1, "1");
      const data = await res.json();
      const items = data.data?.items || [];

      const totalProducts = items.length;

      setCartCount(totalProducts);

  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <header className={`flex items-center justify-between pb-18.75 ${extraClass}`}>
      <a href="/">
        <Image src={"/images/LOGO.png"} alt="LOGO" width={136} height={71} />
      </a>

      <nav className="flex items-center gap-10.75">
        {HeroList.map((item) => {
          const isActive = path === item.href;
          return (
            <Link key={item.id} href={item.href} className={`font-medium hover:bg-white/30 p-4 duration-300 rounded-[28px] ${ isActive ? "text-red-500" : "text-black"}`}> {item.title}</Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-7.5">
        <Button type="button" icon={<IconLike />} iconPost="left" extraStyle="border-2 border-[#000000] p-1.5 rounded-full"/>
        <Link href="/shop" className="relative">
        <Button type="button" icon={<IconShop />} iconPost="left" extraStyle="border-2 border-[#000000] p-1.5 rounded-full"/>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default HeroHeader;