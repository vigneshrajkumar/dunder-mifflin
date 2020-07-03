import React from "react"

import logo from "./../img/dm-logo.jfif"
import SearchBar from "./SearchBar"
import Categories from "./Categories"

import "../styles/error.css"

function E500Page() {
    return (
        <div className="app">
            <div className="category-panel">
                <div className="logo-box">
                    <img src={logo} alt="dunder-miflin logo" />
                </div>
                <div className="category-box">
                    <Categories />
                </div>
            </div>
            <div className="view-area">
                <SearchBar />
                <div className="error">
                   <div className="error-code">500</div>
                   <div className="error-message">Server is doomed. Try again later.</div>
                </div>
            </div>
        </div>
    )
}

export default E500Page