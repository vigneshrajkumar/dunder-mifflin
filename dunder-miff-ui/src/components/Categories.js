import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(res => setCategories(res.message))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {categories.map(c =>
                <div className="category-title" key={c._id}>
                    <Link to={"/categories/" + c._id + "/products"}> {c.content} </Link>
                </div>
            )}
        </div>
    )
}
export default Categories