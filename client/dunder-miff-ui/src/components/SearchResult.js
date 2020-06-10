import React from "react"

function SearchResult() {
    return (
        <div className="search-result">
            <div className="image-box">
                <img src="https://via.placeholder.com/100" alt="product-thumbnail" />
            </div>
            <div className="description-box">
                <div className="product-name">Grey Color Paper</div>
                <div className="product-brand">Faber Castell</div>
                <div className="product-seller">Sold by ws retail</div>
            </div>
            <div className="price-rating-box">
                <div>₹ 500</div>
                <div>4/5</div>
            </div>
        </div>
    )
}

export default SearchResult