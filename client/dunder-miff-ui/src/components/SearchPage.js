import React from "react"

import { Link } from "react-router-dom"

import CategoryPanel from "./CategoryPanel"
import SearchResult from "./SearchResult"

import categoriesDump from "./../dump/categories"

class SearchPage extends React.Component{

    render(){
        return(
            <div className="app">
            <CategoryPanel categories={categoriesDump} />
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