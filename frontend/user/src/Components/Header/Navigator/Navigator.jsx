import React from 'react'

export default function Navigator() {
    return (
        <nav className="navbar navbar-expand-lg bg-white py-0 py-lg-2 navbar-default border-bottom">
            <div className="container-fluid">
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
                    <div className="offcanvas-header pb-1">
                        <a href="./index.html"><img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-block d-lg-none mb-4">
                            <form action="#">
                                <div className="input-group">
                                    <input className="form-control rounded" type="search" placeholder="Search for products" />
                                    <span className="input-group-append">
                                        <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className="d-block d-lg-none mb-4">
                            <a className="btn btn-primary w-100 d-flex justify-content-center align-items-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span className="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                                        <rect x={3} y={3} width={7} height={7} />
                                        <rect x={14} y={3} width={7} height={7} />
                                        <rect x={14} y={14} width={7} height={7} />
                                        <rect x={3} y={14} width={7} height={7} />
                                    </svg>
                                </span>
                                Home Page
                            </a>
                        </div>
                        <div className="mt-0 w-100 d-flex flex-row justify-content-between align-items-center">
                            <ul className="navbar-nav align-items-center navbar-offcanvas-color">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">Sellers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">Whishlist</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">Orders</a>
                                </li>
                            </ul>
                            <div className="d-flex flex-row justify-content-around align-items-center d-none d-lg-block">
                                <h7 className="mx-4"><i className="fa-solid fa-phone" /> +94 768 76 5443</h7>
                                <h7><i className="fa-solid fa-envelope" /> apekase@contact.lk</h7>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
