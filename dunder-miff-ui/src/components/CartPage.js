import React, { useState, useEffect } from "react"

import logo from "./../img/dm-logo.jfif"
import SearchResult from "./SearchResult"
import SearchBar from "./SearchBar"
import Categories from "./Categories"
import "./../styles/searchPage.css"

function SearchPage() {


    const [relavantProducts, setRelavantProducts] = useState([]);
    useEffect(() => {
        // TODO: Sanitize params & update query for cart items
        fetch("/api/categories/1/products")
            .then(res => res.json())
            .then(res => setRelavantProducts(res.message))
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [])

    function getStoreItem() {
        return(
            <div className="store-item">
                <div className="store-name">WS Retail</div>
                <div className="item">
                    <div className="name">Color sheets</div>
                    <div className="price">250 INR</div>
                </div>
                <div className="item">
                    <div className="name">Highlighers</div>
                    <div className="price">100 INR</div>
                </div>
            </div>
        )
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
                            <div className="title">Checkout</div>
                            <div>{getStoreItem()}</div>
                            <div>{getStoreItem()}</div>
                            <div className="total">
                                <div>Total:</div>
                                <div>500 INR</div>
                            </div>
                            <div className="footer">
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SearchPage