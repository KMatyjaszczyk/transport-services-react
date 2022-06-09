const Login = () => {
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
                                <input type="text" className="form-control mb-3" placeholder="Login" />

                                <label className="form-label mb-2">Password</label>
                                <input type="password" className="form-control mb-3" placeholder="Hasło" />


                                <input type="submit" value="Login" className="btn btn-primary mt-3 mr-5" />
                                <input type="submit" value="Sign up" className="btn btn-secondary mt-3 mx-3" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login