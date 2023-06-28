import { useDispatch } from "react-redux"
import { authActions } from "../../store/auth-slice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [username, setUsername] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username)
        dispatch(authActions.login({username}))
        navigate("/dashboard")
    }

    const handleOnChange = (e) => {
        setUsername(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className='.container-md h-100 d-flex align-items-center justify-content-center'>
            <div className="card shadow p-3 mb-5 bg-white rounded">
                <h5 className="d-flex justify-content-center">Login to Sterling UI</h5>
                <div className="card-body">
                    <form className="row g-3">
                        <div className="row g-1 mb-3 d-flex justify-content-center">
                            <div className="form-floating col-7">
                                <input type="text" required className="form-control" id="floatingInput" placeholder="Username" onChange={handleOnChange} />
                                <label htmlFor="floatingInput">Username</label>
                            </div>
                        </div>
                        <div className="row g-1 mb-3 d-flex justify-content-center">
                            <div className="form-floating col-7">
                                <input type="password" required className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                        </div>
                        <div className="row g-1 mb-3 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary col-4" onClick={handleLogin}>Sign in</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}