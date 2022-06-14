import React, {useState, useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    useNavigate
} from "react-router-dom";

import "../style/Menu.css";
import Login from "./Login";
import MenuButton from "./utils/MenuButton";
import Detector from "./Detector/Detector";

const Menu = () => {

    const [token, setToken] = useState("initial");
    const [titlePage, setTitlePage] = useState("Home");

    useEffect(() => {
        fetch('/api/cookie')
            .then(response => response.json())
            .then((data) => {
                setToken(data.token);
            }); 
    }, []);


    const updateToken = (value) => {
        setToken(value);
    }

    const updateTitlePage = (value) => { 
        setTitlePage(value);
    }

    const userElems = () => {
        if (!token || token === "initial") {
            return (
                <NavLink className={"nav-button"} to="/login"> Login </NavLink>
            );
        }
        else {
            return (
                <>
                    <h1 className={"user-name"}>{token.username}</h1>
                    <button className={"nav-button"} onClick={logout}>Logout</button>
                </>
            );
                
        }
            /*return (
               <>
                   <h1 className={"user-name"}>{token.name}</h1>
                <button className={"nav-button"} onClick={logout}>Logout</button>

                <div className={"user-container"}>
                    <Link  className={"nav-button"} to="/profile">
                        <img
                            className={"user-img"}
                            src="/basic_user_image.png"
                            alt="User Image"/>
                    </Link>
                </div> 
            </>)*/
        
    }

    const logout = () => {
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        fetch('/api/logout', options)
            .then(response => response.json())
            .then((data) => {
                console.log(data.message);
                setToken();
            });
    }

    const pressMenu = () => {
        console.log("pressMenu"); 
    }

    return (
        <BrowserRouter>
            <header>
                <MenuButton onClick={pressMenu}/>
                <div className={"title-container"}>
                    <h1 className={"title"}>{titlePage}</h1>
                </div>
                <div className={"user-info"}>
                    {userElems()}
                </div>
            </header>
            <div className={"center-container"}>
                <aside>
                    <NavLink className={"nav-link"} to="/">Home</NavLink>
                    {
                    (token?.username) && 
                        <NavLink className={"nav-link"} to="/detector">Detector</NavLink>
                    }
                    {
                        (token?.isAdmin) &&
                            <NavLink className={"nav-link"} to="/manage">Manage User</NavLink>
                    } 
                </aside>
                <div className="center-right-container">
                    <div className={"page-content"}>
                        <Routes>
                            <Route path="/profile" element={<h1>Profile</h1>} />
                            <Route path="/login" element={<Login 
                                                            token={token} 
                                                            updateToken={updateToken}
                                                            title={titlePage}
                                                            updateTitle={updateTitlePage} />} />
                            <Route path="/detector" element={<Detector 
                                                            token={token} 
                                                            updateToken={updateToken}
                                                            title={titlePage}
                                                            updateTitle={updateTitlePage}/>} />
                            <Route path="/" element={<h1>Home</h1>} />
                        </Routes>
                    </div>
                    <footer>
                        <div className="copyright-content">©Thibault Rucher</div>
                    </footer>
                </div>
            </div>
            
        </BrowserRouter>

    );
}

export default Menu;