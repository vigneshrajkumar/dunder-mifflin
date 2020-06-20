import React from "react"


import logo from "./../img/dm-logo.jfif"
// import categoriesDump from "./../dump/categories"

import GridItem from "./GridItem"
import { Link } from "react-router-dom"

// import this.state.products from "./../dump/products"

class StorePage extends React.Component {

    constructor() {
        super()
        this.state = {
            products: [],
            categories: []
        }
    }
    componentDidMount() {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    categories: res.message,
                    isLoading: false
                })
            })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })


        //TODO: To fetch current category from URL and make the appropriate request
        fetch("/api/categories/1/products")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res.message,
                    isLoading: false
                })
            })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }


    render() {
        return (
            <div className="app">
                <div className="category-panel">
                    <div className="logo-box">
                        <img src={logo} alt="dunder-miflin logo" />
                    </div>
                    <div className="category-box">
                        {this.state.categories.map(c =>
                            <div className="category-title" key={c.id}>
                                <Link to={"/category/" + String(c.id) + "/products"}> {c.description} </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="view-area">
                    <div className="search-bar">
                        <div>
                            <input type="input" placeholder="Search"></input>
                        </div>
                        <div></div>
                        <div className="links">
                            <Link to="/user/login"> Login </Link>
                        </div>
                    </div>
                    <div className="title-bar">
                        <div>Cloudtail Retail India</div>
                    </div>
                    <div className="product-grid">
                        {this.state.products.map(p => <GridItem
                            key={p.id}
                            brand={p.brand}
                            description={p.description}
                            product_image={p.product_image}
                            price={p.price}
                            rating={p.reviews.length}
                        />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default StorePage