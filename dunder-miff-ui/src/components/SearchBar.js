import React, { useState, useEffect } from "react"

import { Link, useHistory } from "react-router-dom"

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("")
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

    const [user, setUser] = useState("")
    useEffect(() => {
        fetch("/auth/user")
            .then(res => res.json())
            .then(res => setUser(res.message))

    }, [])
    

    if (user === null) {
        return (
            <div className="search-bar">
                <div className="search-input">
                    <form onSubmit={handleSubmit}>
                        <input type="input" placeholder="Search" onChange={handleChange}></input>
                    </form>
                </div>
                <div className="links">
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
            <button onClick={handleLogout}> Logout </button>
            </div>
        </div>
    )
}

export default SearchBar