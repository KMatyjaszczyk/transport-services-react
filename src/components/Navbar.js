import axios from "axios"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Navbar = ({ userIsLoggedIn, setUserIsLoggedIn }) => {
    const navigate = useNavigate()

    const validateToken = async () => {
        const token = localStorage.getItem('token')
        const url = '/auth/validate'
        const data = token ? token : ' '

        let userIsLoggedIn = false

        await axios.post(url, data)
            .then((response) => {
                if (response.status === 200 && response.data.response === true) {
                    userIsLoggedIn = true
                    return
                }
            })
            .catch((error) => {
                console.error(error)
            })
        setUserIsLoggedIn(userIsLoggedIn)
    }

    useEffect(() => {
        validateToken()
    })

    const handleLogout = () => {
        localStorage.removeItem('token')
        setUserIsLoggedIn(!userIsLoggedIn)
        toast.success('User logged out')
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#!">
                <img className="img-fluid" src="img/logo-small.png" alt="Small logo" /> Transport services
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    { userIsLoggedIn && <li className="nav-item"><Link className="nav-link" to="/reservations">Reservations</Link></li> }
                    { userIsLoggedIn ? 
                        <li className="nav-item nav-link" role="button" onClick={handleLogout}>Logout</li> 
                        : <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar