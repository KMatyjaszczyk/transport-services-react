import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "../i18n"
import { useTranslation } from "react-i18next";

const Login = ({ userIsLoggedIn, setUserIsLoggedIn }) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        
        const url = '/auth/login'
        const requestBody = {username: email, password: password}

        await axios.post(url, requestBody)
            .then((response) => {
                const token = response.data.jwt
                localStorage.setItem('token', token)
                setUserIsLoggedIn(!userIsLoggedIn)
                toast.success(t("toast_login_userLoggedIn"))
                navigate('/about')
            })
            .catch((error) => { 
                const message = error.response.data.message ? error.response.data.message : t("toast_unknownError")
                toast.error(message)
            })
        
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        navigate('/register')
    }

    return (
        <div>
            <div className="mx-xl-5 mx-lg-5 px-xl-5 px-lg-5">
                <div className="mx-xl-5 mx-lg-5 px-xl-5 px-lg-5">
                    <div className="mx-xl-5 mx-lg-5 px-xl-5 px-lg-5">
                    <section className="py-4">
                            <div className="container">
                                <h2>{t('login_signIn')}</h2>
                            </div>
                    </section>
                        <div className="mx-5 mb-5">
                            <form>
                                <label className="form-label mb-2">{t('login_email')}</label>
                                <input 
                                    type="text" 
                                    className="form-control mb-3" 
                                    placeholder={t('login_email')}
                                    defaultValue={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className="form-label mb-2">{t('login_password')}</label>
                                <input 
                                    type="password" 
                                    className="form-control mb-3" 
                                    placeholder={t('login_password')}
                                    defaultValue={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <input 
                                    type="submit" 
                                    className="btn btn-primary mt-3 mr-5" 
                                    value={t("login_login")}
                                    onClick={handleLogin}
                                />
                                <input 
                                    type="submit" 
                                    className="btn btn-secondary mt-3 mx-3"
                                    value={t("login_signUp")}
                                    onClick={handleSignUp}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login