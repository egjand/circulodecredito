import { LOG_IN, LOG_OUT } from '../actions/auth-action';
export const authReducer = (
   state = {
      user: {
         isLogged: true
      }
   },
   action
) => {
   switch (action.type) {
      case LOG_IN:
         const newuser = action.payloads;
         return {
            ...state,
            user: { ...state.user, isLogged: !state.user.isLogged, newuser }
         };
      case LOG_OUT:
         const u = action.payloads;
         return {
            ...state,
            user: { ...state.user, isLogged: !state.user.isLogged, u }
         };
      default:
         return state;
   }
};
