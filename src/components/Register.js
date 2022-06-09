import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Register = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()

        const url = '/auth/register'
        const requestBody = {email: email, password: password}

        await axios.post(url, requestBody)
            .then((response) => {
                console.log(response)
                const message = `User with email ${email} succesfully registered`
                toast.success(message)
                navigate('/login')
            })
            .catch((error) => {
                const message = error.response.data.message ? error.response.data.message : 'Unknown error'
                toast.error(message)
            })
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
                                <h2>Sign up</h2>
                            </div>
                    </section>
                        <div className="mx-5 mb-5">
                            <form>
                                <label className="form-label mb-2">Email</label>
                                <input 
                                    type="text" 
                                    className="form-control mb-3" 
                                    placeholder="Login" 
                                    defaultValue={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className="form-label mb-2">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control mb-3" 
                                    placeholder="Password" 
                                    defaultValue={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <label className="form-label mb-2">Repeat password</label>
                                <input 
                                    type="password" 
                                    className="form-control mb-3" 
                                    placeholder="Password" 
                                    defaultValue={repeatedPassword}
                                    onChange={(e) => setRepeatedPassword(e.target.value)}
                                />

                                <input 
                                    type="submit" 
                                    className="btn btn-primary mt-3"
                                    value="Register" 
                                    onClick={handleRegister}
                                />

                                <input 
                                    type="submit" 
                                    className="btn btn-secondary mt-3 mx-3" 
                                    value="Sign in" 
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