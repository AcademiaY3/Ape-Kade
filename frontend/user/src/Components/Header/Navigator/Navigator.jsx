import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigator() {
    return (
        <nav className="navbar navbar-expand-lg bg-white py-0 py-lg-2 navbar-default border-bottom">
            <div className="container-fluid">
                <div className="offcanvas offcanvas-start w-75" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
                    <div className="offcanvas-header pb-1">
                        <a href="./index.html">
                            <img className='w-50' src="../assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                        </a>
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
                            <NavLink to={'profile'} className="btn btn-dark w-100 d-flex justify-content-center align-items-center" >
                                <span className="me-2">
                                    <i className="fa-solid fa-user fs-5 text-white" />
                                </span>
                                Vist Profile
                            </NavLink>
                        </div>
                        <div className="mt-0 w-100 d-flex flex-row justify-content-between align-items-center">
                            <ul className="navbar-nav align-items-center navbar-offcanvas-color">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'home'} role="button" end={true} >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'products'} role="button" >Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'sellers'} role="button" >Sellers</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'contact'} role="button" >Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'cart'} role="button" >Cart</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'whishlist'} role="button" >Whishlist</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'about'} role="button" >About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'blogs'} role="button" >Blogs</NavLink>
                                </li>
                                <li className="nav-item d-none d-lg-block">
                                    <NavLink className="nav-link" to={'profile'}>Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link text-danger" >Logout</button>
                                </li>
                            </ul>
                            <div className="d-flex flex-row justify-content-around align-items-center d-none d-lg-block">
                                <h7 className="mx-4"><i className="fa-solid fa-phone" /> +94 768 76 5443</h7>
                                <h7><i className="fa-solid fa-envelope" /> apekade@contact.lk</h7>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
