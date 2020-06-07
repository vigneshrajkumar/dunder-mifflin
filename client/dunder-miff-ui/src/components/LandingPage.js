import React from "react"



import ViewArea from "./ViewArea"
import CategoryPanel from "./CategoryPanel"


class LandingPage extends React.Component {
    render() {
        return (
            <div className="app">
                <CategoryPanel />
                <ViewArea />
            </div>
        )
    }
}

export default LandingPage