import React from 'react';
import {socket} from "../App";

const Modal = ({data, setModal}) => {

    function accept() {
        socket.emit("acceptRequest", data)
        setModal('dontShow')
    }

    return (
        <div className="modalWrapper d-flex gap20 j-center a-center">
            <div className="form p20 rounded">
                <div><b>{data.username1.toUpperCase()}</b> wants to faith, you agree?</div>
                <div className="d-flex gap10 p10 j-center">
                    <button className="p10" onClick={accept}>YES</button>
                    <button className="p10" onClick={() => setModal('dontShow')}>NO</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;