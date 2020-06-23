import React, { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"
import Review from "./Review"
import SearchBar from "./SearchBar"
import Categories from "./Categories"

function ProductPage() {

    let { sid, pid } = useParams();
    const [product, setProduct] = useState({})
    const [reviewInfo, setReviewInfo] = useState([]);

    const [content, setContent] = useState("");
    const [rating, setRating] = useState(1);

    useEffect(() => {
        fetch("/api/stores/" + sid + "/products/" + pid)
            .then(res => res.json())
            .then((res => {
                console.log("Effect invoked. ", res)
                setProduct(res.product)
                setReviewInfo(res.product.reviews)
            }),
                (error) => {
                    console.log("error ecnountered", error)
                })
    }, [sid, pid])



    function handleSubmit(e) {
        e.preventDefault();
        reviewInfo.push({
            content: content,
            rating: rating
        })
        console.log("submiting with ", reviewInfo);
        fetch("/api/stores/" + sid + "/products/" + pid + "/reviews", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reviews: reviewInfo
            })
        })
        .then((res) => {
            console.log(res)
        }, (error) => {
            console.log(error)
        })
    }


    return (
        <div className="app">
            <div className="category-panel">
                <div className="logo-box">
                    <img src={logo} alt="dunder-miflin logo" />
                </div>
                <div className="category-box">
                    <Categories />
                </div>
            </div>
            <div className="view-area">
                <SearchBar />
                <div className="title-bar">
                    <div>{sid}  </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <img src="https://via.placeholder.com/200" alt="product-thumbnail" />
                    </div>
                    <div>
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-brand">
                            {product.brand}
                        </div>
                        <div className="product-cost">
                            ₹  {product.price}
                        </div>
                        <div className="product-rating">
                            -1/5
                            </div>
                        <div className="product-buttons">
                            <button> Buy Now </button>
                            <button> Add to Cart </button>
                        </div>
                    </div>
                </div>
                <div className="review-header">
                    <form onSubmit={handleSubmit}>
                        <div className="title">Reviews</div>
                        <div>
                            <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>
                        <div>
                            <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div>
                            <input type="submit" value="Post Review" />
                        </div>
                    </form>
                </div>

                <div className="reviews">
                    {reviewInfo.map(r => <Review key={reviewInfo.indexOf(r)} review={r} />)}
                </div>
            </div>
        </div>

    )
}
export default ProductPage 