import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBattleArmour, setBattlePotion, setBattleWeapon} from "../features/vars";
import {socket} from "../App";

const SingleInventory = ({val, index}) => {
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()

    function setBattleItem(arrIndex, itemType) {
        if (itemType === "weapon") {
            dispatch(setBattleWeapon(vars.inventory[arrIndex]))
            socket.emit("setBattleWeapon", {user: vars.currentUser, weapon: vars.inventory[arrIndex]})
        }

        if (itemType === "armour") {
            dispatch(setBattleArmour(vars.inventory[arrIndex]))
            socket.emit("setBattleArmour", {user: vars.currentUser, armour: vars.inventory[arrIndex]})
        }

        if (itemType === "potion") {
            dispatch(setBattlePotion(vars.inventory[arrIndex]))
            socket.emit("setBattlePotion", {user: vars.currentUser, potion: vars.inventory[arrIndex]})
        }
    }

    return (
        <div className="cell t-center"
             style={{
                 backgroundImage: `url(${val.image})`,
                 backgroundSize: "cover",
                 backgroundPosition: "center"
             }}
        >
            {index + 1}
            <span> {val.type}</span>
            <div>
                <button onClick={() => setBattleItem(index, val.type)}>Set</button>
            </div>
        </div>
    );
};

export default SingleInventory;