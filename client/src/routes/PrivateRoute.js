import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            sessionStorage.getItem("authToken") ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/home"
                        //state: { from: props.location }
                    }} 
                />
            )
        } 
    />
);

export default PrivateRoute;