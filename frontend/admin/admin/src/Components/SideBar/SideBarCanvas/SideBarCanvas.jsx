import React from 'react'

export default function SideBarCanvas() {
    return (
        <nav className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac" tabIndex={-1} id="offcanvasExample">
            <div className="navbar-vertical">
                <div className="px-4 py-5 d-flex justify-content-between align-items-center">
                    <a href="../index.html" className="navbar-brand">
                        <img className='img-fluid w-50' src="/assets/images/logo/freshcart-logo.png" alt />
                    </a>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="navbar-vertical-content flex-grow-1" data-simplebar>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-dashboard" /></span>
                                    <span className="nav-link-text">Dashboard</span>
                                </div>
                            </a>
                        </li>
                        <hr className='bordered' />
                        <li className="nav-item">
                            <a className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-shopping-cart" /></span>
                                    <span className="nav-link-text">Products</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-list" /></span>
                                    <span className="nav-link-text">Categories</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  collapsed " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-bag-shopping" /></span>
                                    <span className="nav-link-text">Orders</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-shop" /></span>
                                    <span className="nav-link-text">Sellers / Vendors</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-people-group" /></span>
                                    <span className="nav-link-text">Customers</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-star" /></span>
                                    <span className="nav-link-text">Reviews</span>
                                </div>
                            </a>
                        </li>
                        <hr className='bordered' />
                        <li className="nav-item">
                            <a className="nav-link" >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-user" /></span>
                                    <span className="nav-link-text">Profile</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-share" /></span>
                                    <span className="nav-link-text">Share</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-lock" /></span>
                                    <span className="nav-link-text">Logout</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
