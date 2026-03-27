"use client";

import Button from "@/components/Button";
import LanguageSelect from "@/components/LanguageSelect copy";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { IconUser, SingOut } from "@/public/icons/page";
import { getCart } from "@/service/page";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const Header = () => {
  const path = usePathname();
  const [user, setUser] = useState<string | null>(null);
  const [, setCartCount] = useState(0);

  const router = useRouter();

  const logout = () => {
    deleteCookie("token");
    deleteCookie("user");
    deleteCookie("role");
  
    setUser(null);
    router.push("/sign-in"); 
  };

 
  useEffect(() => {
    getCart(1)
      .then((res) => res.json())
      .then((data) => {
        setCartCount(data.data.itemCount);
      });
  }, []);

  useEffect(() => {
    const cookieUser = getCookie("user");
    if (cookieUser) {
      setUser(cookieUser.toString());
    }
  }, []);

  return (
      <div className="p-5 flex items-center border-b admin-bg justify-between bg-[#2D2D2D] sticky top-0 z-50">
        <div></div>
        
        <div className="flex items-center gap-3.5">
          <LanguageSelect extraStyle="border text-white rounded-lg" />
        
          <div className="relative group inline-block cursor-pointer">
              {user && (
              <>
                  <Button type="button" extraStyle="flex font-semibold items-end gap-3 py-2 rounded-[5px] px-2 border-none text-[#FFFFFF] text-[15px]" icon={<IconUser />} iconPost="left" title={user}/>
                  <div onClick={logout} className="absolute -bottom-10 right-0 opacity-0 group-hover:opacity-100 hover:text-amber-400 border-2 p-1 rounded-full bg-black text-white transition-opacity duration-300">
                    <SingOut />
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
  );
};

export default Header;