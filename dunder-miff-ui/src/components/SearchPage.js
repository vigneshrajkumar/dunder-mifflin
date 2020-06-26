import React, { useState, useEffect } from "react"

import { useLocation } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"
import SearchResult from "./SearchResult"
import SearchBar from "./SearchBar"
import Categories from "./Categories"
import "./../styles/searchPage.css"

function SearchPage() {

    function useQuery() {
        return new URLSearchParams(useLocation().search)
    }
    let query = useQuery()

    const [relavantProducts, setRelavantProducts] = useState([]);
    useEffect(() => {
        // TODO: Sanitize params
        fetch("/api/search?key=" + query.get("key"))
            .then(res => res.json())
            .then(res => setRelavantProducts(res.message))
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [query])

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
                <div className="title-bar">
                    <div> Showing results for <span className="search-key">"{query.get("key")}"</span> </div>
                </div>
                {relavantProducts.length === 0 ?
                    <div className="results">
                        <div className="no-results"> no results found </div>
                    </div>
                    :
                    <div className="results">
                        {relavantProducts.map(p => <SearchResult key={p._id} product={p} />)}
                    </div>}

            </div>
        </div>
    )
}

export default SearchPage