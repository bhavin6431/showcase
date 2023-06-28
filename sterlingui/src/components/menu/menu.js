import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
export default function Menu() {

    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.username)
    const navigate = useNavigate()
    const handleMenuItem = (e) => {
        e.preventDefault();
        if (e.target.name === "logout") {
            dispatch(authActions.logout())
            navigate("/login")
        } else {
            navigate("/" + e.target.name)
        }
    }

    return (

        <nav class="navbar navbar-expand-sm navbar-light bg-success border border-primary rounded">
            <div class="container-fluid ">
                <a className="navbar-brand" href="" name="dashboard" onClick={handleMenuItem}>Dashboard</a>
                <a className="navbar-brand" href="" name="candidates" onClick={handleMenuItem}>Candidates</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a className="navbar-brand" onClick={(e) => e.preventDefault()}>Current User : {username}</a>
                        </li>
                        <li class="nav-item">
                            <a className="navbar-brand" href="" name="logout" onClick={handleMenuItem}>Logout</a>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}