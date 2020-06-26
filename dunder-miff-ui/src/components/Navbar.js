import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import SlidingPanel from 'react-sliding-side-panel';

import SearchBar from './SearchBar';
import Categories from './Categories';

import logo from "./../img/dm-logo.jfif";
import "../styles/navbar.css";


export default function Navbar(props) {
    const [user, setUser] = useState(null);
    const [openPanel, setOpenPanel] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fetch("/auth/user")
            .then(res => res.json())
            .then(res => {
                setUser(res)
                if(res.status === "success")
                setLoggedIn(true)
            })
            .catch(err => console.log(err.message))
    }, [])

    function handleLogout(e) {
        fetch("/auth/logout")
            .then(res => res.json())
            .then(res => console.log(res))
    }

    function Login() {
        if (!isLoggedIn) {
            return (<div>
                <Link to="/user/login"> Login </Link>
            </div>)
        }
        return (<div>
            <button onClick={handleLogout}> Logout </button>
        </div>)
    }

    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <div>
                        <button onClick={() => setOpenPanel(true)}>Open</button>
                    </div>
                </li>
                <li>
                    <div className="logo-box">
                        <a href="/"><img src={logo} alt="dunder-miflin logo" /></a>
                    </div>
                </li>
                <li className="search-bar">
                    <SearchBar />
                </li>
                <li className="links">
                    <Login user={props.user}></Login>
                </li>
            </ul>

            <SlidingPanel
                type={'left'}
                isOpen={openPanel}
                size={30}>
                <button onClick={() => setOpenPanel(false)}>close</button>
                <div className="category-panel">
                    <div className="category-box">
                        <Categories />
                    </div>
                </div>
            </SlidingPanel>
        </div>
    )
}