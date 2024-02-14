import React from 'react'

export default function AboutCard() {
    return (
        <>
            <div className="col-md-3">
                {/* card */}
                <div className="card bg-light mb-6 border-0">
                    {/* card body */}
                    <div className="card-body p-8">
                        <div className="mb-4 d-flex flex-row justify-content-center align-items-center">
                            {/* img */}
                            <img src="../assets/images/about/about-icons-1.svg" alt />
                        </div>
                        <h4>Grow my business with Apekade</h4>
                        <p>Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
                        {/* btn */}
                        <a href="#" className="btn btn-dark mt-2">Apekade Platform</a>
                    </div>
                </div>
            </div>
        </>
    )
}
