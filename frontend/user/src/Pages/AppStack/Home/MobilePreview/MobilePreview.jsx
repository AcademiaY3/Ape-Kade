import React from 'react'

export default function MobilePreview() {
    return (
        <section className="mt-0">
            {/* contianer */}
            <div className="container">
                <div className="row">
                    {/* col */}
                    <div className="col-12">
                        {/* cta */}
                        <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 text-center text-lg-start rounded">
                            {/* img */}
                            <div className="d-lg-flex align-items-center">
                                <img src="../assets/images/about/about-icons-1.svg" alt className="img-fluid" />
                                {/* text */}
                                <div className="ms-lg-4">
                                    <h1 className="fs-2 mb-1">Welcome to Apekade</h1>
                                    <span>
                                        Download the app get free food &amp;
                                        <span className="text-primary">$30</span>
                                        off on your first order.
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3 mt-lg-0">
                                {/* btn */}
                                <a href="#" className="btn btn-dark">Download Apekade App</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
