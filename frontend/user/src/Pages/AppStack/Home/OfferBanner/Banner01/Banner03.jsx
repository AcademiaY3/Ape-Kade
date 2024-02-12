import React from 'react'

export default function Banner03() {
    return (
        <div className="col-12 col-xl-4 col-lg-6">
            <div className="p-8 mb-3 rounded" style={{ background: 'url(../assets/images/banner/ad-banner-3.jpg) no-repeat', backgroundSize: 'cover' }}>
                <div>
                    {/* Banner Content */}
                    <h3 className="fw-bold mb-3">
                        When in doubt,
                        <br />
                        eat ice cream
                    </h3>
                    <div className="mt-4 mb-5 fs-5">
                        <p className="fs-5 mb-0">
                            Enjoy a scoop of
                            <br />
                            summer today
                        </p>
                    </div>
                    <a href="#" className="btn btn-dark">Shop Now</a>
                </div>
            </div>
        </div>
    )
}
