import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = ({updateToken, token, title, updateTitle}) => {
    useEffect(() => {
        if (title !== "Login") {
            updateTitle("Login");
        }
    }, [title])

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const validate = (e) => {
        e.preventDefault();
        const body = JSON.stringify({"username":name, "password" : password});
        let options = {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        fetch('api/login', options)
            .then(response => response.json())
            .then((data) => {
                if (data.error) {
                    setErrorMessage(data.error);
                } else {
                    fetch('/api/cookie')
                        .then(response => response.json())
                        .then((data) => {
                            updateToken(data);
                            navigate('/');
                        });
                } })
    }

    return (
        <div className={"middle panel"}>
            <form onSubmit={(e) => validate(e)}>
                <h2 className="page-h2 login-segment">Email :</h2>
                <input className="basic-input" type={"text"} value = {name} onChange={(e)=>setName(e.currentTarget.value)} />
                <h2 className="page-h2 login-segment">Password :</h2>
                <input className="basic-input" type={"password"} value = {password} onChange={(e)=>setPassword(e.currentTarget.value)} />
                <div><p className={"error-message"}>{errorMessage}</p></div>
                <div className={"center-content"}>
                    <button className={"page-button medium-button"}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;


