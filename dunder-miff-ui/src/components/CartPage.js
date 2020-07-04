import React, { useState, useEffect } from "react"

import logo from "./../img/dm-logo.jfif"
import SearchResult from "./SearchResult"
import SearchBar from "./SearchBar"
import Categories from "./Categories"
import "./../styles/searchPage.css"


function SearchPage() {


    const [relavantProducts, setRelavantProducts] = useState([]);
    useEffect(() => {
        fetch("/auth/user")
            .then(res => res.json())
            .then(res => setRelavantProducts(res.message.cart))
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [])

    function getStoreItem(store, items) {
        console.log(store, items)
        return (
            <div className="store-item">
                <div className="store-name">{store}</div>

                {/* {items.map(p => (
                    <div className="item">
                        <div className="name">{p.name}</div>
                        <div className="price">{p.price} INR</div>
                    </div>
                ))} */}
                {/* <div className="item">
                    <div className="name">Color sheets</div>
                    <div className="price">250 INR</div>
                </div>
                <div className="item">
                    <div className="name">Highlighers</div>
                    <div className="price">100 INR</div>
                </div> */}
            </div>
        )
    }

    function getCheckoutList() {

        let storeMap = new Map()
        relavantProducts.map(p => storeMap.set(p.storeID, p))


        // <div className="checkout-pane">
        //     <div className="title">Checkout</div>
        //     {<div>{getStoreItem()}</div>
        //         <div>{getStoreItem()}</div>}
        //     <div className="total">
        //         <div>Total:</div>
        //         <div>500 INR</div>
        //     </div>
        //     <div className="footer">
        //         <button>Checkout</button>
        //     </div>
        // </div>   
        return ([
            <div className="checkout-pane">
                <div className="title">Checkout</div>
                {/* {<div>{getStoreItem()}</div> */}
                {storeMap.forEach((k, v) => getStoreItem(k, v) )}
                <div className="total">
                    <div>Total:</div>
                    <div>500 INR</div>
                </div>
                <div className="footer">
                    <button>Checkout</button>
                </div>
            </div>
        ])
    }

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
                    <div> Shopping Cart </div>
                </div>
                {/* <div className="results">
                    <div className="no-results"> no products in cart </div>
                </div> */}
                <div className="results">
                    <div>
                        {relavantProducts.map(p => <SearchResult key={p._id} product={p} />)}
                    </div>
                    <div>
                        <div className="checkout-pane">
                            {/* <div className="title">Checkout</div> */}
                            {getCheckoutList()}
                            {/* <div className="total">
                                <div>Total:</div>
                                <div>500 INR</div>
                            </div> */}
                            {/* <div className="footer">
                                <button>Checkout</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SearchPage