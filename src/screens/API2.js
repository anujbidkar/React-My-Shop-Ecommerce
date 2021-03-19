// const registerAPI = "http://localhost:3100/api/register";
const productInsert = "http://localhost:3100/api/product/create";

// fetch : GET ( POSTMAN / NODE.jS)

// export const Function_registerAPI = user => 
// {
//     return fetch('http://localhost:3100/api/register', 
//         {
//       method: "POST",
//       headers: 
//       {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(user)  // JSON.stringfy : convert to JSON 
//     })
//       .then(response => {
//         return response.json();
//       })
//       .catch(err => console.log(err));
// };

export const Function_registerAPI = user => {
  return fetch(`http://localhost:3100/api/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


export const Function_insert_product = product => 
{
    return fetch(productInsert, 
        {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)  // JSON.stringfy : convert to JSON 
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};


export const Function_loginAPI = user => {
  return fetch(`http://localhost:3100/api/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};




export const getCategories = () => 
{
  return fetch(`https://myshopbackend.herokuapp.com/api/category/getallcategories`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};




export const getAllProducts = () => {
  return fetch(`https://myshopbackend.herokuapp.com/api/product`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


export const FunctionAllCategories = () => {
  return fetch(`http://localhost:3100/api/category/getallcategories`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    // body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};




//JSON.stringify(user)  : is used to convert array into json 