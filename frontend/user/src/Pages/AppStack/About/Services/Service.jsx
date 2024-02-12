import React from 'react'

export default function Service() {
    return (
        <>
            {/* section */}
            <section className="bg-success py-14">
                <div className="container">
                    <div className="row">
                        {/* col */}
                        <div className="offset-lg-1 col-lg-10">
                            <div className="row">
                                {/* col */}
                                <div className="col-xl-4 col-md-6">
                                    <div className="text-white me-8 mb-12">
                                        {/* text */}
                                        <h2 className="text-white mb-4">Trusted by retailers. Loved by customers.</h2>
                                        <p>We give everyone access to the food they love and more time to enjoy it together.</p>
                                    </div>
                                </div>
                                <div className="row row-cols-2 row-cols-md-4">
                                    {/* col */}
                                    <div className="col mb-4 mb-md-0">
                                        <h3 className="display-5 fw-bold text-white mb-0">500k</h3>
                                        <span className="fs-6 text-white">Shoppers</span>
                                    </div>
                                    {/* col */}
                                    <div className="col mb-4 mb-md-0">
                                        <h3 className="display-5 fw-bold text-white mb-0">4,500+</h3>
                                        <span className="fs-6 text-white">Cities</span>
                                    </div>
                                    {/* col */}
                                    <div className="col mb-4 mb-md-0">
                                        <h3 className="display-5 fw-bold text-white mb-0">40k+</h3>
                                        <span className="fs-6 text-white">Stores</span>
                                    </div>
                                    {/* col */}
                                    <div className="col mb-4 mb-md-0">
                                        <h3 className="display-5 fw-bold text-white mb-0">650+</h3>
                                        <span className="fs-6 text-white">Retail Brands</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
