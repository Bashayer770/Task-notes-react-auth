import instance from ".";
import jwtDecode from "jwt-decode";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post("/auth/register", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const me = async () => {
  try {
    const { data } = await instance.get("/auth/me");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async () => {
  try {
    const { data } = await instance.get("/auth/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};

function storeToken(token) {
  localStorage.setItem("token", token);
}

function checkToken() {
  localStorage.getItem("token");
  if (token) {
    const decoded = jwtDecode(token);
    const currentTime = Data.now() / 1000;
    console.log(decoded.exp - currentTime);
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem(token);
}
export { login, register, me, getAllUsers, logout, checkToken, storeToken };
