
import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
    component: Component,
    isAuthenticated: isAuthenticated,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) {
                    return <Component />;
                } else {
                    return (
                        <Redirect to="/login" />
                    );
                }
            }}
        />
    );
}

export default ProtectedRoute;