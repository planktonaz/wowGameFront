import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {socket} from "../App";
import {addInventory} from "../features/vars";

const ItemsGenerator = () => {
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()

    function gen() {
        socket.emit("getItems", vars.currentUser)
    }

    function toInventory(obj) {
        dispatch(addInventory(obj))
    }

    return (
        <div>
            <div className="t-center d-flex flex-column gap10 mb10">
                <div className="d-flex j-center a-center gap30">
                    <div className="item rounded" style={{
                        backgroundColor: vars.items.weapon.weaponQuality === 1 ? "violet" :
                            vars.items.weapon.weaponQuality === 2 ? "lightskyblue" :
                                vars.items.weapon.weaponQuality === 3 ? "lightgreen" : "",

                        backgroundImage: `url(${vars.items.weapon.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    >
                        <b>Weapon</b>
                        <div>Quality: <b>{vars.items.weapon.weaponQuality}</b></div>
                        <div>Slots: <b>{vars.items.weapon.weaponSlots}</b></div>
                        <div>Damage: <b>{vars.items.weapon.weaponDamage}</b></div>
                        <div>Gold: <b>{vars.items.weapon.weaponGold}</b></div>
                        <div>Effects:
                            {
                                vars.items.weapon.weaponEffects &&
                                vars.items.weapon.weaponEffects.map((x, i) => <span key={i}> <b>{x}</b></span>)
                            }
                        </div>
                        <button onClick={() => toInventory(vars.items.weapon)}>Take</button>
                    </div>
                    <div className="item rounded" style={{
                        backgroundColor: vars.items.armour.armourQuality === 1 ? "violet" :
                            vars.items.armour.armourQuality === 2 ? "lightskyblue" :
                                vars.items.armour.armourQuality === 3 ? "lightgreen" : "",

                        backgroundImage: `url(${vars.items.armour.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <b>Armour</b>
                        <div>Quality: <b>{vars.items.armour.armourQuality}</b></div>
                        <div>Slots: <b>{vars.items.armour.armourSlots}</b></div>
                        <div>Power: <b>{vars.items.armour.armourPower}</b></div>
                        <div>Effects:
                            {
                                vars.items.armour.armourEffects &&
                                vars.items.armour.armourEffects.map((x, i) => <span key={i}> <b>{x}</b></span>)
                            }
                        </div>
                        <button onClick={() => toInventory(vars.items.armour)}>Take</button>
                    </div>
                    <div className="item rounded"
                         style={{
                             backgroundImage: `url(${vars.items.potion.image})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center"
                         }}
                    >
                        <div><b>Potion: {vars.items.potion.potion}</b></div>
                        <button onClick={() => toInventory(vars.items.potion)}>Take</button>
                    </div>
                </div>
                <div>
                    <button className="genBtn" onClick={gen}><b>GENERATE: 100$</b></button>
                </div>
            </div>
        </div>
    );
};

export default ItemsGenerator;