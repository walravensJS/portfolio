import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error = useRouteError();
    return (
        <div>
            {error.status} {error.statusText}{" "}
            <h1>This is not the page you're looking for</h1>
        </div>
    );
}
