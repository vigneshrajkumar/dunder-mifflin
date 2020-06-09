import React from "react"

import { Link } from "react-router-dom"

function GridItem(props) {
    return (
        <Link to="/store/1/product/6">
            <div className="grid-item">
                <div className="image-box">
                    <img src={props.product_image} alt="product-thumbnail" />
                </div>
                <div className="description-box">
                    <div>
                        {props.brand} {props.description}
                    </div>
                </div>
                <div className="price-box">
                    <div>₹{props.price}</div>
                    <div>{props.rating}/5</div>
                </div>
            </div>
        </Link>
    )
}

export default GridItem