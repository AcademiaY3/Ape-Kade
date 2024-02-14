import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error404() {
    const navigate = useNavigate()
    const handleBackToHome = () => {
        navigate('/app')
    }
    return (
        <section>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                {/* row */}
                <div className="row min-vh-100 justify-content-center align-items-center">
                    {/* col */}
                    <div className="col-12 ">
                        <div className="row">
                            {/* content */}
                            <div className="col-12">
                                <div className='text-center'>
                                    {/* img */}
                                    <img src="/assets/images/svg-graphics/error.svg" alt className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text-center">
                                    <h1>Something’s wrong here...</h1>
                                    <p className="mb-8 text-capitalize">
                                        We can’t find the page you’re looking for,back to home.
                                        <br />
                                        Check out our help center for help 
                                    </p>
                                    {/* btn */}
                                    <button onClick={()=>{handleBackToHome()}} className="btn btn-primary ms-2">Back to home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
