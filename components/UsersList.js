import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {socket} from "../App";

const UsersList = () => {
    const vars = useSelector(state => state.vars)

    function sendRequest(username2) {
        socket.emit("sendRequest", username2)
    }

    function refresh() {
        socket.emit("getHeroes")
    }

    return (
        <div className="usersList">
            <div className="p5 t-center">
                <button onClick={refresh}>Refresh</button>
            </div>
            {
                vars.heroes
                    .filter(x => x.username !== vars.currentUser.username)
                    .map((x, i) =>
                        <div key={i} className="d-flex gap10 mb5 border" style={{backgroundColor: x.online ? "rgba(0, 255, 127, 0.5)" : ""}}>
                            <div className="onlineBox">
                                <img src={x.image} alt=""/>
                            </div>
                            <div className="grow1">
                                <b>{x.username.toUpperCase()}</b>
                                <div>
                                    <button onClick={() => sendRequest(x.username)}>Send battle request</button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default UsersList;