import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"
import Review from "./Review"
import SearchBar from "./SearchBar"

function ProductPage() {

    let { sid, pid } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch("/api/stores/" + sid + "/products/" + pid)
            .then(res => res.json())
            .then(res => setProduct(res.product))
        
    }, [sid, pid])

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => { setCategories(res.message) })
            .catch(err => {
                // TODO:: Reditect to 500 error
                console.log(err)
            })
    }, [pid])


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
                <p>{console.log(product)}</p>

                <div className="reviews">
                </div>

            </div>
        </div>

    )
}
export default ProductPage 