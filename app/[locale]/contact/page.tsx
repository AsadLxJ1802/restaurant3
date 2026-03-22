import Button from "@/components/Button"
import HeroHeader from "@/components/HeroHeader"
import Input from "@/components/Input"
import { Link } from "@/i18n/navigation"
import { ArrowRight, BronAddressIcons, BronEmailIcon, BronTelIcons } from "@/public/icons/page"





const Contact = () => {


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
            <div className="mb-19" >
                <h3 className='font-extrabold text-[48px] text-center text-[#000000] mb-20'>Контакты</h3>
                <ul className='flex items-center justify-between w-225.5 mx-auto'>
                  {List.map(item => <li className='text-center' key={item.id}>
                      <div className='flex items-center justify-center mb-6.75'>
                        <item.icons/>
                      </div>
                      <strong className='mb-0.5 font-semibold text-[27px] '>{item.title}</strong>
                      <p className='text-[16px]' >{item.address}</p>
                      <p  className='text-[16px] '>{item.address1}</p>
                  </li>)}
                </ul>
            </div>
            <div>
                <h2 className="font-extrabold text-[48px] text-[#000000] text-center mb-15.25 ">Написать нам</h2>
                  <form className="w-201 mx-auto">
                      <Input extraStyle="mb-[20px] w-full  text-[12px] text-[#585858] border pl-3  text-[18px] text-[#585858]  border-[#585858]" title="Ваше имя" type="text"/>
                      <Input extraStyle="mb-[20px] w-full  text-[12px] text-[#585858] border pl-3  text-[18px] text-[#585858]  border-[#585858]" title="Ваш E-mail" type="email"/>
                      <Input extraStyle="mb-[20px] w-full  text-[12px] text-[#585858] border pl-3  text-[18px] text-[#585858]  border-[#585858]" title="Ваш номер телефона" type="tel"/>
                      <Input extraStyle="mb-[20px] w-full  text-[12px] text-[#585858] border pl-3  text-[18px] text-[#585858]  border-[#585858]" title="Ваше сообщение" type="text"/>
                      <div className='flex justify-end'>
                          <Button type="submit" title="Забронировать" extraStyle="py-[18px]  mt-10.25 px-[24px] bg-black rounded-[13px] text-white"/>
                      </div>
                  </form>
            </div>
            
        </div>
    </section>
  )
}

export default Contact