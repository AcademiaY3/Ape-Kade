import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBarCanvas() {
    return (
        <nav className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac" tabIndex={-1} id="offcanvasExample">
            <div className="navbar-vertical">
                <div className="px-4 py-5 d-flex justify-content-between align-items-center">
                    <NavLink end={true} to={'dashboard'} className="navbar-brand">
                        <img className='img-fluid w-50' src="/assets/images/logo/freshcart-logo.png" alt />
                    </NavLink>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="navbar-vertical-content flex-grow-1" data-simplebar>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                        <NavLink end={true} to={'dashboard'} className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-dashboard" /></span>
                                    <span className="nav-link-text">Dashboard</span>
                                </div>
                            </NavLink>
                        </li>
                        <hr className='bordered' />
                        <li className="nav-item">
                        <NavLink to={'products'} className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-shopping-cart" /></span>
                                    <span className="nav-link-text">Products</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={'categories'} className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-list" /></span>
                                    <span className="nav-link-text">Categories</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={'orders'} className="nav-link  collapsed " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-bag-shopping" /></span>
                                    <span className="nav-link-text">Orders</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={'sellers'} className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-shop" /></span>
                                    <span className="nav-link-text">Sellers / Vendors</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={'customers'} className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-people-group" /></span>
                                    <span className="nav-link-text">Customers</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={'reviews'} className="nav-link " >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-star" /></span>
                                    <span className="nav-link-text">Reviews</span>
                                </div>
                            </NavLink>
                        </li>
                        <hr className='bordered' />
                        <li className="nav-item">
                            <NavLink to={'profile'} className="nav-link" >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-user" /></span>
                                    <span className="nav-link-text">Profile</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-share" /></span>
                                    <span className="nav-link-text">Share</span>
                                </div>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="fa-solid fa-lock" /></span>
                                    <span className="nav-link-text">Logout</span>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
