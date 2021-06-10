export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const login = (user, token) => ({
   type: LOG_IN,
   payloads: {
      email: user.email,
      password: user.password,
      token: token
   }
});
export const logout = (user, token) => ({
   type: LOG_OUT,
   payloads: {
      email: user.email,
      password: user.password,
      token: token
   }
});
