import React from 'react'

export default function DashOrders() {
    return (
        <div className="col-lg-4 col-12 mb-6">
            {/* card */}
            <div className="card h-100 ">
                {/* card body */}
                <div className="card-body p-6">
                    {/* heading */}
                    <div className="d-flex justify-content-between align-items-center mb-6">
                        <div>
                            <h4 className="mb-0 fs-5">Orders</h4>
                        </div>
                        <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                            <i className="fa-solid fa-cart-shopping fs-5" />
                        </div>
                    </div>
                    {/* project number */}
                    <div className="lh-1">
                        <h1 className="mb-2 fw-bold fs-2">42,339</h1>
                        <span>
                            <span className="text-dark me-1">35+</span>
                            New Sales
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
