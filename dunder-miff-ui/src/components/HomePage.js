import React, { useState, useEffect }  from 'react';
import logo from "./../img/dm-logo.jfif"
import SearchBar from "./SearchBar"
import GridItem from "./GridItem"

import Categories from "./Categories"


export default function HomePage() {
    const [currentCategory, setCurrentCategory] = useState({})
    const [products, setProducts] = useState([])

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/auth/user")
            .then(res => res.json())
            .then(res => {
                setUser(res)
            })
            .catch(err => console.log(err.message))
    }, [])

    return(
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
                    <div> {currentCategory === null ? "fetching.." : currentCategory.description} </div>
                </div>
            </div>
        </div>
    )
}