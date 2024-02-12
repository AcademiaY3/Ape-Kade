import React from 'react'

export default function CheckoutForm() {
    return (
        <div className="col-lg-7 col-md-12">
            {/* accordion item */}
            <div className="py-4">
                <div className="mt-0">
                    {/* card */}
                    <div className="card card-bordered shadow-none mb-2">
                        {/* card body */}
                        <div className="card-body p-6">
                            <div className="d-flex mb-4">
                                <div>
                                    <h5 className="mb-1 h6">Billing Address</h5>
                                </div>
                            </div>
                            <div className="row g-2">
                                <div className="col-6">
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" required />
                                </div>
                                <div className="col-6">
                                    {/* button */}
                                    <select className="form-select">
                                        <option selected>India</option>
                                        <option value={1}>UK</option>
                                        <option value={2}>USA</option>
                                        <option value={3}>UAE</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    {/* button */}
                                    <select className="form-select">
                                        <option selected>Gujarat</option>
                                        <option value={1}>Northern Ireland</option>
                                        <option value={2}>Alaska</option>
                                        <option value={3}>Abu Dhabi</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    {/* button */}
                                    <input type="text" className="form-control" placeholder="Zip Code" />
                                </div>
                                <div className="col-4">
                                    {/* button */}
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-4">
                                    {/* button */}
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-4">
                                    {/* button */}
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-12">
                                    <div className="d-flex mt-4 mb-1">
                                        <div>
                                            <h5 className="mb-1 h6">Credit / Debit Card</h5>
                                            <p className="mb-0 small">Safe money transfer using your bank accou k account. We
                                                support Mastercard tercard, Visa, Discover and Stripe.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* input */}
                                    <div className="mb-3">
                                        <label className="form-label">Card Number</label>
                                        <input type="text" className="form-control" placeholder="1234 4567 6789 4321" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    {/* input */}
                                    <div className="mb-3 mb-lg-0">
                                        <label className="form-label">Name on card</label>
                                        <input type="text" className="form-control" placeholder="Enter your first name" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-12">
                                    {/* input */}
                                    <div className="mb-3 mb-lg-0 position-relative">
                                        <label className="form-label">Expiry date</label>
                                        <input className="form-control flatpickr" type="text" placeholder="Select Date" />
                                        <div className="position-absolute bottom-0 end-0 p-3 lh-1">
                                            <i className="bi bi-calendar text-muted" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12">
                                    {/* input */}
                                    <div className="mb-3 mb-lg-0">
                                        <label className="form-label">CVV code</label>
                                        <input type="password" className="form-control" placeholder="***" />
                                    </div>
                                </div>
                                <div className="mt-5 d-flex justify-content-end">
                                    <a href="#" className="btn btn-primary ms-2">Place Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
