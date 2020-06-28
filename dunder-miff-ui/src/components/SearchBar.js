import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import "../styles/searchBar.css";

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("")
    const [user, setUser] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    let history = useHistory()

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        history.push("/search?key=" + searchTerm)
    }

    function handleLogout(e) {
        fetch("/auth/logout")
            .then(res => res.json())
            .then(res => console.log(res))
    }

    useEffect(() => {
        fetch("/auth/user")
            .then(res => res.json())
            .then(res => setUser(res.message))

    }, [])

    if (!loggedIn) {
        return (
            <div className="search-bar">
                <div className="search-input">
                    <form onSubmit={handleSubmit}>
                        <input type="input" placeholder="Search" onChange={handleChange}></input>
                    </form>
                </div>
                <div className="links">
                <Link to="/cart"> Cart </Link>
                    <Link to="/user/login"> Login </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="search-bar">
            <div className="search-input">
                <form onSubmit={handleSubmit}>
                    <input type="input" placeholder="Search" onChange={handleChange}></input>
                </form>
            </div>
            <div className="links">
                <Link to="/cart"> Cart </Link>
                <button onClick={handleLogout}> Logout </button>
            </div>
        </div>
    )
}

export default SearchBar