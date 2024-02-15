import React from 'react'

export default function DashCustomer() {
    return (
        <div className="col-lg-4 col-12 mb-6">
            {/* card */}
            <div className="card-lg h-100 ">
                {/* card body */}
                <div className="card-body p-6">
                    {/* heading */}
                    <div className="d-flex justify-content-between align-items-center mb-6">
                        <div>
                            <h4 className="mb-0 fs-5">Customer</h4>
                        </div>
                        <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                            <i className="fa-solid fa-people-group fs-5" />
                        </div>
                    </div>
                    {/* project number */}
                    <div className="lh-1">
                        <h1 className="mb-2 fw-bold fs-2">39,354</h1>
                        <span>
                            <span className="text-dark me-1">30+</span>
                            new in 2 days
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
