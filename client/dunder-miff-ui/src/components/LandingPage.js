import React from "react"

import logo from "./../img/dm-logo.jfif"
import categoriesDump from "./../dump/categories"

import GridItem from "./GridItem"
import { Link } from "react-router-dom"

import productDump from "./../dump/products"

class LandingPage extends React.Component {

    constructor() {
        super()
        this.state = {
            categories: categoriesDump
        }
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
                        <div>to be updated</div>
                    </div>
                    <div className="product-grid">
                        {productDump.map(p => <GridItem
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

export default LandingPage