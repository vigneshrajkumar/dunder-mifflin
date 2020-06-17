import React, {useState, useEffect} from "react"

import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"
import SearchResult from "./SearchResult"
import SearchBar from "./SearchBar"

function SearchPage() {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => { setCategories(res.message) })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [])

    return (
        <div className="app">
            <div className="category-panel">
                <div className="logo-box">
                    <img src={logo} alt="dunder-miflin logo" />
                </div>
                <div className="category-box">
                    {categories.map(c =>
                        <div className="category-title" key={c.id}>
                            <Link to={"/categories/" + String(c.id) + "/products"}> {c.description} </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="view-area">
                <SearchBar />
                <div className="title-bar">
                    <div> Showing results for <span> color papers </span> </div>
                </div>
                <div className="results">
                    <SearchResult />
                    <SearchResult />
                </div>
            </div>
        </div>
    )
}



export default SearchPage