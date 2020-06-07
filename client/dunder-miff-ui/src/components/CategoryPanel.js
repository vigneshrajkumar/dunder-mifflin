import React from "react"
import logo from "./../img/dm-logo.jfif"

class CategoryPanel extends React.Component {
    render() {
        return(
            <div className="category-panel">
                <div className="logo-box">
                    <img src={logo} alt="dunder-miflin logo" />
                </div>
                <div className="category-box">
                    <div className="category-title">Popular</div>
                    <div className="category-title">Pens and Stationery</div>
                    <div className="category-title">Art Supplies</div>
                    <div className="category-title">Notebooks</div>
                    <div className="category-title">Electronics</div>
                    <div className="category-title">Files and Folders</div>
                    <div className="category-title">Desk Organizers</div>
                </div>
            </div>
        )
    }
}

export default CategoryPanel