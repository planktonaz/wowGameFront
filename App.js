import './App.css';
import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {io} from 'socket.io-client'
import Modal from "./components/Modal";

import LoginPage from "./pages/LoginPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import ArenaPage from "./pages/ArenaPage";
import {
    setArenaTime, setArenaTimeRoomId, setArenaTimeUsername,
    setBattleUser1,
    setBattleUser2,
    setHeroes,
    setItems,
    setUsername
} from "./features/vars";

export const socket = io("http://localhost:3001", {
    autoConnect: true
})

function App() {
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()
    const toPage = useNavigate()
    const [modal, setModal] = useState("dontShow")

    useEffect(() => {
        socket.on('heroes', data => {
            console.log("heroes",data)
            dispatch(setHeroes(data))
        })

        socket.on('currentUser', data => {
            dispatch(setUsername(data))
        })

        socket.on('items', data => {
            dispatch(setItems(data))
        })

        socket.on('request', data => {
            setModal(data)
        })

        socket.on('battleRoom', ({msg,roomId,username1}) => {
            if (msg === "welcome") {
                dispatch(setArenaTimeRoomId(roomId))
                toPage("/arena")
                socket.emit('getArenaTime', {
                    roomId: roomId,
                    username: username1,
                    sec: 20
                })
            }
        })

        socket.on('battleUser1', user1 => {
            dispatch(setBattleUser1(user1))
        })

        socket.on('battleUser2', user2 => {
            dispatch(setBattleUser2(user2))
        })

        socket.on('arenaTime', ({roomId,username,sec}) => {
            dispatch(setArenaTimeRoomId(roomId))
            dispatch(setArenaTimeUsername(username))
            dispatch(setArenaTime(sec))
        })
    }, [])

    if (!vars.heroes.length) socket.emit("getHeroes")
    if (!Object.keys(vars.currentUser).length) socket.emit("currentUser")

    return (
        <div className="bg bgAlpha">
            {modal !== 'dontShow' && <Modal setModal={setModal} data={modal}/>}

            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/settings" element={<UserSettingsPage/>}/>
                <Route path="/arena" element={<ArenaPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
