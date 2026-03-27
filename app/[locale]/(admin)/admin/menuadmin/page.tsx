"use client";

import { SubmitEvent, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { createMenu, deleteProduct, getAll } from "@/service/page"; 
import { TrashIcon } from "@/public/icons/page";
import { setCookie } from "cookies-next";
import Input from "@/components/Input";

type ProductType = {
  id: number | string;
  name: string;
  image: string;
  price: number;
  description: string;
};

const Menu = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getAll("products");
      const data = await res.json();
      setProducts(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteClick = (product: ProductType) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedProduct) return;
    await deleteProduct(selectedProduct.id);
    setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  }

 

  function handleSubmit(e:SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
   
  
    const data = {
      name:e.target.namee.value,
      description:e.target.description.value,
      price:e.target.price.value,
      image:e.target.image.value,
    };
  
    createMenu(data)
      .then((res) => res.json())
      .then((data) => {
        setCookie("token", data.accessToken);
        setIsCreateModalOpen(false);
      });
  }

  return (
    <div className="p-6 min-h-screen admin-bg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">Products</h1>
        <Button onClick={() => setIsCreateModalOpen(true)} type="button" title="Create" extraStyle="p-2 rounded-xl border-none bg-green-600"/>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {products.map((item) => (
          <div key={item.id} className="backdrop-brightness-50 p-5 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
            <strong className="text-white">#{item.id}</strong>
            <div className="flex justify-center w-full h-56">
              <Image src={`https://anorkhulov.uz/${item.image}`} alt={item.name} width={200} height={200} className="object-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-xl text-white mb-2 drop-shadow-md">{item.name}</h2>
                  <p className="text-white/90 text-sm mb-3 line-clamp-3">{item.description}</p>
                </div>
                <p className="font-semibold text-white text-lg">${item.price}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <Button onClick={() => handleDeleteClick(item)} type="button" icon={<TrashIcon/>} iconPost="left" extraStyle="bg-red-600 text-white p-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <h2 className="text-lg font-bold mb-3">Are you sure?</h2>
        <p className="mb-4 text-gray-700">
          Do you really want to delete "{selectedProduct?.name}"? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-2">
          <Button onClick={() => setIsDeleteModalOpen(false)} type="button" title="Cancel" extraStyle="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition" />
          <Button onClick={handleConfirmDelete} type="button" title="Delete" extraStyle="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"/>
        </div>
      </Modal>

      <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)}>
        <div className="placeholder:text-white">

          <h2 className="text-lg font-bold mb-4 ">Create Product</h2>
            <form onSubmit={handleSubmit}>
              <Input name="namee" title="Name"   extraStyle=" p-2 w-full mb-2"/>
              <Input name="price" type="number" title="Price"   extraStyle=" p-2 w-full mb-2"/>
              <Input name="description" title="Description"   extraStyle=" p-2 w-full mb-2"/>
              <Input type="text" name="image" title="Imgae" extraStyle=" p-2 w-full mb-4"/>
              <div className="flex justify-end gap-2">
                <Button onClick={() => setIsCreateModalOpen(false)} type="button" title="Cancel" extraStyle="bg-white text-black  rounded-xl  px-4 py-2 rounded"/>
                <Button type="submit" title="Create" extraStyle="bg-green-600 text-white px-4 py-2 rounded-xl"/>
              </div>
            </form>
        </div>
      </Modal>
    </div>
  );
};

export default Menu;