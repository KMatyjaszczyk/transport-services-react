import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login = ({ userIsLoggedIn, setUserIsLoggedIn }) => {
    const navigate = useNavigate()

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
                toast.success('User logged in')
                navigate('/about')
            })
            .catch((error) => { 
                const message = error.response.data.message ? error.response.data.message : 'Unknown error'
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
                                <h2>Sign in</h2>
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

                                <input 
                                    type="submit" 
                                    className="btn btn-primary mt-3 mr-5" 
                                    value="Login" 
                                    onClick={handleLogin}
                                />
                                <input 
                                    type="submit" 
                                    className="btn btn-secondary mt-3 mx-3"
                                    value="Sign up" 
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