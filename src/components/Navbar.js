import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import DarkModeDropdown from "./DarkModeDropdown";
import LanguageDropdown from "./LanguageDropdown";
import "../i18n"
import { useTranslation } from "react-i18next";

const Navbar = ({ userIsLoggedIn, setUserIsLoggedIn }) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    useEffect(() => {
        validateToken()
    }, [])

    const validateToken = async () => {
        const token = localStorage.getItem('token')
        const url = '/auth/validate'
        const data = token ? token : ' '
    
        let loggedIn = false
    
        await axios.post(url, data)
            .then((response) => {
                if (response.status === 200 && response.data.response === true) {
                    loggedIn = true
                    return
                }
            })
            .catch((error) => {
                console.error(error)
            })
        setUserIsLoggedIn(loggedIn)
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setUserIsLoggedIn(!userIsLoggedIn)
        toast.success(t("toast_login_userLoggedOut"))
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#!">
                <img className="img-fluid" src="img/logo-small.png" alt="Small logo" /> {t("transport_services")}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li><LanguageDropdown></LanguageDropdown></li>
                    <li><DarkModeDropdown></DarkModeDropdown></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">{t("about")}</Link></li>
                    { userIsLoggedIn && <li className="nav-item"><Link className="nav-link" to="/reservations">{t("reservations")}</Link></li> }
                    { userIsLoggedIn ? 
                        <li className="nav-item nav-link" role="button" onClick={handleLogout}>{t("logout")}</li>
                        : <li className="nav-item"><Link className="nav-link" to="/login">{t("login")}</Link></li>
                    }
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar