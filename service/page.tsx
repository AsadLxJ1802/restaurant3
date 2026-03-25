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
  return fetch(`${BASE_URL}${URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
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

// ADD CART ITEM
export const addCartItem = (body:{userId:number,productId:number,quantity:number}) => {
  return fetch(`${BASE_URL}cart/items`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(body)
  })
}

// DELETE CART ITEM
export const removeCartItem = (itemId:number) => {
  return fetch(`${BASE_URL}cart/items/${itemId}`,{
    method:"DELETE"
  })
}

// UPDATE QUANTITY
export const updateCartItem = (itemId:number, quantity:number) => {
  return fetch(`${BASE_URL}cart/items/${itemId}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({quantity})
  })
}

// CHECKOUT
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

export const orderBron = (body: {customerName:string, email:string, guestCount:number , reservationDate:string, reservationTime:string, tableId:number ,note:string }) =>{
  return fetch(`${BASE_URL}reservations/create`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
}