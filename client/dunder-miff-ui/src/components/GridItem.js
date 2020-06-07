import React from "react"

function GridItem() {
    return (
        <div className="grid-item">
            <div className="image-box">
                <img src="https://via.placeholder.com/200" alt="product-thumbnail" />
            </div>
            <div className="description-box">
                <div>
                    Cello A3 Color Papers
                </div>
            </div>
            <div className="price-box">
                <div>₹200</div>
                <div>4/5</div>
            </div>
        </div>
    )
}

export default GridItem