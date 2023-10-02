import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Toolbar = ({user, setUser}) => {
    const vars = useSelector(state => state.vars)

    function logout() {
    }

    return (
        <div className="d-flex j-between gap10 p-2 border">
            {
                vars.currentUser.username &&
                <span>
                    <b>{vars.currentUser.username.toUpperCase()} </b>
                    (Money: <b>{vars.currentUser.money}</b>)
                </span>
            }
            {
                <Link to="/">
                    <button type="button">
                        Start page
                    </button>
                </Link>
            }
            {
                <Link to="/">
                    <button type="button" onClick={logout}>
                        Logout
                    </button>
                </Link>
            }
        </div>
    );
};

export default Toolbar;