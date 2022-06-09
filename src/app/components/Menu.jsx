import React, {useState, useEffect} from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import "../style/Menu.css";
import Login from "./Login";


/*import Home from "./home/Home";
import Register  from "./Register";
import User  from "./user/User";

import Manage from "./admin/Manage";*/

const Menu = () => {
    const [token, setToken] = useState("initial");
    const [titlePage, setTitlePage] = useState("Home");

    useEffect(() => {
        fetch('/api/cookie')
            .then(response => response.json())
            .then((data) => {
                setToken(data);
            });
    }, []);

    const updateToken = (value) => {
        setToken(value);
    }

    const updateTitlePage = (value) => { 
        setTitlePage(value);
    }

    const userElems = () => {
        if (!token || token === "initial") 
            return (
                <NavLink className={"nav-button"} to="/login"> Login </NavLink>
            );
        else 
            return (
            <>
                
            </>)
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
                setToken(); 
                history.push("/");
            });
    }

    return (
        <BrowserRouter>
            <header>
                <div className="menu-button-container">
                    <div className="menu-button">
                        <div className="menu-button-item1"></div>
                        <div className="menu-button-item2"></div>
                        <div className="menu-button-item3"></div>
                    </div>
                </div>
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
                        (token?.admin) &&
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
                            <Route path="/manage" element={<h1>Manage</h1>} />
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
/**
 * <Route path="/profile">
                            <User updateToken={updateToken} token={token}/>
                        </Route>
                        <Route path="/login">
                            <Login updateToken={updateToken} token={token} title={titlePage} updateTitle={updateTitlePage}/>
                        </Route>
                        <Route path="/register">
                            <Register updateToken={updateToken} token={token} title={titlePage} updateTitle={updateTitlePage}/>
                        </Route>
                        <Route path="/manage">
                            <Manage token={token} title={titlePage} updateTitle={updateTitlePage}/>
                        </Route>
                        <Route path="/">
                            <Home token={token} updateToken={updateToken} title={titlePage} updateTitle={updateTitlePage}/>
                        </Route>
 */
}

export default Menu;