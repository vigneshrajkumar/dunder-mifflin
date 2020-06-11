import React from "react"
import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"

class InventoryPage extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="category-panel">
                    <div className="logo-box">
                        <img src={logo} alt="dunder-miflin logo" />
                    </div>
                    <div className="category-box">
                        <div className="category-title"> <Link to="/inventory"> Inventory </Link></div>
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
                        <div className="heading">
                            Add Product
                        </div>
                        <div className="add-product-form">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="label">Name: </td>
                                        <td className="field"><input type="text" placeholder="A4 Paper Folder" name="name" /></td>
                                        <td className="label">Price: </td>
                                        <td className="field"><input type="number" name="price" /></td>
                                        <td className="label">Category: </td>
                                        <td className="field">
                                            <select>
                                                <option>Art Supplies</option>
                                                <option>Folders and Organizers</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="label">Brand: </td>
                                        <td className="field"><input type="text" placeholder="Faber-Castell" name="brand" /> </td>
                                        <td className="label">Quantity: </td>
                                        <td className="field"><input type="number" name="quantity" /></td>
                                        <td className="label">Image: </td>
                                        <td className="field"><input type="file" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="add-product-footer">
                            <button>Add Product</button>
                        </div>
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
                                    <tr>
                                        <td>Paper Holders</td>
                                        <td>Faber Castell</td>
                                        <td>Office Supplies</td>
                                        <td>25</td>
                                        <td>4/5</td>
                                    </tr>
                                    <tr>
                                        <td>Paper Holders</td>
                                        <td>Faber Castell</td>
                                        <td>Office Supplies</td>
                                        <td>25</td>
                                        <td>4/5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default InventoryPage 