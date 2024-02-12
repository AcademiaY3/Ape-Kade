import React from 'react'

export default function Banner02() {
    return (
        <div className="col-12 col-xl-4 col-lg-6">
            <div className="p-8 mb-3 rounded" style={{ background: 'url(../assets/images/banner/ad-banner-2.jpg) no-repeat', backgroundSize: 'cover' }}>
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
    )
}
