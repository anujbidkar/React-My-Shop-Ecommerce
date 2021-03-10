const registerAPI = "http://localhost:3100/api/register";
const productInsert = "http://localhost:3100/api/product/create";

// fetch : GET ( POSTMAN / NODE.jS)

export const Function_registerAPI = user => 
{
    return fetch(registerAPI, 
        {
      method: "POST",
      headers: 
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)  // JSON.stringfy : convert to JSON 
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





//JSON.stringify(user)  : is used to convert array into json 