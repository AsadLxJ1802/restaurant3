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


export const addCartItem = (body: { userId: number; sessionId: string; productId: number; quantity: number }) => {
  return fetch(`${BASE_URL}cart/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const removeCartItem = (itemId: number) => {
  return fetch(`${BASE_URL}cart/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const getCart = (userId: number, sessionId: string) => {
  return fetch(`${BASE_URL}cart/current?userId=${userId}&sessionId=${sessionId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};