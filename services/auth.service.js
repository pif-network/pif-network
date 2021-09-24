import http from "../http-common";

export const authService = {
  register,
  currentUser,
  forgotPassword,
  passwordChange,
  updateProfile
};

function forgotPassword(email) {
  return http.post(
    '/mentees/auth/password_reset_request', {
      email: email
    }
  );
}

// TODO: check if BE compare the two password
function passwordChange(password) {
  return http.post('/mentees/auth/password_change', {
      password: password,
      password2: password
    }
  )
}

// Just an example
function currentUser() {
  return http.get('/mentees/me');
}

function register(params) {
  return http.post('/mentees', params);
}

function updateProfile(params) {
  return http.put('/mentees/me', params);
}
