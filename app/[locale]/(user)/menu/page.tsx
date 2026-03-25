"use client";

import HeroHeader from '@/components/HeroHeader';
import Gallery from '@/components/NewsWrapper';
import { ArrowRight, IconLike, IconShop } from '@/public/icons/page';
import {  addCartItem, getAll } from '@/service/page';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import Loading from '@/public/images/page';
import { Link, useRouter } from '@/i18n/navigation';

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

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()
  

  const handleAddToCart = async (productId:number) => {

    await addCartItem({
      userId:1,
      productId,
      quantity:1
    })
  
    alert("Mahsulot savatchaga qo'shildi")
  }

  useEffect(() => {
    getAll("categories")
      .then(res => res.json())
      .then(data => {
        const categoryList = data.data || [];
        setCategories(categoryList);
        setSelectedCategory(categoryList[0] || null);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="mx-auto text-center mb-30 py-50 w-325 rounded-[28px] bg-white/50">
        <Loading/>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className='hero-bg2 mb-13.75'>
        <div className='containers relative p-15 hero-bg rounded-[50px]'>
          <Image className='absolute top-140 -right-35' src={"/images/Menu-img1.png"} alt='img' width={258} height={258}/>
          <Image className='absolute top-210 -left-43' src={"/images/Menu-img2.png"} alt='img' width={258} height={258}/>
          <Image className='absolute top-215 left-130' src={"/images/Menu-img3.png"} alt='img' width={258} height={258}/>

          <HeroHeader extraClass='mb-[107px]' />
          <div className='flex items-center mb-7.5'>
            <Link className='flex items-center opacity-50' href="/">Главная<ArrowRight/></Link>
            <span className='opacity-100 cursor-pointer'>Меню</span>
          </div>

          <h2 className='text-center mb-12.5 font-extrabold text-[48px] text-[#000000]'>Меню</h2>

          <div className='justify-center flex mb-40'>
            <div className="flex gap-4 bg-[#FFFFFF66] rounded-[27px] py-1.5 px-3">
              {categories.map((item, index) => (
                <Button
                  key={item.id}
                  type="button"
                  title={item.name}
                  extraStyle={`rounded-[27px] border-transparent px-[8px] ${activeIndex === index ? "bg-[#ffffff] text-black" : "text-black"}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setSelectedCategory(item);
                  }}
                />
              ))}
            </div>
          </div>

          {selectedCategory && selectedCategory.products.length === 0 ? (
            <div className="flex justify-center mb-20 text-[18px] text-gray-600">
              <Image src={"/images/No-Products.png"} alt='img' width={200} height={200}/>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-10 mb-10">
              {selectedCategory?.products?.map((p: ProductType ) => (
                <div key={p.id}>
                  <div className='bg-[#FFFFFF66] px-5 pb-4.75 pt-40 rounded-[38px] mb-20'>
                    <div className='relative'>
                  <Link href={`/products/${p.id}`}>
                      <div className='absolute -top-60 -left-3 w-60.75'>
                        <Image src={`https://anorkhulov.uz/${p.image}`} alt={p.name} width={243} height={253} className="rounded-lg object-cover" />
                      </div>
                      <div className='flex items-start justify-between mb-1'>
                        <div>
                          <h3 className="font-bold text-[15px] text-[#000000] mb-1">{p.name}</h3>
                          <p className='text-[15px] text-[#000000]'>{p.description}</p>
                        </div>
                        <div>
                          <IconLike/>
                        </div>
                      </div>
                    </Link>
                      <div className='flex items-end justify-between'>
                        <strong>{p.price}$</strong>
                        <Button type='button' icon={<IconShop/>} onClick={() => handleAddToCart(Number(p.id))} iconPost='left' extraStyle='bg-black p-[13px] rounded-[5px] text-[#ffffff]'/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Gallery/>
    </>
  );
};

export default Menu;