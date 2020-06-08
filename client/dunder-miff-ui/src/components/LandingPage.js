import React from "react"

import ViewArea from "./ViewArea"
import CategoryPanel from "./CategoryPanel"

import categoriesDump from "./../dump/categories"

class LandingPage extends React.Component {

    constructor(){
        super()
        this.state = {
            selectedCategoryID: 0,
            categories: categoriesDump
        }
        this.updateCategorySelection = this.updateCategorySelection.bind(this)
    }

    updateCategorySelection(newSelectionID){
        this.setState({
            selectedCategoryID: newSelectionID
        })
    }

    render() {
        return (
            <div className="app">
                <CategoryPanel categories = {this.state.categories} updateCategorySelection={this.updateCategorySelection} />
                <ViewArea selectedCategory={this.state.categories[this.state.selectedCategoryID]} />
            </div>
        )
    }
}

export default LandingPage