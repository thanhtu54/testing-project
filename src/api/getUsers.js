import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get(
      "https://64ca2585b2980cec85c2f587.mockapi.io/api/v1/users"
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
