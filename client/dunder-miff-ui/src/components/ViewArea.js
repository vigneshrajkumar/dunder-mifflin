import React from "react"

import GridItem from "./GridItem"
import { Link } from "react-router-dom"
class ViewArea extends React.Component {
    render() {
        return (
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
                    <div>Popular</div>
                </div>
                <div className="product-grid">
                    <GridItem />
                    <GridItem />
                </div>
            </div>
        )
    }
}

export default ViewArea 