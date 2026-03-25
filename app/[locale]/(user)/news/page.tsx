"use client";


import HeroHeader from '@/components/HeroHeader'
import { ArrowRight } from '@/public/icons/page'
import { getAll } from '@/service/page'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


type NewType = {
  author:{
      avatar:string,
      firstName:string,
  }
  description:string,
  image:string,
}

type GalleryType = {
  image:string
}

const News = () => {
  const [news, setNews] = useState<NewType[]>([]);
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  
useEffect(() => {
    getAll("news")
      .then(res => res.json())
      .then(data => {
        const newsList = data.data || [];
        setNews(newsList);
      })
      .catch(err => console.error(err));
  }, []);


  useEffect(() => {
    getAll("galleries")
      .then(res => res.json())
      .then(data => {
        const galleryList = data.data || [];
        setGallery(galleryList);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className='hero-bg2 pb-17.5  '>
        <div className='containers  relative p-15 hero-bg rounded-[50px] '>
              <Image className='absolute top-80 -right-20' src={"/images/New-img.png"} alt='img' width={258} height={258}/>
              <Image className='absolute top-230 left-60' src={"/images/New-img2.png"} alt='img' width={258} height={258}/>

            <HeroHeader extraClass='mb-[114px]'/> 
            <div className='flex items-center mb-7.5 '>
              <Link className='flex items-center opacity-50' href="/">Главная<ArrowRight/></Link>
              <span className='opacity-100 cursor-pointer'>Новости</span>
            </div>
            <div className='mb-13.5'>
              <h2 className='text-center font-extrabold text-[48px] '>Новости</h2>
                <ul className="grid grid-cols-3  gap-15 mb-17.75">
                    {news.map((item, index) => (
                      <li key={index} className="gallery-bg pt-25 mt-50 pb-4.75 pl-7 pr-2 rounded-[30px] relative">
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
                    <div className='flex justify-center'>
                      <span className=' border rounded-full w-7 bg-[#FFFFFF66] text-center'>1</span>
                    </div>
            </div>
            <div>
              <h3 className='font-extrabold mb-18.75 text-[48px] text-center text-[#000000]'>Галерея</h3>
              <ul className='flex relative items-center justify-between flex-wrap gap-2 mb-5'>
              <Image className='absolute top-40 -left-57' src={"/images/New-img4.png"} alt='img' width={258} height={258}/>
              <Image className='absolute top-40 -right-60' src={"/images/New-img3.png"} alt='img' width={258} height={258}/>

                {gallery.map((item , index) => (
                  <li key={index}>
                    <Image src={`https://anorkhulov.uz/${item.image}`} alt="image" width={274} height={185}/>
                  </li>
                ))}
                </ul>
                <div className='flex justify-center'>
                  <span className=' border rounded-full w-7 bg-[#FFFFFF66] text-center'>1</span>
                </div>
              </div>
        </div>
    </section>
  )
}

export default News