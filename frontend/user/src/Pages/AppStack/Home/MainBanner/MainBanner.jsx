import React from 'react'

export default function MainBanner() {
    return (
        <section className="mt-8">
            <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-xxl-8 col-xl-7 d-none d-md-block">
                        <div className="px-8 py-9 mb-6 rounded h-100" style={{ background: 'url(../assets/images/slider/slider-image-3.jpg) no-repeat', backgroundSize: 'cover' }}>
                            <div className="ps-lg-8 col-xxl-7 col-lg-9 py-auto px-8 text-xs-center">
                                {/* badge */}
                                <div className="d-flex align-items-center mb-4">
                                    <span>Exclusive Offer</span>
                                    <span className="badge bg-danger ms-2">15%</span>
                                </div>
                                {/* title */}
                                <h2 className="text-dark display-5 fw-bold mb-3">Best Online Deals, Free Stuff</h2>
                                <p className="fs-5 text-dark">Only on this week... Don’t miss</p>
                                {/* price */}
                                <div className="mt-4">
                                    <span className="text-dark">
                                        Start from
                                        <span className="fs-4 text-danger ms-1">$5.99</span>
                                    </span>
                                </div>
                                {/* desc */}
                                <div className="mb-4">
                                    <span className="text-dark">
                                        Grab yours now and save big! Unbeatable deals, exclusive discounts – limited stock.
                                        Elevate your experience, shop smarter. Your satisfaction, our priority. Act fast, seize
                                        the savings. Upgrade your lifestyle, join the revolution. Your wallet will thank you. Grab
                                        your now and save more!
                                    </span>
                                </div>
                                {/* btn */}
                                <a href="#!" className="btn btn-primary" tabIndex={-1}>
                                    Get Best Deal
                                    <i className="feather-icon icon-arrow-right ms-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xxl-4 col-xl-5 col-12 d-lg-flex d-xl-block gap-3 gap-xl-0">
                        <div className="flex-fill px-8 py-9 mb-6 rounded" style={{ background: 'url(../assets/images/banner/ad-banner-1.jpg) no-repeat', backgroundSize: 'cover' }}>
                            <div>
                                <h3 className="mb-0 fw-bold">
                                    10% cashback on
                                    <br />
                                    personal care
                                </h3>
                                <div className="mt-4 mb-5 fs-5">
                                    <p className="mb-0">Max cashback: $12</p>
                                    <span>
                                        Code:
                                        <span className="fw-bold text-dark">CARE12</span>
                                    </span>
                                </div>
                                <a href="#" className="btn btn-dark">Shop Now</a>
                            </div>
                        </div>
                        <div className="flex-fill px-8 py-8 rounded" style={{ background: 'url(../assets/images/banner/ad-banner-2.jpg) no-repeat', backgroundSize: 'cover' }}>
                            {/* Banner Content */}
                            <div>
                                {/* Banner Content */}
                                <h3 className="fw-bold mb-3">
                                    Say yes to
                                    <br />
                                    season’s fresh
                                </h3>
                                <div className="mt-4 mb-5 fs-5">
                                    <p className="fs-5 mb-0">
                                        Refresh your day
                                        <br />
                                        the fruity way
                                    </p>
                                </div>
                                <a href="#" className="btn btn-dark">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
