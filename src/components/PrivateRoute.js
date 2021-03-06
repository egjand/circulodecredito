import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => {
   const auth = useSelector(s => s.auth);
   return (
      <Route
         {...rest}
         render={props =>
            auth.user.isLogged ? (
               <Component {...rest} />
            ) : (
               <Redirect
                  to={{
                     pathname: '/login',
                     state: { from: props.location }
                  }}
               />
            )
         }
      />
   );
};
export default PrivateRoute;
