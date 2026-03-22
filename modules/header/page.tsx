"use client";

import Button from "@/components/Button"
import LanguageSelect from "@/components/LanguageSelect copy"
import { Link, usePathname } from "@/i18n/navigation";
import { IconEmail,  IconTel, IconUser, SingOut } from "@/public/icons/page"
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";


const Header = () => {
  const path = usePathname();
  const isAuthPage = path.includes("sign-in") || path.includes("sign-up");
  const [user,setUser] = useState<string | null>(null)

 

  useEffect(() => {
    const cookieUser = getCookie("user")
    if(cookieUser){
      setUser(cookieUser.toString())
    }
  },[])

  
  return (
    <header className={`pt-3 pb-11.25 ${isAuthPage? "hidden" : ""}`}>
        <div className='containers pt-3.75 pb-11.5 flex items-center justify-between'>
            <div className="flex items-center gap-6.75">
                <a className="flex items-center gap-3  text-[16px] text-[$000000]" href="tel:+99890758383833"> 
                    <IconTel/>
                 +998(90)758383833</a>
                 <a className="flex items-center gap-3  text-[16px] text-[$000000]" href="email:info@bmgsoft.com">
                  <IconEmail/>
                  info@bmgsoft.com
                 </a>
            </div>
            <div className="flex items-center gap-1">
                <div className="relative group flex items-center gap-3.5 cursor-pointer">
                  <LanguageSelect/>
                </div> 
                <div className="relative group inline-block cursor-pointer">
                    <Link href={user ? "/" : "/sign-in"}>
                      <Button type="button" extraStyle="flex font-semibold items-end gap-3 py-2  rounded-[5px] px-2 bg-[#000000] text-[#FFFFFF] text-[10px]" icon={<IconUser />} iconPost="left" title={user ? user : "Вход в аккаунт"}/>
                    </Link>
                    {user && (<Link href={"/sign-in"} className={`  absolute -bottom-10 right-0  text-[#ffad2d] bg-black text-[10px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}><SingOut/></Link>)}
                </div>
              </div>
        </div>
    </header>
  )
}

export default Header