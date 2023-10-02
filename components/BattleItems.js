import React from 'react';
import {socket} from "../App";

const BattleItems = ({weapon, armour, potion, roomId, username}) => {

    function getPotion(xRoomId, xUsername) {
        socket.emit("getPotion", {roomId: xRoomId, username: xUsername})
    }

    return (
        <div className="d-flex gap20 j-center a-center t-center p10">
            <div className="cell"
                 style={{
                     backgroundImage: `url(${weapon.image})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",

                     backgroundColor: weapon.weaponQuality === 1 ? "violet" :
                         weapon.weaponQuality === 2 ? "lightskyblue" :
                             weapon.weaponQuality === 3 ? "lightgreen" : "",
                 }}
            >
                {Object.keys(weapon) && weapon.type}
                <div>{weapon.weaponDamage}</div>
            </div>
            <div className="cell"
                 style={{
                     backgroundImage: `url(${armour.image})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",

                     backgroundColor: armour.armourQuality === 1 ? "violet" :
                         armour.armourQuality === 2 ? "lightskyblue" :
                             armour.armourQuality === 3 ? "lightgreen" : "",
                 }}
            >
                {Object.keys(armour) && armour.type}
                <div>{armour.armourPower}</div>
            </div>
            <div className="cell"
                 style={{
                     backgroundImage: `url(${potion.image})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center"
                 }}
            >
                {Object.keys(potion) && potion.type}
                <div>{potion.potion}</div>
                <div>
                    {roomId && <button onClick={() => getPotion(roomId, username)}>Get</button>}
                </div>
            </div>
        </div>
    );
};

export default BattleItems;