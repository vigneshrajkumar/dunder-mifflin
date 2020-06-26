import React, { useState } from "react"

import { Link, useHistory } from "react-router-dom"

import logo from "./../img/dm-logo.jfif"

import "./../styles/loginPage.css"

function LoginPage(props) {

    const [loginDetails, setLoginDetails] = useState({})

    function handleChange(e) {
        const { name, value } = e.target
        setLoginDetails((oldState) => ({
            ...oldState,
            [name]: value
        }))
    }

    let history = useHistory()


    function handleSumbit(e) {
        e.preventDefault()

        fetch("/auth/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginDetails)
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === "success") {
                    history.push("/")
                } else {
                    // TODO:: notify user
                    console.log("invalid credentails")
                    alert("invalid credentails");
                }
            })
    }

    return (
        <div className="login-page">
            <div className="left">
                <div className="image-box">
                    <img src={logo} alt="dunder miffln logo" />
                </div>
            </div>
            <div className="right">

                <div className="login-box">
                    <form onSubmit={handleSumbit}>
                        <div className="heading"> {props.sellerRegistration ? "Seller Account" : "Customer Account"} </div>

                        <div className="input-group">
                            <div className="label"> Email: </div>
                            <div className="input-element"> <input type="email" name="email" onChange={handleChange} /> </div>
                        </div>

                        <div className="input-group">
                            <div className="label"> Password: </div>
                            <div className="input-element"> <input type="password" name="password" onChange={handleChange} /> </div>
                        </div>

                        <div className="link"> <Link to="/forgot-password">forgot password?</Link> </div>
                        <div className="submit-button"> <button>Sign In</button> </div>
                        <div className="link"> <Link to="/user/register">create new account</Link> </div>
                        <div className="link"> <Link to="/">go back</Link> </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default LoginPage