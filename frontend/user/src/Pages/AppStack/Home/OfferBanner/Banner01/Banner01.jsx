import React from 'react'

export default function Banner01() {
    return (
        <div className="col-12 col-xl-4 col-lg-6">
            <div className="p-8 mb-3 rounded" style={{ background: 'url(../assets/images/banner/ad-banner-1.jpg) no-repeat', backgroundSize: 'cover' }}>
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
        </div>
    )
}
