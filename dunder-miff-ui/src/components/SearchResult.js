import React from "react"

import {Link} from "react-router-dom"

function SearchResult(props) {
    return (
        <div className="search-result">
            <div className="image-box">
                <img src="https://via.placeholder.com/100" alt="product-thumbnail" />
            </div>
            <div className="description-box">
                <Link to={"/store/"+props.product.storeID+"/product/" + props.product._id}> <div className="product-name">{props.product.name}</div> </Link>
                <div className="product-brand">{props.product.brand}</div>
                <div className="product-seller">Sold by {props.product.storeID}</div>
            </div>
            <div className="price-rating-box">
                <div>₹ {props.product.price}</div>
                <div>{props.product.reviews.length}/5</div>
            </div>
        </div>
    )
}

export default SearchResult