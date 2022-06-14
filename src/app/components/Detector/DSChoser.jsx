import React, {useEffect, useState} from "react";
import MySelector from "../utils/MySelector";
import "./DSChoser.css";


const DSChoser = ({serverChoosed, updateServerChoosed}) => {

    return (
        <div className="selecter-container">
            <MySelector service={"/api/user/discordserver/"} object={serverChoosed} updateObjet={updateServerChoosed}/>
        </div>
    )
}
 
export default DSChoser;