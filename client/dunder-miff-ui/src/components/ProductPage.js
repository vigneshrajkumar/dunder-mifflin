import React from "react"
import { Link } from "react-router-dom"

import CategoryPanel from "./CategoryPanel"
import Review from "./Review"

import categoriesDump from "./../dump/categories"

class ProductPage extends React.Component {
    render() {
        return (
            <div className="app">
                <CategoryPanel categories={categoriesDump} />
                <div className="view-area">
                    <div className="search-bar">
                        <div>
                            <input type="input" placeholder="Search"></input>
                        </div>
                        <div></div>
                        <div className="links">
                            <Link to="/user/login"> Login </Link>
                        </div>
                    </div>
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
                        <div className="title">Reviews</div>
                        <div><textarea></textarea></div>
                        <div>
                            <select>
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
}

export default ProductPage 