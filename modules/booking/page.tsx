"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Select from "@/components/UserSelect"
import { usePathname } from "@/i18n/navigation"
import { BookingIcon } from "@/public/icons/page"
import { useState } from "react"


const Booking = () => {
  const [date, setDate] = useState("text")
  const [time, setTime] = useState("text")
  const path = usePathname();
  const isAuthPage = path.includes("sign-in") || path.includes("sign-up");
  console.log(path);
  

  return (
    <section className={` py-16.75 booking-bg-img ${isAuthPage? "hidden" : ""}`}> 
      <div className="containers relative ">
          <div className=" booking-bg w-118.75 px-13.5 pb-16.25 pt-25 rounded-[31px]" >
            <div className=" bg-ic p-2   rounded-full absolute bottom-150   ">
              <div className="relative  bg-black p-7 rounded-full">
                <BookingIcon/>
              </div>
            </div>
              <h2 className="text-[32px] font-bold text-[#000000] mb-6.25">Забронировать стол</h2>
              <form> 
                <Input extraStyle="mb-[20px]  text-[12px] text-[#585858]" title="Ваш номер" type="tel"/>
                <Select extraStyle="mb-[20px] text-[12px] text-[#585858]" title="На сколько человек?"/>
                <div className="flex flex-col ">
                  <Input extraStyle="mb-[20px] text-[12px] text-[#585858]" title="Выберите дату" type={date} onFocus={() => setDate("date")} onBlur={(e) => { setDate("text")}}/>
                  <Input extraStyle="mb-[20px] text-[12px] text-[#585858]" title="Выберите время"  type={time} onFocus={() => setTime("time")} onBlur={(e) => { setTime("text")}}/>
                </div>
                <label> 
                  <Select extraStyle="mb-[8px] text-[12px] text-[#585858]" title="Выберите место"/>
                  <a className="text-[13px] text-[#06004C] " href="#">Выбрать места на карте </a>
                </label>
                <div>
                  <Button type="submit" title="Забронировать" extraStyle="py-[18px] mt-10.25 px-[24px] rounded-[13px] bg-[#000000] text-white"/>
                </div>
              </form>
          </div>
      </div>
    </section>
  )
}

export default Booking