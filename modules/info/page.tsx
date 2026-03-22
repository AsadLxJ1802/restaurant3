import { CoffeIcon, DostafcaIcon, HomeIcon, PizzaIcon, ShefIcon, UserIcon } from "@/public/icons/page"


const list = [
    {id:"1" , icon:CoffeIcon , title:"Качественные продукты" ,text:"Входные билеты в музеи, для посещения достопримечательностей, памятников"},
    {id:"2" , icon:DostafcaIcon, title:"Быстрая доставка" ,text:"Входные билеты в музеи, для посещения достопримечательностей, памятников"},
    {id:"3" , icon: PizzaIcon, title:"Вкусные рецепты" ,text:"Входные билеты в музеи, для посещения достопримечательностей, памятников"},
    {id:"4" , icon:HomeIcon , title:"Уютная атмосфера" ,text:"Входные билеты в музеи, для посещения достопримечательностей, памятников"},
    {id:"5" , icon:ShefIcon , title:"Опытные повара" ,text:"Входные билеты в музеи, для посещения достопримечательностей, памятников"},
    {id:"6" , icon:UserIcon , title:"Обслуживания" ,text:"Входные билеты в музеи, для посещения достопримечательностей, памятников"},
]
const Info = () => {
  return (
    <section className="pb-17.75">
        <div className='containers '>
            <h2 className="text-center text-[48px] font-extrabold mb-19.25">Почему именно мы?</h2>
            <ul className="grid grid-cols-3 items-center gap-20.5 ">
               {list.map(item => 
               <li key={item.id} className="w-93.75">
                    <item.icon/>
                    <strong className="mt-2.75  text-[32px] font-semibold">{item.title}</strong>
                    <p className="text-[16px] mt-2.5" >{item.text}</p>
               </li>)} 
            </ul>
        </div>
    </section>
  )
}

export default Info