"use client";
import Button from "@/components/Button"
import {  Link, useRouter } from "@/i18n/navigation";
import { IconArrowRight } from "@/public/icons/page";
import { getAll } from "@/service/page";
import Image from "next/image"
import { useEffect, useState } from "react";

type NewType = {
    author:{
        avatar:string,
        firstName:string,
    }
    description:string,
    image:string,
}




const Gallery = () => {
        const [news, setNews] = useState<NewType[]>([]);

        useEffect(() => {
            getAll("news")
              .then(res => res.json())
              .then(data => {
                const newsList = data.data || [];
                setNews(newsList);
              })
              .catch(err => console.error(err));
          }, []);


 
  return (
    <section className="pt-17.75 pb-50.5"> 
        <div className="containers relative">
            <h2 className="text-center text-[48px] font-extrabold mb-35.75  ">Новости/Галерея</h2>
            <ul className="grid grid-cols-3 gap-5 mb-17.75">
                {news.slice(3).map((item, index) => (
                  <li key={index} className="gallery-bg pt-25 pb-4.75 pl-7 pr-2 rounded-[30px] relative">
                    <div className="relative w-92.25 h-10">
                      <Image className="absolute -top-40 left-0" src={`https://anorkhulov.uz/${item.image}`} alt="img" width={213} height={157}/>
                    </div>
                    <p className="mb-2 text-[16px]">{item.description}</p>
                    <div className="flex items-center gap-3.25">
                      <Image src={`https://anorkhulov.uz/${item.author.avatar}`} alt="IMg" width={45} height={45}/>
                      <strong>{item.author.firstName}</strong>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="flex items-center justify-end">
                <Link href={"/news"}>
                    <Button type="button" title="Посмотреть все " iconPost="right"  icon={<IconArrowRight/>} extraStyle=" bg-black py-[16px] px-[31px] text-[18px]  text-[#ffffff] flex items-center gap-2 rounded-t-[13px] rounded-l-[13px]"/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Gallery