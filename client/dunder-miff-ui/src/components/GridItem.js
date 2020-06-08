import React from "react"

function GridItem(props) {
    return (
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
    )
}

export default GridItem