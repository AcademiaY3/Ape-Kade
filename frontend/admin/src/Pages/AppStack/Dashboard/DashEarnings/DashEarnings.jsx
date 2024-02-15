import React from 'react'

export default function DashEarnings() {
    return (
        <div className="col-lg-4 col-12 mb-6">
            {/* card */}
            <div className="card-lg h-100 ">
                {/* card body */}
                <div className="card-body p-6">
                    {/* heading */}
                    <div className="d-flex justify-content-between align-items-center mb-6">
                        <div>
                            <h4 className="mb-0 fs-5">Earnings</h4>
                        </div>
                        <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                            <i className="fa-solid fa-dollar fs-5" />
                        </div>
                    </div>
                    {/* project number */}
                    <div className="lh-1">
                        <h1 className="mb-2 fw-bold fs-2">$93,438.78</h1>
                        <span>Monthly revenue</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
