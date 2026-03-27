"use client"
import { usePathname } from "@/i18n/navigation";
import { Fecebook, Intagram, Telegram, Watsap } from "@/public/icons/page"
import Image from "next/image"

const Footer = () => {
  const path = usePathname();
  const isAuthPage = path.includes("sign-in") || path.includes("sign-up") ||  path.includes("admin");
  
  return (
    <footer className={` pb-11.25 footer-bg py-21.25 ${isAuthPage? "hidden" : ""}`}>
          <div className="containers">
              <ul className="flex items-start justify-between">
                  <li>
                      <a href="/"><Image src={"/images/LOGO.png"} alt="Logo" width={136} height={71}/></a>
                      <div className="flex items-center gap-2.5 mt-4">
                          <a href="/"><Telegram/></a>
                          <a href="/"><Watsap/></a>
                          <a href="/"><Fecebook/></a>
                          <a href="/"><Intagram/></a>
                      </div>
                  </li>
                  <li>
                    <strong className="text-[25px] text-[#000000]">Наши услуги</strong>
                    <p className="mt-4 mb-2 text-[16px] text-[#080808]">Цены</p>
                    <p className="mb-2 text-[16px] text-[#080808]">Отслеживание</p>
                    <p className="mb-2 text-[16px] text-[#080808]">Cообщить об ошибке</p>
                    <p className="mb-2 text-[16px] text-[#080808]">Условия услуг</p>
                  </li>
                  <li>
                    <strong className="text-[25px] text-[#000000]">Наша компания</strong>
                    <p className="mt-4 mb-2 text-[16px] text-[#080808]">Отчетность</p>
                    <p className="mb-2 text-[16px] text-[#080808]">Cвяжитесь с нами</p>
                    <p className="mb-2 text-[16px] text-[#080808]">Cообщить об ошибке</p>
                    <p className="mb-2 text-[16px] text-[#080808]">Управление</p>
                  </li>
                  <li>
                    <strong className="text-[25px] text-[#000000]">Адрес</strong>
                    <p className="mt-4 mb-2 text-[16px] text-[#080808]">Узбекистан, Ташкент Улица, 24</p>
                    <div className="flex flex-col ">
                      <a className="mb-2 text-[16px] text-[#080808]" href="tel:+99894848844848">+99894848844848</a>
                      <a className="mb-2 text-[16px] text-[#080808]" href="email:info@bmgsoft.com">info@bmgsoft.com</a>
                    </div>
                  </li>
              </ul>
          </div>
    </footer>
  )
}

export default Footer