"use client"

import { getAll } from "@/service/page";
import Image from "next/image";
import { useEffect, useState } from "react";

type NewType = {
  id:number
  author:{
      avatar:string,
      firstName:string,
  }
  description:string,
  image:string,
}

type GalleryType = {
  id:number,
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
    <div className='admin-bg p-5 min-h-screen'>
        <div>
          <div className="mb-8 border-b-2  ">
          <h2 className="font-extrabold text-[35px] mb-10 text-white">News</h2>
          <ul className="grid grid-cols-4  gap-5 mb-10 ">
            {news.map(item => (
              <li className="backdrop-brightness-50   border rounded-2xl border-black/30 duration-300 hover:scale-103 transition-transform  hover:shadow-[0_0_10px_3px] text-white p-5" key={item.id}>
                    <strong>#{item.id}</strong>
                  <div className="mt-2 mb-2">
                      <Image src={`https://anorkhulov.uz/${item.image}`} alt={item.author.firstName} width={200} height={200}/>
                  </div>
                  <div>
                    <p className="font-bold text-[15px] mb-3">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src={`https://anorkhulov.uz/${item.author.avatar}`} width={30} height={30} alt={item.author.firstName}/>
                    <strong>{item.author.firstName}</strong>
                  </div>
              </li>
            ))}
          </ul>
          </div>
          <h3 className="font-extrabold text-[35px] mb-10 text-white">Gallarya</h3>
          <ul className="grid grid-cols-4  gap-5 mb-10">
            {gallery.map(item => (
              <li className="backdrop-brightness-50   border rounded-2xl border-black/30 duration-300 hover:scale-103 transition-transform  hover:shadow-[0_0_10px_3px] text-white p-5" key={item.id}>
                <strong>#{item.id}</strong>
                  <div>
                      <Image  src={`https://anorkhulov.uz/${item.image}`} width={400} height={200} alt="Img"/>
                  </div>
              </li>
            ))}
          </ul>

        </div>
        <div>

        </div>
    </div>
  )
}

export default News