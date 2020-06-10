import React from "react"


import logo from "./../img/dm-logo.jfif"
import categoriesDump from "./../dump/categories"

import GridItem from "./GridItem"
import { Link } from "react-router-dom"

import productDump from "./../dump/products"

class StorePage extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedCategoryID: 0,
            categories: categoriesDump
        }
        this.updateCategorySelection = this.updateCategorySelection.bind(this)
    }

    updateCategorySelection(newSelectionID) {
        this.setState({
            selectedCategoryID: newSelectionID
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
                        {categoriesDump.map(c =>
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

export default StorePage