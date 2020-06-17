import React from "react"

import logo from "./../img/dm-logo.jfif"
import SearchBar from "./SearchBar"
import { useState, useEffect } from "react"

import GridItem from "./GridItem"
import { Link, useParams } from "react-router-dom"

function ProductGridPage() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([])
    const { cid } = useParams();

    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => { setCategories(res.message) })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
        fetch("/api/categories/" + cid + "/products")
            .then(res => res.json())
            .then(res => { setProducts(res.message) })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [cid])

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
                    <div>category: {cid}</div>
                </div>
                <div className="product-grid">
                    {products.map(p => <GridItem
                        key={p._id}
                        product={p}
                    />)}
                </div>
            </div>
        </div>
    )
}


export default ProductGridPage