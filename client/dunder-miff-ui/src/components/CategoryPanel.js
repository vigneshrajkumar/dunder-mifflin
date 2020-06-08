import React from "react"
import logo from "./../img/dm-logo.jfif"



class CategoryPanel extends React.Component {
    render() {
        return (
            <div className="category-panel">
                <div className="logo-box">
                    <img src={logo} alt="dunder-miflin logo" />
                </div>
                <div className="category-box">
                    {this.props.categories.map(c => <div key={c.id} className="category-title"
                        onClick={(e) => {this.props.updateCategorySelection(c.id)}}> {c.description}</div>)}
                </div>
            </div>
        )
    }
}

export default CategoryPanel