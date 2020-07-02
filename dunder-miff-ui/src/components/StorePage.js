import React from "react"

import logo from "./../img/dm-logo.jfif"
import SearchBar from "./SearchBar"
import { useState, useEffect } from "react"

import GridItem from "./GridItem"
import { useParams } from "react-router-dom"
import Categories from "./Categories"

function StorePage() {
    const [products, setProducts] = useState([])
    const { sid } = useParams();

    useEffect(() => {
        fetch("/api/stores/" + sid + "/products")
            .then(res => res.json())
            .then(res => { setProducts(res.products) })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [sid])

    const [store, setStore] = useState([])
    useEffect(() => {
        fetch("/api/stores/" + sid )
            .then(res => res.json())
            .then(res => { setStore(res.store) })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [sid])

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
                    <div> {store.name} </div>
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


export default StorePage