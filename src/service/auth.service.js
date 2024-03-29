import { api } from "./api";

export const register = async (formData) => {
  try {
    const res = await api.post("register", formData);
    return res;
  } catch (e) {
    throw {error:true, msg:e.message};
  }
};
export const login = async (formData) => {
  try {
    const res = await api.post("login", formData);
    const {data}=res;
    if(data.token){
      localStorage.setItem("auth",JSON.stringify(data.token))
    }
    return res;
  } catch (e) {
    throw { error: true, msg: e.message };
  }
};