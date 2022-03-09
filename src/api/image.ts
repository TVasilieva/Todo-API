import axios, { AxiosResponse } from "axios";
import { getToken } from "utils/token";
import { UpdateImageResponse } from "./types";

class ImageAPI {
  static uploadImage = async (
    data: string
  ): Promise<AxiosResponse<UpdateImageResponse>> => {
    const token = getToken() as string;
    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/user/me/avatar",
      method: "post",
      data,
      headers: {
        Authorization: token,
      },
    });
  };
}

export default ImageAPI;
