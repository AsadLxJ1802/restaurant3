"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { BookingIcon } from "@/public/icons/page"
import { cerateBron } from "@/service/page"
import { SubmitEvent, useState } from "react"

const Booking = () => {
  const [date, setDate] = useState("text")
  const [time, setTime] = useState("text")

  
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
  
    const form = e.currentTarget
  
    const data = {
      email: (form.email as HTMLInputElement).value,
      guestCount: Number((form.guestCount as HTMLInputElement).value),
      reservationDate: (form.reservationDate as HTMLInputElement).value,
      reservationTime: (form.reservationTime as HTMLInputElement).value,
      tableId: Number((form.tableId as HTMLInputElement).value),
    }
  
    console.log(data)
  
    cerateBron(data)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        alert("Yuborildi")
      })
      .catch((err) => {
        console.log(err)
        alert("Signup error")
      })
  }
    

  return (
    <section className="py-16.75 booking-bg-img">
      <div className="containers relative">
        <div className="booking-bg w-118.75 px-13.5 pb-16.25 pt-25 rounded-[31px]">
          <div className="bg-ic p-2 rounded-full absolute bottom-150">
            <div className="relative bg-black p-7 rounded-full">
              <BookingIcon />
            </div>
          </div>
          <h2 className="text-[32px] font-bold text-[#000000] mb-6.25">
            Забронировать стол
          </h2>
          <form onSubmit={handleSubmit}>
            <Input name="email" extraStyle="mb-[20px] text-[12px] text-[#585858]" title="Ваш номер" type="text"/>
            <Input name="guestCount" extraStyle="mb-[20px] text-[12px] text-[#585858]" title="На сколько человек?"/>
            <div className="flex flex-col">
              <Input name="reservationDate" extraStyle="mb-[20px] text-[12px] text-[#585858]" title="Выберите дату" type={date} onFocus={() => setDate("date")} onBlur={() => setDate("text")} />
              <Input name="reservationTime" extraStyle="mb-[20px] text-[12px] text-[#585858]" title="Выберите время" type={time} onFocus={() => setTime("time")} onBlur={() => setTime("text")}/>
            </div>
            <label> <Input   name="tableId"   extraStyle="mb-[8px] text-[12px] text-[#585858]"   title="Выберите место" />
              <a className="text-[13px] text-[#06004C]" href="#">
                Выбрать места на карте
              </a>
            </label>
            <Button type="submit" title="Забронировать" extraStyle="py-[18px] mt-10.25 px-[24px] rounded-[13px] bg-black text-white"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking