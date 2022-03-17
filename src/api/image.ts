import axios, { AxiosResponse } from "axios";
import { getToken } from "utils/token";
import { UpdateImageResponse } from "./types";

class ImageAPI {
  static uploadImage = async (
    file: File
  ): Promise<AxiosResponse<UpdateImageResponse>> => {
    const token = getToken() as string;
    const imageData = new FormData();
    imageData.append("avatar", file);

    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/user/me/avatar",
      method: "post",
      data: imageData,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    });
  };

  static getImage = async (id: string): Promise<AxiosResponse<any>> => {
    return axios({
      url: `https://api-nodejs-todolist.herokuapp.com/user/${id}/avatar`,
      method: "get",
      responseType: "blob",
    });
  };
}

export default ImageAPI;
