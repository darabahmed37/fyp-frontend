import React, {FC, useEffect} from 'react';
import {RoutesLink} from "routes";

const Redirect: FC = () => {

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            window.location.href = RoutesLink.HOME;
        }
    }, [])

    return (
        <div>

        </div>
    );
};

export default Redirect;