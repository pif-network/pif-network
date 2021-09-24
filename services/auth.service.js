import http from "../http-common";

export const authService = {
  register,
  currentUser,
  verifyPasswordReset,
  forgotPassword,
  passwordChange,
  updateProfile
};

function currentUser() {
  return http.get('/mentees/me');
}

function forgotPassword(email) {
  return http.post(
    '/mentees/auth/password_reset_request', {
      email: email
    }
  );
}

function verifyPasswordReset(token) {
  return http.get(`/mentees/auth/password_reset/${token}`);
}

// TODO: check if BE compare the two password
function passwordChange(password) {
  return http.post('/mentees/auth/password_change', {
      password: password,
      password2: password
    }
  )
}

function register(params) {
  return http.post('/mentees', params);
}

function updateProfile(params) {
  return http.put('/mentees/me', params);
}
