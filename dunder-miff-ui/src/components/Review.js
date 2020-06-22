import React from "react"

function Review(props) {
    return (
        <div className="review">
            <div className="review-subtitle">
    <div className="review-date">{props.review.createdAt}</div>
                <div className="review-rating">{props.review.rating}/5</div>
            </div>
            <div className="review-content">
                {props.review.content}
            </div>
        </div>
    )
}

export default Review