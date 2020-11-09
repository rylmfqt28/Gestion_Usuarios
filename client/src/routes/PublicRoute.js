import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !sessionStorage.getItem("authToken") ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/crearTipoUsuario"
                        //state: { from: props.location }
                    }} 
                />
            )
        } 
    />
);

export default PublicRoute;