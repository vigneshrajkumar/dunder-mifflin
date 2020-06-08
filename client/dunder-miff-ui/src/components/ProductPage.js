import React from "react"

import CategoryPanel from "./CategoryPanel"

class ProductPage extends React.Component{
    render(){
        return(
            <div className="app">
            <CategoryPanel categories = {[]} updateCategorySelection={[]} />
            {/* <CategoryPanel categories = {this.state.categories} updateCategorySelection={this.updateCategorySelection} /> */}
            <div> ProductPage </div>
        </div>
        )
    }
}

export default ProductPage 