import { DOMAIN, TOKEN } from "@/util/config"
import axios from "axios"
const token = localStorage.getItem(TOKEN)

export class BaseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: `Bearer ${token}`,
        token: token
      }
    })
  }

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: `Bearer ${token}`,
        token: token
      }
    })
  }

  get = (url, params) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
        token: token
      }
    })
  }

  delete = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      data: model,
      headers: {
        Authorization: `Bearer ${token}`,
        token: token
      }
    })
  }
}
