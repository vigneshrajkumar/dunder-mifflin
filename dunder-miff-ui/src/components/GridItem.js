import React from "react"

import { Link } from "react-router-dom"

function GridItem(props) {
    return (
        <Link to={"/stores/"+ props.product.storeID +"/product/" + props.product._id}>
            <div className="grid-item">
                <div className="image-box">
                    <img src="https://source.unsplash.com/random/150x150" alt="product-thumbnail" />
                </div>
                <div className="description-box">
                    <div>
                        {props.product.brand} {props.product.name}
                    </div>
                </div>
                <div className="price-box">
                    <div>₹{props.product.price}</div>
                    <div>3.8/5</div>
                </div>
            </div>
        </Link>
    )
}

export default GridItem