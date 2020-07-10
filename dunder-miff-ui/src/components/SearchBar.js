import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import "../styles/searchBar.css"
import useCartQuantity from "../hooks/useCartQuantity"

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const cartQty = useCartQuantity();

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
            .then(res => {
                if (res.status === "success") {
                    setLoggedIn(false);
                }
            })
    }

    useEffect(() => {
        fetch("/auth/user")
            .then(async res => {
                if (res.ok) {
                    setLoggedIn(true)
                } else {
                    console.log("not authenticated")
                }
            })
    }, [])

    return (
        <div className="search-bar">
            <div className="search-input">
                <form onSubmit={handleSubmit}>
                    <input type="input" placeholder="Search" onChange={handleChange}></input>
                </form>
            </div>
            <div className="links">
                <Link to="/cart"> Cart : </Link> <span>{cartQty > 0 && cartQty}</span>
                {loggedIn
                    ? <button onClick={handleLogout}> Logout </button>
                    : <Link to="/user/login"> Login </Link>}
            </div>
        </div>
    )
}