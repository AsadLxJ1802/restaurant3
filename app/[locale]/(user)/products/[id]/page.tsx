"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { addCartItem, getAll } from "@/service/page";
import { useParams } from "next/navigation";
import HeroHeader from "@/components/HeroHeader";
import { Link } from "@/i18n/navigation";
import { ArrowRight, RetingIcon } from "@/public/icons/page";
import Button from "@/components/Button";

type ProductType = {
  id: number | string;
  name: string;
  image: string;
  price: string;
  description: string;
  rating: number;
  reviewsCount: number;
  quantity?: number;
};



const ProductDetailClient = () => {
  const params = useParams();
  const id = params?.id;

    const handleAddToCart =  (productId: number) => {
       addCartItem({
          userId: 1,
          productId,
          quantity: 1
        });
    
    };

  const [product, setProduct] = useState<ProductType | null>(null);

  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    if (!id) return;

    getAll("products")
      .then(res => res.json())
      .then(data => {
        const prod = data.data.find((p: ProductType) => String(p.id) === String(id));
        setProduct(prod || null);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Product not found</p>;

  return (
    <section className='hero-bg2 pb-17.5'>
      <div className='containers p-15 hero-bg rounded-[50px]'>
        <HeroHeader extraClass='mb-[114px]'/> 
        <div className='flex items-center mb-7.5'>
          <Link className='flex items-center opacity-50' href="/">Главная<ArrowRight/></Link>
          <Link href={"/menu"} className="flex items-center opacity-50 cursor-pointer">Menu<ArrowRight/></Link>
          <span className='opacity-100 cursor-pointer'>{product.name}</span>
        </div>
        <h2 className="text-center text-[48px] text-[#000000] mb-8.5 font-semiboldbold">{product.name}</h2>
        <div className="flex  justify-between mt-6">
          <Image src={`https://anorkhulov.uz/${product.image}`} alt={product.name} width={500} height={400} />
          <div className="ml-8 w-140 flex-1">
            <p className="text-lg  text-[#000000] text-[40px] font-bold mb-3.75">{product.description}</p>
            <div className="flex items-center gap-4 mt-3">
              <strong className=" text-[32px] text-[#000000] font-bold ">{product.price}$</strong>
              <span className="flex items-center gap-1  text-[24px] text-[#000000] font-medium "><RetingIcon/><RetingIcon/><RetingIcon/><RetingIcon/><RetingIcon/> {product.rating}</span>
              <Link href={"#"} className="text-[#6D6D6D] text-[24px] font-medium">(Смотреть отзывы)</Link>
            </div>
            <strong className="font-bold text-[32px] text-[#000000] mb-6.5">Описание:</strong>
              <p className="w-145  text-[24px] text-[#000000] mb-12.5">Эти двусторонние шелковые брюки с запахом икат сочетают в себе универсальность двух потрясающих рисунков ткани. Эти брюки, изготовленные из очаровательной ткани икат, позволяют вам выбрать предпочтительный узор, что делает их универсальным дополнением к вашему гардеробу.</p>
              <div className="flex items-center gap-10 ">
                <div className="mt-4 flex items-center bg-[#FFFFFF66] gap-2 rounded-[10px]">
                  <Button type="button" onClick={decrease} title="−" extraStyle="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 border-none text-xl font-bold" />
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <Button  type="button" onClick={increase} title="+" extraStyle="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 border-none text-xl font-bold" />
                </div>
                <Button type="button" title={`В корзину`} extraStyle="mt-4 bg-black text-white px-4 py-2 rounded-lg" onClick={() => handleAddToCart(Number(product.id))}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailClient;