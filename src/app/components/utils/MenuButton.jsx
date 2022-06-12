import React from "react";

const MenuButton = (props) => {
    const {onClick} = props;	// onClick is a function


    return (
        <div className="menu-button-container" onClick={onClick}>
            <div className="menu-button">
                <div className="menu-button-item1"></div>
                <div className="menu-button-item2"></div>
                <div className="menu-button-item3"></div>
            </div>
        </div>
    );
}

export default MenuButton;