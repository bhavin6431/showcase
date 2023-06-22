import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [loginState, setLoginState] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        console.log(loginState)
        navigate("/trivia", { state: loginState })
    }

    function handleOnChange(event) {
        setLoginState(pevLoginData => { return { ...pevLoginData, [event.target.name]: event.target.value } })

    }

    return (

        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            name="password"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );

}