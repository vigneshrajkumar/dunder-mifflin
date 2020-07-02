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
            {categories === [] ? "loading.." :
                categories.map(c =>
                    <div className="category-title" key={c.id}>
                        <Link to={"/categories/" + String(c.id) + "/products"}> {c.description} </Link>
                    </div>
                )}
        </div>
    )
}
export default Categories