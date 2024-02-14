import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CartModel() {
    return (

        <div className="offcanvas offcanvas-end w-75 w-md-auto" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header border-bottom">
                <div className="text-start">
                    <h5 id="offcanvasRightLabel" className="mb-0 fs-4">Shopping Cart</h5>
                    <small>Location in 382480</small>
                </div>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
                <div>
                    <ul className="list-group list-group-flush">
                        {/* list group */}
                        <li className="list-group-item py-3 ps-0">
                            {/* row */}
                            <div className="row align-items-center">
                                <div className="col-6 col-md-6 col-lg-7">
                                    <div className="d-flex align-items-center">
                                        <img src="/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                        <div className="ms-3">
                                            {/* title */}
                                            <h6 className="mb-0">{'Haldirams Sev Bhujia'}</h6>
                                            <span><small className="text-muted">.98 / lb</small></span>
                                        </div>
                                    </div>
                                </div>
                                {/* price */}
                                <div className="col-4 col-md-3 col-lg-3 text-start col-md-2">
                                    <h6>Rs 65000</h6>
                                </div>
                                <div className="col-2 text-end">
                                    <div className="my-auto lh-1">
                                        <a href="#" className="text-decoration-none text-inherit">
                                            <i className="fa-solid fa-trash fs-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* btn */}
                    <div className="d-flex justify-content-end mt-4">
                        <NavLink to={'cart'} className="btn btn-dark">Go To Cart</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}
