import React from "react"

import logo from "./../img/dm-logo.jfif"
import SearchBar from "./SearchBar"
import { useState, useEffect } from "react"

import GridItem from "./GridItem"
import { useParams, useHistory } from "react-router-dom"
import Categories from "./Categories"

function ProductGridPage() {
    const [currentCategory, setCurrentCategory] = useState({})
    const [products, setProducts] = useState([])
    const { cid } = useParams();

    let history = useHistory()

    useEffect(() => {
        fetch("/api/categories/" + cid + "/products")
            .then(res => res.json())
            .then(res => { setProducts(res.message) })
            .catch(err => {
                console.error(err)
                history.push("/500")
            })

        fetch("/api/categories/" + cid)
            .then(res => res.json())
            .then(res => { setCurrentCategory(res.message) })
            .catch(err => {
                console.error(err)
                history.push("/500")
            })
    }, [cid])

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
                    <div> {currentCategory === null ? "fetching.." : currentCategory.description} </div>
                </div>
                <div className="product-grid">
                    {products === null ? "fetching.." :
                        products.map(p => <GridItem
                            key={p._id}
                            product={p}
                        />)}
                </div>
            </div>
        </div>
    )
}


export default ProductGridPage