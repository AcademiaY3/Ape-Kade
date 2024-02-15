import React from 'react'

export default function ForgotPassword() {
    return (
        <section className="vh-100">
            <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 d-none d-md-block order-2 text-end">
                        <img src="../assets/images/svg-graphics/fp-g.svg" alt className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 order-1 d-flex align-items-center">
                        <div>
                            <div className="mb-lg-9 mb-5">
                                <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
                                <p>Please enter the email address associated with your account and We will email you a link to reset
                                    your password.</p>
                            </div>
                            <form className="needs-validation" noValidate>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="email" className="form-control" id="formForgetEmail" placeholder="Email" required />
                                        <div className="invalid-feedback">Please enter correct password.</div>
                                    </div>
                                    <div className="col-12 d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">Reset Password</button>
                                        <a href="signup.html" className="btn btn-light">Back</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
