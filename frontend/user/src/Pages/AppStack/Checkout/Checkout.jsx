import React from 'react'
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import CheckoutForm from './CheckoutForm/CheckoutForm'

export default function Checkout() {
    return (
        <section className="my-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <div className="mb-0">
                                <h1 className="fw-bold mb-0">Checkout</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* row */}
                    <div className="row">
                        <CheckoutForm/>
                        <CheckoutSummary/>
                    </div>
                </div>
            </div>
        </section>
    )
}
