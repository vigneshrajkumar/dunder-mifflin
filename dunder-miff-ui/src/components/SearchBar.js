import React, { useState } from "react"

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

export default SearchBar