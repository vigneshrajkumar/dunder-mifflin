import React from "react"

function Review(props) {
    return (
        <div className="review">
            <div className="review-title">Mike Ross</div>
            <div className="review-subtitle">
                <div className="review-date">15th May 3029</div>
                <div className="review-rating">4/5</div>
            </div>
            <div className="review-content">
                it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </div>
        </div>
    )
}

export default Review