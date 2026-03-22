"use client"
import { BookingArrowbottomIcon } from "@/public/icons/page"
import { useState } from "react"

type SelectType = {
  extraStyle?: string
  title:string
}

const list = [1,2,3,4,5,6,7,8,9,10]

function Select({ extraStyle,title }: SelectType) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<number | null>(null)

  return (
    <div className={`relative duration-300 w-90 ${extraStyle}`}>
      <div onClick={() => setOpen(!open)} className="py-3  border-b cursor-pointer flex justify-between items-center">
        {value !== null ? value :  <span className="text-black/50">{title}</span>}
        <span><BookingArrowbottomIcon/></span>
      </div>
      {open && (<div className="absolute mt-1 w-15 bg-black/30 border shadow max-h-40 overflow-y-auto">
          {list.map((item) => (<div key={item} onClick={() => { setValue(item) ,setOpen(false)}}className="px-4 py-2  hover:bg-gray-100  cursor-pointer">{item}</div>))}
        </div>
      )}
    </div>
  )
}

export default Select