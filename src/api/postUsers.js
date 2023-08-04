import axios from "axios";

export const postUser = async (data) => {
  try {
    const res = await axios.post(
      "https://64ca2585b2980cec85c2f587.mockapi.io/api/v1/users",
      data
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
