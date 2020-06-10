import React from "react"

import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"
import SearchResult from "./SearchResult"

import categoriesDump from "./../dump/categories"

class SearchPage extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="category-panel">
                    <div className="logo-box">
                        <img src={logo} alt="dunder-miflin logo" />
                    </div>
                    <div className="category-box">
                        {categoriesDump.map(c =>
                            <div className="category-title" key={c.id}>
                                <Link to={"/category/" + String(c.id) + "/products"}> {c.description} </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="view-area">
                    <div className="search-bar">
                        <div>
                            <input type="input" placeholder="Search"></input>
                        </div>
                        <div></div>
                        <div className="links">
                            <Link to="/user/login"> Login </Link>
                        </div>
                    </div>
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

}

export default SearchPage