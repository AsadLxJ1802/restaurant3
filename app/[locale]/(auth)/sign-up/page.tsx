"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link, useRouter } from "@/i18n/navigation";
import { BookingIcon } from "@/public/icons/page";
import { SignUp } from "@/service/page";
import { setCookie } from "cookies-next";
import { SubmitEvent } from "react";



const Register = () => {
  const router = useRouter();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    SignUp(data)
      .then((res) => res.json())
      .then((data) => {
        setCookie("token", data.data.accessToken);
        setCookie("user", `${data.data.user.firstName} ${data.data.user.lastName}`);
        router.push("/sign-in");
      })
      .catch(() => {
        alert("Signup error");
      });
  }

  return (
    <div className="auth-bg">
      <div className="containers absalute top-0 right-0 left-0 bottom-0 mx-auto flex items-center justify-center min-h-screen">
        <div className="booking-bg relative w-115.75 h-auto px-13.5 pb-16.25 pt-25 rounded-[31px]">
          <div className="bg-ic p-2 rounded-full absolute -top-8">
            <div className="relative bg-black p-7 rounded-full">
              <BookingIcon />
            </div>
          </div>
          <h2 className="mt-8 mb-8 font-bold text-[32px] text-[#000000]">Регистрация</h2>
          <form autoComplete="off" onSubmit={handleSubmit} className="flex items-center flex-col">
            <Input name="firstName" extraStyle="text-[16px] pl-3 text-[#585858] mb-[20px] border-black" type="text" title="Имя" />
            <Input name="lastName" extraStyle="text-[16px] pl-3 text-[#585858] mb-[20px] border-black" type="text" title="Фамилия" />
            <Input name="username" extraStyle="text-[16px] pl-3 text-[#585858] mb-[20px] border-black" type="text" title="Имя пользователя" />
            <Input name="email" extraStyle="text-[16px] pl-3 text-[#585858] mb-[20px] border-black" type="email" title="Email" />
            <Input name="password" extraStyle="text-[16px] pl-3 text-[#585858] mb-[8px] border-black" type="password" title="Пароль" />

            <Button type="submit" title="Создать аккаунт" extraStyle="mt-8 bg-black mb-2 py-[25px]! px-[25px]! text-[18px] text-[#ffffff] flex items-center gap-2 rounded-[13px]"/>
          </form>
          <Link className="flex justify-center mt-4" href={"/sign-in"}>
            <span className="font-semibold text-[#06004C] text-[12px]">Уже есть аккаунт? Войти</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;