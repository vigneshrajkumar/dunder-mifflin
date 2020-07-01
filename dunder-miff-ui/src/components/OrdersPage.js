import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"

export default function OrdersPage(props) {
    const [listedProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/stores/-1/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
            })
    }, [])

    return (
        <div className="app">
            <div className="category-panel">
                <div className="logo-box">
                    <img src={logo} alt="dunder-miflin logo" />
                </div>
                <div className="category-box">
                    <div className="category-title"> <Link to="/seller/inventory"> Inventory </Link></div>
                </div>
            </div>
            <div className="view-area">
                <div className="search-bar">
                    <div className="store-name"> Cloudtail Retail India Pvt Ltd </div>
                    <div></div>
                    <div className="links">
                        <Link to="/logout"> Log Out </Link>
                    </div>
                </div>
                <div className="title-bar">
                    <div>Orders</div>
                </div>
                <div className="listed-products">
                    <div className="heading">
                        Listed Products
                        </div>
                    <div className="product-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Brand</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listedProducts.map(p => <tr key={p._id} ><td>{p.name}</td><td>{p.brand}</td><td>{p.category}</td><td>{p.quantity}</td><td>4/5</td></tr>)}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}