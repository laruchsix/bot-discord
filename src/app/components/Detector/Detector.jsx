import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import DSChoser from "./DSChoser";
import DetectorTable from "./DetectorTable";
import "./Detector.css"
import DetectorFrom from "./DetectorForm";

const Detector = ({updateToken, token, title, updateTitle}) => {
    const navigate = useNavigate();

    // verify the token and redirect to the home page if it is not valid
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, []);

    // change the title of the page
    useEffect(() => {
        if (title !== "Detector"){
            updateTitle("Detector");
        }
    }, [title])

    const [serverChoosed, setServerChoosed] = useState("");  

    return (
        <div className="detector-container">
            <DSChoser 
                serverChoosed={serverChoosed} 
                updateServerChoosed={setServerChoosed}/>

            <DetectorTable 
                serverChoosed={serverChoosed}/> 
                
            <DetectorFrom/>
        </div>    
    )
}

export default Detector;