import React from 'react';
import {useSelector} from "react-redux";
import BattleItems from "../components/BattleItems";
import {socket} from "../App";

const ArenaPage = () => {
    const vars = useSelector(state => state.vars)

    function attack(roomId, username) {
        const attackData = {
            roomId,
            attackUsername: username
        }
        socket.emit("runAttack", attackData)
    }

    return (
        <div className="container bg">
            <div className="bgAlpha p20">
                <div className="arena d-flex border">

                    <div className="grow3 d-flex flex-column j-between t-center border">
                        <b className="battleUsername">{vars.battleUser1.username.toUpperCase()}</b>
                        <div className="battleUserImg">
                            <img src={vars.battleUser1.image} alt=""/>
                        </div>
                        <div className="hp">
                            <div style={{width: vars.battleUser1.hp + "%"}}>
                                <b>{vars.battleUser1.hp}</b>
                            </div>
                        </div>
                        <BattleItems
                            weapon={vars.battleUser1.battleWeapon}
                            armour={vars.battleUser1.battleArmour}
                            potion={vars.battleUser1.battlePotion}
                            roomId={vars.arenaTimeRoomId}
                            username={vars.battleUser1.username}
                        />
                    </div>

                    <div className="grow1 d-flex a-center j-center">
                        <button className="attackBtn"
                                onClick={() => attack(vars.arenaTimeRoomId, vars.arenaTimeUsername)}>
                            <b>{vars.arenaTimeUsername.toUpperCase()}</b> ATTACK {vars.arenaTime} s
                        </button>
                    </div>

                    <div className="grow3 d-flex flex-column j-between t-center border">
                        <b className="battleUsername">{vars.battleUser2.username.toUpperCase()}</b>
                        <div className="battleUserImg">
                            <img src={vars.battleUser2.image} alt=""/>
                        </div>
                        <div className="hp">
                            <div style={{width: vars.battleUser2.hp + "%"}}>
                                <b>{vars.battleUser2.hp}</b>
                            </div>
                        </div>
                        <BattleItems
                            weapon={vars.battleUser2.battleWeapon}
                            armour={vars.battleUser2.battleArmour}
                            potion={vars.battleUser2.battlePotion}
                            roomId={vars.arenaTimeRoomId}
                            username={vars.battleUser2.username}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ArenaPage;