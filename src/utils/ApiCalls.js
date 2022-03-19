import axios from "axios";

const apiUrl = "https://ecommerce-lucca.herokuapp.com/api/v1";

export async function getProducts() {
  try {
    const response = await axios.get(apiUrl + "/product");
    // handle success
    return response.data.data.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
}
