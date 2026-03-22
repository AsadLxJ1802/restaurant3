"use client";
import Image from "next/image";
import Button from "./Button";
import { IconLike, IconShop } from "@/public/icons/page";
import { Link, usePathname } from "@/i18n/navigation";



const HeroHeader = ({extraClass}:{extraClass?:string}) => {
  const path = usePathname();



  const HeroList = [
    { id: "1", href: "/menu", title: "Меню" },
    { id: "2", href: "/news", title: "Новости" },
    { id: "3", href: "/booking", title: "Бронирование" },
    { id: "4", href: "/about", title: "О нас" },
    { id: "5", href: "/contact", title: "Контакты" },
  ];

  return (
    <header className={`flex items-center justify-between pb-18.75  ${extraClass}`}>
      <a href="/">
        <Image src={"/images/LOGO.png"} alt="LOGO" width={136} height={71} />
      </a>

      <nav className="flex items-center gap-10.75">
           {HeroList.map((item) => {
            const isActive = path === item.href;

             return (
                 <Link key={item.id} href={item.href} className={`font-medium ${isActive ? "text-red-500" : "text-black"}`}>{item.title}</Link>
             );
               })}
      </nav>

      <div className="flex items-center gap-7.5">
        <Button type="button" icon={<IconLike />} iconPost="left" extraStyle="border-2 border-[#000000] p-1.5 rounded-full"/>
        <Button type="button" icon={<IconShop />} iconPost="left" extraStyle="border-2 border-[#000000] p-1.5 rounded-full"/>
      </div>
    </header>
  );
};

export default HeroHeader;