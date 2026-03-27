"use client";

import Button from "@/components/Button"
import LanguageSelect from "@/components/LanguageSelect copy"
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { IconEmail,  IconTel, IconUser, SingOut } from "@/public/icons/page"
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { getCart } from "@/service/page";


const Header = () => {
  const path = usePathname();
  const isAuthPage = path.includes("sign-in") || path.includes("sign-up") ||  path.includes("admin");
  const [user,setUser] = useState<string | null>(null)
  const [cartCount,setCartCount] = useState(0)
  const router = useRouter()

  const logout = () => {
      deleteCookie("token");
      deleteCookie("user");
      deleteCookie("role");
    
      setUser(null);
      router.push("/sign-in"); 
    };
 
  useEffect(()=>{

    getCart(1)
    .then(res=>res.json())
    .then(data=>{
      setCartCount(data.data.itemCount)
    })
  
  },[])

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
            <div className="flex items-center gapdecrease-1">
                <div className="relative group flex items-center gap-3.5 cursor-pointer">
                  <LanguageSelect/>
                </div> 
                <div className="relative group inline-block cursor-pointer">
                    {user ? (
                      <Button onClick={logout} type="button" extraStyle="flex font-semibold items-end bg-[#000000]  gap-3 py-2 rounded-[5px] px-2  text-[#FFFFFF] text-[10px]" icon={<IconUser />} iconPost="left" title={user}/>
                    ) : (
                      <Link href="/sign-in">
                        <Button type="button" extraStyle="flex font-semibold items-end gap-3 py-2  bg-[#000000] rounded-[5px] px-2  text-[#FFFFFF] text-[10px]" icon={<IconUser />} iconPost="left" title="Вход в аккаунт"/>
                      </Link>
                    )}

                    {user && (
                      <div className="absolute -bottom-10 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <SingOut />
                      </div>
                    )}
                </div>
              </div>
        </div>
    </header>
  )
}

export default Header