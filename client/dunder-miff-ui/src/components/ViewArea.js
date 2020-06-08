import React from "react"

import GridItem from "./GridItem"
import { Link } from "react-router-dom"

import productDump from "./../dump/products"

class ViewArea extends React.Component {

    
    render() {
        return (
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
                    <div>{ this.props.selectedCategory.description}</div>
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
        )
    }
}

export default ViewArea 