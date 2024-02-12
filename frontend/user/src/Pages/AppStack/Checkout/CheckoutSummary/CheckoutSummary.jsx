import React from 'react'
import CheckoutItem from './CheckoutItem'

export default function CheckoutSummary() {
    return (
        <div className="col-12 col-md-12 offset-lg-1 col-lg-4">
            <div className="mt-4">
                <div className="card shadow-sm">
                    <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
                    <ul className="list-group list-group-flush">
                        {/* list group item */}
                        <CheckoutItem />
                        <CheckoutItem />
                        <CheckoutItem />
                        <CheckoutItem />
                        {/* list group item */}
                        <li className="list-group-item px-4 py-3">
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                                <div>Additional</div>
                                <div>$00.00</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                                <div>Taxes</div>
                                <div>$00.00</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                                <div>Subtotal</div>
                                <div>$73.00</div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
