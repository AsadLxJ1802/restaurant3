"use client";

import { useState, FormEvent, SubmitEvent } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link, useRouter } from "@/i18n/navigation";
import { BookingIcon } from "@/public/icons/page";
import { SignIn } from "@/service/page";
import { setCookie } from "cookies-next";
import Loading from "@/public/images/page";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function hendleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    SignIn(data)
      .then((res) => res.json())
      .then((data) => {

        const user = data.data.user;
        setCookie("token", data.data.accessToken);
        setCookie("user", `${user.firstName || ""} ${user.lastName || ""}`);
        setCookie("role", user.role);

        if (user.role === "ADMIN") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      })
      .catch(() => {
        alert("Username yoki password xato!");
        setIsLoading(false);
      });
  }


  return (
    <div className="auth-bg">
      <div className="containers absolute top-0 right-0 left-0 bottom-0 mx-auto flex items-center justify-center min-h-screen">
        <div className="booking-bg relative w-115.75 h-132.25 px-13.5 pb-16.25 pt-25 rounded-[31px]">
          
          <div className="bg-ic p-2 rounded-full absolute -top-8">
            <div className="relative bg-black p-7 rounded-full">
              <BookingIcon />
            </div>
          </div>
          <h2 className={`mt-8 mb-8 font-bold text-[32px] text-[#000000] ${ isLoading ? "text-center" : "text-start" }`}>Вход в аккаунт</h2>
          {isLoading ? (
            <Loading />
          ) : (
            <form autoComplete="off" onSubmit={hendleSubmit} className="flex items-center flex-col">
              <Input name="username" type="text" title="Ваше имя пользователя" extraStyle="text-[16px] pl-3 text-[#585858] bg-[#d2d1d1] mb-[30px] border-black"/>

              <label className="w-full">
                <Input name="password" type="password" title="Password" extraStyle="text-[16px] pl-3 text-[#585858] mb-[8px] border-black"/>
                <Link href={"#"} className="text-[12px] text-[#000000]">
                  Забыли пароль?
                </Link>
              </label>
              <Button type="submit" title="Вход в аккаунт" extraStyle="mt-8 bg-black mb-2 py-[25px] px-[25px] text-[18px] text-[#FFFFFF] flex items-center gap-2 rounded-[13px]"/>

              <Link className="flex justify-center" href={"/sign-up"}>
                <span className="font-semibold text-[#06004C] text-[12px]">Еще нет учетной записи?</span>
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;