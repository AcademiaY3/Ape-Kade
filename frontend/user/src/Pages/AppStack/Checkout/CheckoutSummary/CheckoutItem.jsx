import React from 'react'

export default function CheckoutItem() {
    return (
        <li className="list-group-item px-4 py-3">
            <div className="row align-items-center">
                <div className="col-2 col-md-2">
                    <img src="../assets/images/products/product-img-1.jpg" alt="Ecommerce" className="img-fluid" />
                </div>
                <div className="col-5 col-md-5">
                    <h6 className="mb-0">Haldirams Sev Bhujia</h6>
                    <span><small className="text-muted">.98 / lb</small></span>
                </div>
                <div className="col-2 col-md-2 text-center text-muted">
                    <span>1</span>
                </div>
                <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                    <span className="fw-bold">$5.00</span>
                </div>
            </div>
        </li>
    )
}
