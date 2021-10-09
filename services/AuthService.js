import http from "../http-common"
import authHeader from "./AuthHeader"

export const authService = {
  register,
  login,
  logout,
  currentUser,
  forgotPassword,
  passwordChange,
  updateProfile,
}

function forgotPassword(email) {
  return http.post("/mentees/auth/password_reset_request", {
    email: email,
  })
}

// TODO: check if BE compare the two password
function passwordChange(password) {
  return http.post(
    "/mentees/auth/password_change",
    {
      password: password,
      password2: password,
    },
    {
      headers: authHeader(),
    }
  )
}

function currentUser() {
  return http.get("/mentees/me", {
    headers: authHeader(),
  })
}

// TODO: Check what is the required params from BE
function register(email, password, name, phone) {
  return http.post("/mentees", {
    email,
    password,
    name,
    phone,
  })
}

function login(email, password) {
  return http
    .post("/mentees/auth", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data
    })
}

// BE doesn't have an official logout function
function logout() {
  localStorage.removeItem("user")
}

function updateProfile(params) {
  return http.put("/mentees/me", params, {
    headers: authHeader(),
  })
}
