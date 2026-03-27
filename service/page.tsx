import { getCookie } from "cookies-next";

const BASE_URL = process.env.NEXT_PUBLIC_API;
export const SignIn =  (body:{username:string,password:string }) => {
  return  fetch(`${BASE_URL}auth/signin`,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(body)
  })
}




export const SignUp = (body: { firstName: string; lastName: string; username: string; email: string; password: string }) => {
  return fetch(`${BASE_URL}auth/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};


export const getAll = (URL: string) => {
  const token = getCookie("token"); 
  console.log(token);
  
  return fetch(`${BASE_URL}${URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const deleteProduct = (id: number | string) => {
  const token = getCookie("token");

  return fetch(`${BASE_URL}products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then(res => res.json());
};

// Get Cart
export const getCart = (userId:number) => {
  return fetch(`${BASE_URL}cart/current?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addCartItem = (body:{userId:number,productId:number,quantity:number}) => {
  return fetch(`${BASE_URL}cart/items`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(body)
  })
}

export const removeCartItem = (itemId:number) => {
  return fetch(`${BASE_URL}cart/items/${itemId}`,{
    method:"DELETE"
  })
}

export const updateCartItem = (itemId:number, quantity:number) => {
  return fetch(`${BASE_URL}cart/items/${itemId}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({quantity})
  })
}

export const checkoutCart = (body:any) => {
  return fetch(`${BASE_URL}cart/checkout`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(body)
  })
}

// Get contact


export const sendContact = (body: {name:string; email:string, phone:string, message:string}) =>{
  return fetch(`${BASE_URL}contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
}


// Bron

export const cerateBron = (body: {email:string, guestCount:number, reservationDate:string , reservationTime:string, tableId:number }) =>{
  return fetch(`${BASE_URL}reservations/create`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
}



