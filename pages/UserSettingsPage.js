import React from 'react';
import Toolbar from "../components/Toolbar";
import UsersList from "../components/UsersList";
import ItemsGenerator from "../components/ItemsGenerator";
import Inventory from "../components/Inventory";

const UserSettingsPage = () => {
    return (
        <div className="container bg">
            <div className="p10 bgAlpha">
                <Toolbar/>

                <div className="d-flex gap10 w-100">
                    <div className="leftSide grow2 p10 border">
                        <ItemsGenerator/>
                        <Inventory/>
                    </div>
                    <div className="rightSide grow1">
                        <UsersList/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserSettingsPage;