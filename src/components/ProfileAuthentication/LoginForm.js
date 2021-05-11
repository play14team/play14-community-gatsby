import React from 'react'
import {Link} from 'gatsby'

const LoginForm = () => {
    return (
        <div className="login-form">
            <h2>Login</h2>

            <form>
                <div className="form-group">
                    <label htmlFor="username">Username or email</label>
                    <input id="username" type="text" className="form-control" placeholder="Username or email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                        <p>
                            <input type="checkbox" id="rememberme" />
                            <label htmlFor="rememberme">Remember me</label>
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                        <Link to="#" className="lost-your-password">
                            Lost your password?
                        </Link>
                    </div>
                </div>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm