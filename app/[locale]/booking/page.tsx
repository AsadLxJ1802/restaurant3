"use client"

import Button from '@/components/Button'
import HeroHeader from '@/components/HeroHeader'
import Input from '@/components/Input'
import Select from '@/components/UserSelect'
import Gallery from '@/modules/gallery/page'
import { ArrowRight, BronAddressIcons, BronEmailIcon, BronTelIcons } from '@/public/icons/page'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Booking = () => {
      const [date, setDate] = useState("text")
      const [time, setTime] = useState("text")

      const List = [
        {id:"1" , icons:BronEmailIcon , title:"Напишите нам" , address:"info@bmgsoft.com" , address1:"t.me/bmgsoft.com"},
        {id:"2" , icons:BronTelIcons , title:"Позвоните нам" , address: "+9998908767888",  address1:"+9989865332322"},
        {id:"3" , icons:BronAddressIcons , title:"Посетите нас" , address:"Узбекистан, Ташкент" ,address1:"Улица, 24"},
      ]
  return (
  <>
    <section className='hero-bg2 mb-13.75  '>
        <div className='containers  p-15 hero-bg rounded-[50px] '>
            <HeroHeader extraClass='mb-[107px]'/>
            <div className='flex items-center mb-7.5 '>
              <Link className='flex items-center opacity-50' href="/">Главная<ArrowRight/></Link>
              <span className='opacity-100 cursor-pointer'>Бронирование</span>
            </div>
            <div className='mb-17.75 relative'>
                  <Image className='absolute top-45 -right-40' src={"/images/New-img.png"} alt='img' width={258} height={258}/>
                  <Image className='absolute top-140 -left-60' src={"/images/New-img2.png"} alt='img' width={258} height={258}/>
              <h2 className='text-center mb-12.5 font-extrabold text-[48px] text-[#000000]'>Бронирование</h2>
              <div className='flex items-center justify-between'>
                <div className='w-136'>
                    <h3 className='font-bold text-[32px] mb-9' >Часы работы</h3>
                    <div className='flex items-center justify-between mb-6 border-b '>
                        <strong className='font-medium text-[20px]'>Понедельник</strong>
                        <p className='font-medium text-[20px]'>10:00-23:00</p>
                    </div>
                    <div className='flex items-center justify-between mb-6 border-b '>
                        <strong className='font-medium text-[20px]'>Вторник</strong>
                        <p className='font-medium text-[20px]'>10:00-23:00</p>
                    </div>
                    <div className='flex items-center justify-between mb-6 border-b '>
                        <strong className='font-medium text-[20px]'>Среда</strong>
                        <p className='font-medium text-[20px]'>10:00-23:00</p>
                    </div>
                    <div className='flex items-center justify-between mb-6 border-b '>
                        <strong className='font-medium text-[20px]'>ПонЧетвергедельник</strong>
                        <p className='font-medium text-[20px]'>10:00-23:00</p>
                    </div>
                    <div className='flex items-center justify-between mb-6 border-b '>
                        <strong className='font-medium text-[20px]'>Пятница</strong>
                        <p className='font-medium text-[20px]'>10:00-23:00</p>
                    </div>
                    <div className='flex items-center justify-between mb-6 border-b '>
                        <strong className='font-medium text-[20px]'>Воскресенье</strong>
                        <p className='font-medium text-[20px]'>11:00-23:00</p>
                    </div>
                </div>
                <Image className='' src={"/images/Booking-img-bron.png"} alt='bron img' width={503} height={676}/>
              </div>
            </div>  
            <div >
                <h2 className='text-center mb-13.5 font-extrabold text-[48px] '>Хотите забронировать стол?</h2>
                <div className='flex justify-center mx-auto relative '>
                     <Image className='absolute top-90 -left-55' src={"/images/New-img4.png"} alt='img' width={258} height={258}/>
                     <Image className='absolute top-90 -right-60' src={"/images/New-img3.png"} alt='img' width={258} height={258}/>
                    <form className='w-225.5 `' > 
                        <Image className='absolute top-15  left-100' src={"/images/Booking-form-bg.png"} alt='img' width={258} height={258}/>
                        <Input extraStyle="mb-[20px] w-full  text-[12px] text-[#585858]" title="Ваш номер" type="tel"/>
                        <Select extraStyle="mb-[20px] w-full text-[12px] text-[#585858]" title="Ha сколько человек?"/>
                        <div className="flex flex-col  ">
                          <Input extraStyle="mb-[20px] w-full text-[12px] text-[#585858]" title="Выберите дату" type={date} onFocus={() => setDate("date")} onBlur={(e) => { setDate("text")}}/>
                          <Input extraStyle="mb-[20px] w-full text-[12px] text-[#585858]" title="Выберите время"  type={time} onFocus={() => setTime("time")} onBlur={(e) => { setTime("text")}}/>
                        </div>
                        <label> 
                          <Select extraStyle="mb-[8px] w-full text-[12px] text-[#585858]" title="Выберите место"/>
                          <a className="text-[13px] w-full text-[#06004C] " href="#">Выбрать места на карте </a>
                        </label>
                        <div className='flex justify-end'>
                          <Button type="submit" title="Забронировать" extraStyle="py-[18px]  mt-10.25 px-[24px] rounded-[13px] bg-[#000000] text-white"/>
                        </div>
                    </form>  
                </div>
            </div>
            <div >
                <h3 className='font-extrabold text-[48px] text-center text-[#000000] mb-20'>Связаться с нами</h3>
                <ul className='flex items-center justify-between w-225.5 mx-auto'>
                  {List.map(item => <li className='text-center' key={item.id}>
                      <div className='flex items-center justify-center mb-6.75'>
                        <item.icons/>
                      </div>
                      <strong className='mb-0.5 font-semibold text-[27px] '>{item.title}</strong>
                      <p className='text-[16px]' >{item.address}</p>
                      <p  className='text-[16px]'>{item.address1}</p>
                  </li>)}
                </ul>
            </div>
        </div>
    </section>
    <Gallery/>
    </>
  )
}

export default Booking