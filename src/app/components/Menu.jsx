import React, {useState} from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import "../style/Menu.css";

/*import Home from "./home/Home";
import Login from "./Login";
import Register  from "./Register";
import User  from "./user/User";

import Manage from "./admin/Manage";*/

const Menu = () => {
    const [token, setToken] = useState("initial");
    const [titlePage, setTitlePage] = useState("Home");

    if (token === "initial") {
        // TODO : check if token is in cookies
    }

    /*const updateToken = (value) => {
        setToken(value);
    }

    const updateTitlePage = (value) => {
        setTitlePage(value);
    }*/

    const userElems = () => {
        if (token || token === "initial") {
            return (
                <>
                    <NavLink className={"nav-button"} to="/login" >Login</NavLink>
                </>)
        }
        /*else {
           return (
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
            </>)
        }*/
        return null;
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
                <div className={"title-container"}>
                    <h1 className={"title"}>{titlePage}</h1>
                </div>
                <div className={"user-info"}>
                    {userElems()}
                </div>
            </header>
            <div className={"center"}>
                <aside>
                    <NavLink className={"nav-link"} to="/">Home</NavLink>
                    {
                        (token && token.admin) ?
                            <NavLink className={"nav-link"} to="/manage">Manage User</NavLink>
                            : <></>
                    } 
                </aside>
                <div className={"page-content"}>
                    <Routes>
                        <Route path="/profile" element={<h1>Profile</h1>} />
                        <Route path="/login" element={<h1>Login</h1>} />
                        <Route path="/manage" element={<h1>Manage</h1>} />
                        <Route path="/" element={<h1>Home</h1>} />
                    </Routes>
                </div> 
            </div>
            <footer>
                footer
            </footer>
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