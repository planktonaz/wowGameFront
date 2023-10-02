import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {resetBattleItems, resetInventory, resetItems, setUsername} from "../features/vars";
import {socket} from "../App";

const LoginPage = () => {
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()

    function setUser(index) {
        socket.emit("setUsername", vars.heroes[index].username)

        dispatch(resetItems())
        dispatch(resetInventory())
        dispatch(resetBattleItems())

        dispatch(setUsername(vars.heroes[index]))
    }

    return (
        <div className="startPage bg d-flex flex-column j-center a-center">
            <div className="d-flex flex-column a-center p20 bgAlpha rounded">

                <div className="cells">
                    {
                        vars.heroes.map((x, i) =>
                            <div key={i} className="box t-center" onClick={() => setUser(i)}>
                                <img src={x.image} alt=""/>
                                <b>{x.username.toUpperCase()}</b>
                            </div>
                        )
                    }
                </div>
                {
                    vars.currentUser.username &&
                    <Link to="/settings">
                        <button className="startBtn">
                            <h1>Start game {vars.currentUser.username && " - " + vars.currentUser.username}</h1>
                        </button>
                    </Link>
                }

            </div>
        </div>
    );
};

export default LoginPage;