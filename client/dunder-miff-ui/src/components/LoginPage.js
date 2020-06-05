import React from "react"

import { Link } from "react-router-dom"

import logo from "./../img/dm-logo.jfif"

class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="left-section">
                    <div></div>
                    <div>
                       <center> <img src={logo} alt="dunder mifflin logo"></img></center>
                    </div>
                    <div> <p>This site is a work of fiction, all trademarks belongs to the respective owners</p> </div>
                </div>

                <div className="right-section">
                    <div></div>
                    <div className="form-container">
                        <form>
                            <h2><center>Seller Account</center></h2>
                            <div className="label-aider"><h3>Email:</h3></div>
                            <div><input input="text" placeholder="michael@dm.com" name="email" /></div>
                            <br />
                            <div className="label-aider"><h3>Password:</h3></div>
                            <div><input input="password" placeholder="********" name="password" /></div>
                            <div className="aider"><Link to="/seller/reset">forgot password?</Link></div>
                            <div className="aider"><button input="submit"> Sign In</button></div>
                            <div className="aider"><Link to="/seller/register">register with us</Link></div>
                            <div className="aider"><Link to="/">go back</Link></div>
                        </form>
                    </div>
                    <div></div>

                </div>
            </div>
        )
    }
}
export default LoginPage