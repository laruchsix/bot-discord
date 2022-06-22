import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import "./DetectorForm.css";

const DetectorFrom = ({ serverChoosed, getDetectors, updateToken }) => {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    // form attributs
    const [isMulti, setIsMulti] = useState(false);
    const [wordDetected, setWordDetected] = useState("");
    const [response, setResponse] = useState("");
    const [responseType, setResponseType] = useState("");
    // TODO add probability

    // reponseType options
    const responseTypeOptions = [
        { value: "react", label: "react" },
        { value: "awnser", label: "awnser" }
    ]


    /**
     * function to submit the detector into the database
     * @param e the event
     */
     const addDetector = (e) => {
        e.preventDefault();

        if (!wordDetected || !response || !responseType) {
            setErrorMessage("Please fill all the fields");
            return;
        } else {
            setErrorMessage("");
            const body = JSON.stringify({
                dsId : serverChoosed.value,
                isMulti : isMulti,
                word: wordDetected,
                response: response,
                responseType: responseType.value,
                probability: 100
            });

            //console.log(body);

            fetch('api/user/detector', {
                method: "POST",
                body: body,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then((response) => {
                    switch (response.status) {
                        case 401:
                            updateToken();
                            navigate("/");
                            break;
                        case 400:
                            return response.json();
                        default:
                            setErrorMessage("");
                            getDetectors();
                    }
                })
                .then((response) => {
                    if (response?.errorMessage) {
                        setErrorMessage(response.errorMessage);
                    }
                });
        }
    }

    /**
     * display a form to add a detector is the server is selected
     * @returns {JSX.Element|null} the form to add a detector line or null elem
     */
    const displayForm = () => {
        if (serverChoosed) {
            return (
                <form className={"add-detector"} onSubmit={(e) => addDetector(e)}>
                    
                    <h1 className="page-h1">Add a detector option</h1>

                    <h2 className="page-h2">Is multi detection ?</h2>
                    <input 
                        type={"checkbox"} 
                        value = {isMulti} 
                        onChange={(e)=>setIsMulti(e.currentTarget.value)} />

                    <h2 className="page-h2">Main word:</h2>
                    <input 
                        className="basic-input" 
                        type={"text"} 
                        value={wordDetected} 
                        onChange={(e)=>setWordDetected(e.currentTarget.value)} />

                    <h2 className="page-h2">Response Type:</h2>
                    <Select 
                        className="basic-input"
                        value={responseType}
                        options={responseTypeOptions}
                        onChange={setResponseType}/>

                    <h2 className="page-h2">Response :</h2>
                    <input 
                        className="basic-input" 
                        type={"text"} 
                        value={response} 
                        onChange={(e)=>setResponse(e.currentTarget.value)} />
                    
                    {
                        errorMessage && 
                            <p className="error-message">{errorMessage}</p>
                    }
                    <button className={"page-button medium-button"}>Add</button>
                </form>
            )
        } else {
            return (
                <></>
            )
        }
    }


    // render component
    return (
        <div className="detector-form">
            {displayForm()}
        </div>
    );
}

export default DetectorFrom;