import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"
import Review from "./Review"
import SearchBar from "./SearchBar"

function ProductPage() {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => { setCategories(res.message) })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [])


    const [reviewInfo, setReviewInfo] = useState({});

    function handleChange(e) {
        const { name, value } = e.target
        setReviewInfo(oldState => ({
            ...oldState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submiting with ", reviewInfo)
        // fetch("stores/:sid/products/:pid/reviews")
    }


    return (
        <div className="app">
            <div className="category-panel">
                <div className="logo-box">
                    <img src={logo} alt="dunder-miflin logo" />
                </div>
                <div className="category-box">
                    {categories.map(c =>
                        <div className="category-title" key={c.id}>
                            <Link to={"/category/" + String(c.id) + "/products"}> {c.description} </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="view-area">
                <SearchBar />
                <div className="title-bar">
                    <div> WS Retail </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <img src="https://via.placeholder.com/200" alt="product-thumbnail" />
                    </div>
                    <div>
                        <div className="product-name">
                            Motor Oil
                            </div>
                        <div className="product-brand">
                            Castrol
                            </div>
                        <div className="product-cost">
                            ₹ 500
                            </div>
                        <div className="product-rating">
                            1/5
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
                        <div><textarea name="content" onChange={handleChange}></textarea></div>
                        <div>
                            <select name="rating" onChange={handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div>
                            <button>Post Review</button>
                        </div>
                    </form>
                </div>
                <div className="reviews">
                    <Review />
                    <Review />
                    <Review />
                </div>

            </div>
        </div>

    )
}
export default ProductPage 