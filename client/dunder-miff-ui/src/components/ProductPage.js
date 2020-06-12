import React from "react"
import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"
import Review from "./Review"


class ProductPage extends React.Component {

    constructor() {
        super()
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    categories: res.message,
                    isLoading: false
                })
            })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }

    render() {
        return (
            <div className="app">
                <div className="category-panel">
                    <div className="logo-box">
                        <img src={logo} alt="dunder-miflin logo" />
                    </div>
                    <div className="category-box">
                        {this.state.categories.map(c =>
                            <div className="category-title" key={c.id}>
                                <Link to={"/category/" + String(c.id) + "/products"}> {c.description} </Link>
                            </div>
                        )}
                    </div>
                </div>
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