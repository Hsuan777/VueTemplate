import axios from "axios";
import router from "@/router";

const errorHandle = (status, msg) => {
  switch (status) {
    case 400:
      console.log(msg);
      break;
    case 401:
      router.push({ name: "signin" });
      break;
    case 404:
      // console.log('沒有這個請求喔');
      break;
    default:
      console.log("有其他的錯誤:" + msg);
  }
};

// 重新建立 axios 另一個實體並設定
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// 加入 request 攔截
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("yourItem");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// 加入 response 攔截
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data?.error);
      return Promise.reject(error);
    } else {
      if (!window.navigator.onLine) {
        console.log("網路出了點問題，請稍後再試");
      } else {
        return Promise.reject(error);
      }
    }
  },
);

export default (method, url, data = null, settings) => {
  method = method.toLowerCase();
  if (method === "get") return instance.get(url, data, settings);
  else if (method === "post") return instance.post(url, data, settings);
  else if (method === "patch") return instance.patch(url, data);
  else if (method === "delete") return instance.delete(url, { params: data });
  else console.log("未知的 method:" + method);
};
