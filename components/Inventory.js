import React from 'react';
import {useSelector} from "react-redux";
import SingleInventory from "./SingleInventory";
import BattleItems from "./BattleItems";

const Inventory = () => {
    const vars = useSelector(state => state.vars)

    return (
        <div className="d-flex flex-column gap10 p10 border">
            <div className="inventory d-flex wrap gap10 border">
                {vars.inventory.map((x, i) => <SingleInventory key={i} val={x} index={i}/>)}
            </div>
            <BattleItems weapon={vars.battleWeapon} armour={vars.battleArmour} potion={vars.battlePotion}/>
        </div>
    );
};

export default Inventory;