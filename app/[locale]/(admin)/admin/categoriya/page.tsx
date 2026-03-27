"use client"

import { getAll } from "@/service/page";
import { useEffect, useState } from "react";

type CategoryType = {
  id: number | string;
  name: string;
  products:[]
};

const Categoriya = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);


  useEffect(() => {
      getAll("categories")
        .then(res => res.json())
        .then(data => {
          const categoryList = data.data || [];
          setCategories(categoryList);
        })
        .catch(err => console.error(err))
    }, []);

  return (
    <div className="min-h-screen admin-bg p-5">
        <div>
          <h1 className="font-extrabold text-[35px] mb-10 text-white">Categoriya</h1>
          <ul className="flex items-center flex-wrap gap-8">
            {categories.map(item => (
              <li className="backdrop-brightness-50   border rounded-2xl border-black/30 duration-300 hover:scale-103 transition-transform  hover:shadow-[0_0_10px_3px] text-white p-5" key={item.id}>
                  <div>{item.name}</div>
                  <div><span>Products:</span> {item.products.length}</div>
              </li>
            ))}
          </ul>
        </div>

    </div>
  )
}

export default Categoriya