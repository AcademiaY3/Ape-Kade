import React from 'react'
import CartItem from './CartItem'

export default function Cart() {
    return (
        <section className="mt-4">
            <div className="container">
                {/* row */}
                {/* row */}
                <div className="row">
                    <div className=" col-md-7">
                        <div className="py-3">
                            <ul className="list-group list-group-flush">
                                <CartItem/>
                                <CartItem/>
                            </ul>
                            {/* btn */}
                            <div className="d-flex justify-content-between mt-4">
                                <a href="#" className="btn btn-primary">Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                    {/* sidebar */}
                    <div className="col-12 offset-md-1 col-md-4">
                        {/* card */}
                        <div className="mb-5 card mt-6">
                            <div className="card-body p-6">
                                {/* heading */}
                                <h2 className="h5 mb-4">Summary</h2>
                                <div className="card mb-2">
                                    {/* list group */}
                                    <ul className="list-group list-group-flush">
                                        {/* list group item */}
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="me-auto">
                                                <div>Item Subtotal</div>
                                            </div>
                                            <span>$70.00</span>
                                        </li>
                                        {/* list group item */}
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="me-auto">
                                                <div>Service Fee</div>
                                            </div>
                                            <span>$3.00</span>
                                        </li>
                                        {/* list group item */}
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="me-auto">
                                                <div className="fw-bold">Subtotal</div>
                                            </div>
                                            <span className="fw-bold">$67.00</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-grid mb-1 mt-4">
                                    {/* btn */}
                                    <button className="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit">
                                        Go to Checkout
                                        <span className="fw-bold">$67.00</span>
                                    </button>
                                </div>
                                {/* text */}
                                <p>
                                    <small>
                                        By placing your order, you agree to be bound by the Freshcart
                                        <a href="#!">Terms of Service</a>
                                        and
                                        <a href="#!">Privacy Policy.</a>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
