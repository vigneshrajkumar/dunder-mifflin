import React from "react"
import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"

class OrdersPage extends React.Component {

    constructor() {
        super()

        this.state = {
            categories: [],
            listedProducts: [],

            // form related
            name: "",
            brand: "",
            quantity: 0,
            price: 0,
            category: "",
            image: ""

        }

        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => this.setState({
                categories: res.message
            }))

        fetch("/api/stores/-1/products")
            .then(res => res.json())
            .then(res => this.setState({
                listedProducts: res.products
            }))
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    addItem(event) {
        event.preventDefault();
        fetch("/api/stores/-1/products/-1", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                brand: this.state.brand,
                quantity: this.state.quantity,
                price: this.state.price,
                category: this.state.category,
                image: this.image
            })
        })
            .then(res => console.log(res))
    }

    render() {
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
                                    {this.state.listedProducts.map(p => <tr key={p._id} ><td>{p.name}</td><td>{p.brand}</td><td>{p.category}</td><td>{p.quantity}</td><td>4/5</td></tr>)}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default OrdersPage 