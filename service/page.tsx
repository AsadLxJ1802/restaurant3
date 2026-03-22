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