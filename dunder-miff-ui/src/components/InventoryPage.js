import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"

export default function InventoryPage(props) {

    const [categories, setCategories] = useState([]);
    const [listedProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => {
                setCategories(res.message)
            })

        fetch("/api/stores/-1/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res.products)
            })
    }, [])

    function handleChange(event) {

    }

    function addItem(event) {
        event.preventDefault();
        fetch("/api/stores/-1/products/-1", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        })
            .then(res => console.log(res))
    }

    return (
        <div className="app">
            <div className="category-panel">
                <div className="logo-box">
                    <img src={logo} alt="dunder-miflin logo" />
                </div>
                <div className="category-box">
                    <div className="category-title"> <Link to="/seller/orders"> Orders </Link></div>
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
                    <div>Inventory</div>
                </div>
                <div className="add-product">
                    <form onSubmit={addItem}>
                        <div className="heading">
                            Add Product
                        </div>
                        <div className="add-product-form">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="label">Name: </td>
                                        <td className="field"><input type="text" placeholder="A4 Paper Folder" name="name" onChange={handleChange} /></td>
                                        <td className="label">Price: </td>
                                        <td className="field"><input type="number" name="price" onChange={handleChange} /></td>
                                        <td className="label">Category: </td>
                                        <td className="field">
                                            <select name="category" onChange={handleChange}>
                                                {categories.map(c => <option key={c._id} value={c._id}>{c.description}</option>)}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="label">Brand: </td>
                                        <td className="field"><input type="text" placeholder="Faber-Castell" name="brand" onChange={handleChange} /> </td>
                                        <td className="label">Quantity: </td>
                                        <td className="field"><input type="number" name="quantity" onChange={handleChange} /></td>
                                        <td className="label">Image: </td>
                                        <td className="field"><input type="file" name="product-image" onChange={handleChange} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="add-product-footer">
                            <button>Add Product</button>
                        </div>
                    </form>
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