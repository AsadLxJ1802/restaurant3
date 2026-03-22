import Button from "@/components/Button"
import HeroHeader from "@/components/HeroHeader"
import Gallery from "@/components/NewsWrapper"
import { Link } from "@/i18n/navigation"
import { IconArrowRight } from "@/public/icons/page"
import { Kommanda1, Kommanda2, Kommanda3, Kommanda4, Kommanda5, Kommanda6 } from "@/public/images/page"
import { ArrowRight } from "lucide-react"
import Image from "next/image"




const list = [
  {id:"1" , img:Kommanda1 , name:"Александр Петро" , role:"главный повар" },
  {id:"2" , img:Kommanda2 , name:"Александр Петро" , role:"помощник повара" },
  {id:"3" , img:Kommanda3 , name:"Александр Петро" , role:"бургер кинг" },
  {id:"4" , img:Kommanda4 , name:"Жулия Виллиам" , role:"официантка" },
  {id:"5" , img:Kommanda5 , name:"Жулия Виллиам" , role:"официантка" },
  {id:"6" , img:Kommanda6 , name:"Жулия Виллиам" , role:"официантка" },
]

const About = () => {

  

  return (
    <section className='hero-bg2 pb-17.5  '>
        <div className='containers  p-15 hero-bg rounded-[50px] '>
            <HeroHeader extraClass='mb-[114px]'/> 
            <div className='flex items-center mb-7.5 '>
              <Link className='flex items-center opacity-50' href="/">Главная<ArrowRight/></Link>
              <span className='opacity-100 cursor-pointer'>О нас</span>
            </div>
            <h2 className="font-extrabold text-[48px] text-[#000000] mb-10.5">О нас</h2>
            <div className="mb-23.75">
                <p className="font-medium text-[20px] text-[#000000] mb-7">С 1995 года наша миссия в ресторане — питать и вдохновлять каждого члена команды, гостя и сообщество, которому мы служим. Спустя все эти годы эти основные ценности остаются в основе всего, что мы делаем. От нашего меню до наших услуг и способов ведения бизнеса — наш свежий, неожиданный и человечный взгляд отличает нас. Мы называем это Необыкновенной Добротой. И это во всем, что мы делаем.</p>
                <p className="font-medium text-[20px] text-[#000000] ">Имея более 450 ресторанов в 26 штатах и ​​более 8000 членов команды, мы два года подряд были названы Forbes одним из лучших работодателей Америки в области разнообразия. Денверский деловой журнал признал нас одним из лучших мест для работы. Мы считаем, что эти успехи основаны на нашей уникальной и заботливой культуре, благодаря которой каждый, кто входит в наши двери, чувствует себя желанным гостем и оцененным по достоинству.</p>
            </div>
            <div className="flex items-center justify-between mb-26.25">
                <div className="w-141">
                    <h3 className="font-extrabold text-[40px] text-[#000000] mb-11">Наша еда</h3>
                    <p className="text-[20px] font-medium text-[#000000] mb-7">Наша страсть — создавать исключительные впечатления от еды по отличной цене. От традиционных и современных блюд до наших собственных кулинарных творений, таких как фаршированные тортеллони премиум-класса, наши свежеприготовленные рецепты отличаются индивидуальностью, креативностью и ярким вкусом кухонь всего мира.</p>
                    <p className="text-[20px] font-medium text-[#000000] mb-7">От «Пенне Роза» до японской лапши, салата «Мед» и всемирно известных макарон с сыром «Висконсин» — мы используем только самые лучшие и полезные ингредиенты. Каждое блюдо готовится свежим и делается на заказ. Наше богатое меню наполнено яркими, яркими и приятными вкусами.</p>
                    <div className="">
                        <Link href={"/menu"}>
                          <Button type="button" title="Посмотреть меню" icon={<IconArrowRight/>} iconPost="right" extraStyle="p-[20px] flex items-center gap-[10px] text-[18px] font-semibold bg-[#000000] rounded-t-[13px] rounded-l-[13px] text-[#ffffff]"/>
                        </Link>
                    </div>
                </div>
                <div>
                  <Image src={"/images/About-Img.png"}   alt="img" width={503} height={678}/>
                </div>
            </div>
            <div className="flex items-center justify-between mb-14.25">
                <div>
                  <Image src={"/images/About-img2.png"}   alt="img" width={503} height={678}/>
                </div>
                <div className="w-141">
                    <h3 className="font-extrabold text-[40px] text-[#000000] mb-11">Наш путь</h3>
                    <p className="text-[20px] font-medium text-[#000000] mb-7">С самого начала мы взяли на себя обязательство предлагать свежие продукты, свежие ингредиенты и новый взгляд на заботу о наших гостях, членах нашей команды и наших сообществах. Мы искренне верим, что нет ничего, что могло бы объединить людей или сделать мир лучше, чем тарелка лапши.</p>
                    <p className="text-[20px] font-medium text-[#000000]">Продолжая расти, мы реализуем ключевые инициативы во всей нашей компании, чтобы поддержать светлое будущее. В нашем отчете о влиянии рассматриваются некоторые из этих областей, такие как создание меню, наполненного свежими и захватывающими новыми вкусами; активация лучших в отрасли льгот для людей; и некоторые способы лучше заботиться о наших сообществах – и о нашей планете – которую мы называем домом.</p>
                </div>
            </div>
            <div>
              <h2 className="font-bold text-[48px] text-[#000000] text-center mb-12">Наша команда</h2>
              <div>
                <ul className="grid grid-cols-3 gap-31.25">
                  {list.map(item => (
                    <li key={item.id} className="" >
                      <div className="flex items-center justify-center mb-3.5">
                        <div className=" border border-[#000000] rounded-full p-4.25">
                          <Image src={item.img} alt={item.name} width={266} height={266}/>
                        </div>
                      </div>
                      <div className="text-center">
                        <strong className="font-extrabold text-[24px] text-[#000000]">{item.name}</strong>
                        <p className="font-bold text-[20px] text-[#464646]">{item.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
        <Gallery/>
    </section>
  )
}

export default About