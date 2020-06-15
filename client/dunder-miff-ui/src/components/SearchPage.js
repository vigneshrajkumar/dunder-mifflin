import React from "react"

import { Link } from "react-router-dom"
import logo from "./../img/dm-logo.jfif"
import SearchResult from "./SearchResult"

class SearchPage extends React.Component {

    constructor() {
        super()
        this.state = {
            categories: [],
            searchTerm: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
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

    handleSearch(event){
        console.log("search with ", this.state.searchTerm)
        event.preventDefault();
    }

    handleSearchTermChange(event){
        this.setState({searchTerm: event.target.value})
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
                                <Link to={"/categories/" + String(c.id) + "/products"}> {c.description} </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="view-area">
                    <div className="search-bar">
                        <div>
                            <form onSubmit={this.handleSearch}>
                                <input type="input" name="search" placeholder="Search" onChange={this.handleSearchTermChange}></input>
                            </form>
                        </div>
                        <div></div>
                        <div className="links">
                            <Link to="/user/login"> Login </Link>
                        </div>
                    </div>
                    <div className="title-bar">
                        <div> Showing results for <span> color papers </span> </div>
                    </div>
                    <div className="results">
                        <SearchResult />
                        <SearchResult />
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchPage