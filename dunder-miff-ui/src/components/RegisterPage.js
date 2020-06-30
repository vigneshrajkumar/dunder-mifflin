import React, { useState } from "react"

import { Link, useHistory } from "react-router-dom"

import logo from "./../img/dm-logo.jfif"

import "./../styles/loginPage.css"


function RegisterPage(props) {

    const [loginDetails, setLoginDetails] = useState({})
    let history = useHistory()

    function handleChange(e) {
        const { name, value } = e.target
        setLoginDetails((oldState) => ({
            ...oldState,
            [name]: value
        }))
    }

    function handleSumbit(e) {
        e.preventDefault()
        console.log("submitting with state: ", loginDetails)

        fetch("/auth/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginDetails)
        })
        .then(res => {
            res.json()
            console.log(res);
            if(res.statusText === "OK") {
                if(props.sellerRegistration){
                    history.push("/seller/inventory")
                }
                alert("Registered Successfully")
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
                        <div className="heading"> {props.sellerRegistration ? "Register Seller Account" : "Customer Seller Account"} </div>

                        <div className="input-group">
                            <div className="label"> Email: </div>
                            <div className="input-element"> <input type="email" name="email" onChange={handleChange} /> </div>
                        </div>

                        <div className="input-group">
                            <div className="label"> Password: </div>
                            <div className="input-element"> <input type="password" name="password" onChange={handleChange} /> </div>
                        </div>

                        <div className="input-group">
                            <div className="label"> Repeat Password: </div>
                            <div className="input-element"> <input type="password" name="repassword" onChange={handleChange} /> </div>
                        </div>

                        {props.sellerRegistration ?
                            <div className="input-group">
                                <div className="label"> Store Name: </div>
                                <div className="input-element"> <input type="input" name="storeName" onChange={handleChange} /> </div>
                            </div> : ""}

                        <div className="submit-button"> <button>Register</button> </div>

                        <div className="link"> <Link to="/">go back</Link> </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default RegisterPage