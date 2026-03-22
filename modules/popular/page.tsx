"use client";


import Button from "@/components/Button"
import { IconArrowRight, IconLike, IconShop, PapularLikeIcon, PapularShopIcon } from "@/public/icons/page"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { getAll } from "@/service/page"
import { Link } from "@/i18n/navigation";


type ProductType = {
  id: number | string;
  name: string;
  image: string;
  price:string;
  description:string;
};

type CategoryType = {
  id: number | string;
  name: string;
  products: ProductType[];
};


const Popular = () => {
  const t = useTranslations("Popular")
  const tHero = useTranslations("Hero")  

    const [_categories, setCategories] = useState<CategoryType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);

   useEffect(() => {
      getAll("categories")
        .then(res => res.json())
        .then(data => {
          const categoryList = data.data || [];
          setCategories(categoryList);
          setSelectedCategory(categoryList[0] || null);
        })
        .catch(err => console.error(err));
    }, []);

  return (
    <section className="py-15 Popular-bg" >
        <div className="containers">
            <h2 className="text-[48px] text-[#000000] text-center font-extrabold mb-30">Популярные блюда</h2>
            <Carousel opts={{
              align:'start'
             }}>
              <CarouselContent className="">
                {selectedCategory?.products?.map((item:ProductType,index:number) => (

                  
                  <CarouselItem key={index} className="relative    cursor-pointer basis-1 md:basis-1/2 lg:basis-1/4  mb-10">
                        <div key={item.id}>
                              <div className='  bg-[#FFFFFF66] px-5 pb-4.75 pt-40  rounded-[38px] mb-20'>
                                <div className='relative' >
                                  <div className='absolute -top-45  z-0 left-10 w-45  '>
                                    <Image  src={`https://anorkhulov.uz/${item.image}`}   alt={item.name}   width={243}   height={253}   className="rounded-lg object-cover"/>
                                  </div>
                                  <div className='flex  items-start justify-between mb-1'>
                                    <div>
                                      <h3 className=" font-bold text-[15px]  text-[#000000] mb-1">{item.name}</h3>
                                      <p className='text-[15px] text-[#000000]'>{item.description}</p>
                                    </div>
                                    <div className=''>
                                      <IconLike/>
                                    </div>
                                  </div>
                                    <div className='flex items-end justify-between'>
                                      <strong>{item.price}$</strong>
                                      <Button type='button' icon={<IconShop/>} iconPost='left' extraStyle='bg-black p-[13px] rounded-[5px] text-[#ffffff]'/>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </CarouselItem>
                    )
                  )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex justify-end">
              <Link href={"/menu"}>
                <Button type="button" title="Посмотреть меню" icon={<IconArrowRight/>} iconPost="right" extraStyle="p-[20px] flex items-center gap-[10px] text-[18px] font-semibold bg-[#000000] rounded-t-[13px] rounded-l-[13px] text-[#ffffff]"/>
              </Link>
            </div>
        </div>
    </section>
  )
}



export default Popular