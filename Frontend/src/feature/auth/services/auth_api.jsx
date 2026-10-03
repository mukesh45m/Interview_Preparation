import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/auth`
    : "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function login({ user_id, password }) {
  try {
    const response = await api.post("/login", {
      user_id,
      password,
    });

    return response.data;
  } catch (err) {
    // console.error("Login API Error:", err);
    throw err;
  }
}

export async function logout() {
  try {
    const response = await api.post("/logout");
    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
}

export async function profile() {
  try {
    const response = await api.get("/profile");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
