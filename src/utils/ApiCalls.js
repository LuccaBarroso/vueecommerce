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

export async function login(data) {
  try {
    const response = await axios.post(apiUrl + "/user/login", data, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function register(data) {
  try {
    const response = await axios.post(apiUrl + "/user/signup", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function updateMe(data, jwt) {
  console.log(data);
  try {
    const response = await axios.patch(apiUrl + "/user/updateMe", data, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${jwt}` }
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function getMe(jwt) {
  try {
    const response = await axios.get(apiUrl + "/user/me", {
      withCredentials: true,
      headers: { Authorization: `Bearer ${jwt}` }
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
