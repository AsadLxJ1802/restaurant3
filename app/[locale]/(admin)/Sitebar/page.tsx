"use client";

import { Link, usePathname } from "@/i18n/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const list = [
    { id: "1", href: "users", title: "User" },
    { id: "2", href: "menuadmin", title: "Menu" },
    { id: "3", href: "newadmin", title: "New" },
    { id: "4", href: "categoriya", title: "Categoriya" },
    { id: "5", href: "reservation", title: "Reservation" },
    { id: "6", href: "contact", title: "Contact" },
  ];

  return (
    <div className="h-screen sticky top-0 w-[22%] admin-bg shadow-2xl border-r bg-gray-800">
      <div className="border-b p-3  pb-5.5">
        <h1 className="text-center text-white font-bold text-[30px]">LOGO</h1>
      </div>

      <div className="p-5">
        {list.map((item) => {
            const isActive = pathname === `/admin/${item.href}`;
          return (
              <Link key={item.id} className={`group-hover:text-amber-400 ${isActive ? "text-amber-400 font-semibold" : "text-white"}`} href={`/admin/${item.href}`} >
                <nav  className={`mb-1 rounded-[10px] p-2 duration-300 ${isActive ? "bg-slate-400/40" : "group hover:bg-slate-300/10"}`}>
                  {item.title}
                </nav>
              </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;