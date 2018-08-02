import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {judgeAuthorization} from "../../utils/authorization"

const AuthorizationRoute = ({ component: Component, role, ...rest }) => (
    <Route
        {...rest}
        render={props =>judgeAuthorization(role)? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);