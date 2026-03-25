import Button from "@/components/Button"
import HeroHeader from "@/components/HeroHeader"
import Input from "@/components/Input"
import { Link } from "@/i18n/navigation"
import { ArrowRight, BronAddressIcons, BronEmailIcon, BronTelIcons } from "@/public/icons/page"
import Image from "next/image"


const Registration = () => {
const List = [
        {id:"1" , icons:BronEmailIcon , title:"Напишите нам" , address:"info@bmgsoft.com" , address1:"t.me/bmgsoft.com"},
        {id:"2" , icons:BronTelIcons , title:"Позвоните нам" , address: "+9998908767888",  address1:"+9989865332322"},
        {id:"3" , icons:BronAddressIcons , title:"Посетите нас" , address:"Узбекистан, Ташкент" ,address1:"Улица, 24"},
      ]
  

  return (
    <section className='hero-bg2 pb-17.5  '>
        <div className='containers  p-15 hero-bg rounded-[50px] '>
            <HeroHeader extraClass='mb-[114px]'/> 
            <div className='flex items-center mb-7.5 '>
              <Link className='flex items-center opacity-50' href="/">Главная<ArrowRight/></Link>
              <span className='opacity-100 cursor-pointer'>Contact</span>
            </div>            
            <div>
              <h2>Оформление заказа</h2>
              <div>
                  <div>
                     <h3>Способ получения:</h3>
                    <div className="relative">
                      <div className="absolute  w-5 h-5 border rounded-full  ">
                          <div className="w-5 h-5 bg-black "></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Registration