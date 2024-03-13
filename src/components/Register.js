import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import "../i18n"
import { useTranslation } from "react-i18next";

const Register = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()

        const validationResult = validateForm()
        if (validationResult !== '') {
            toast.error(validationResult)
            return
        }

        const url = '/auth/register'
        const requestBody = {email: email, password: password}

        await axios.post(url, requestBody)
            .then((response) => {
                const message = t("toast_register_registered")
                toast.success(message)
                navigate('/login')
            })
            .catch((error) => {
                const message = error.response.data.message ? error.response.data.message : t("toast_unknownError")
                toast.error(message)
            })
    }

    const validateForm = () => {
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        const minPasswordLength = 7
        var result = ''

        if (!emailPattern.test(email)) {
            result += t("toast_register_wrongEmail")
        }

        if (password.length < minPasswordLength) {
            result += t("toast_register_passwordTooShort")
        }

        if (password !== repeatedPassword) {
            result += t("toast_register_passwordDoesNotRepeat")
        }

        return result
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        navigate("/login")
    }

    return (
        <div>
            <div className="mx-xl-5 mx-lg-5 px-xl-5 px-lg-5">
                <div className="mx-xl-5 mx-lg-5 px-xl-5 px-lg-5">
                    <div className="mx-xl-5 mx-lg-5 px-xl-5 px-lg-5">
                    <section className="py-4">
                            <div className="container">
                                <h2>{t("register_header")}</h2>
                            </div>
                    </section>
                        <div className="mx-5 mb-5">
                            <form>
                                <label className="form-label mb-2">{t("register_email")}</label>
                                <input 
                                    type="text" 
                                    className="form-control mb-3" 
                                    placeholder={t("register_email")}
                                    defaultValue={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className="form-label mb-2">{t("register_password")}</label>
                                <input 
                                    type="password" 
                                    className="form-control mb-3" 
                                    placeholder={t("register_password")}
                                    defaultValue={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <label className="form-label mb-2">{t("register_password_repeat")}</label>
                                <input 
                                    type="password" 
                                    className="form-control mb-3" 
                                    placeholder={t("register_password_repeat")}
                                    defaultValue={repeatedPassword}
                                    onChange={(e) => setRepeatedPassword(e.target.value)}
                                />

                                <input 
                                    type="submit" 
                                    className="btn btn-primary mt-3"
                                    value={t("register_register")}
                                    onClick={handleRegister}
                                />

                                <input 
                                    type="submit" 
                                    className="btn btn-secondary mt-3 mx-3" 
                                    value={t("register_signIn")}
                                    onClick={handleSignIn}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register