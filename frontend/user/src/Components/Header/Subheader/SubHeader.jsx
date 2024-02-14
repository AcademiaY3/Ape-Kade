import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SubHeader() {
    return (
        <header className="pb-lg-0 py-4 px-0 border-bottom border-bottom-lg-0 shadow-sm">
            <div className="container-fluid">
                <div className="row w-100 align-items-center g-0 gx-lg-3">
                    <div className="col-xxl-10 col-lg-8">
                        <div className="d-flex  align-items-center">
                            <NavLink to={'home'} className="navbar-brand d-none d-lg-block" >
                                <img className='w-50' src="/assets/images/logo/freshcart-logo.png" alt="logo" />
                            </NavLink>
                            <div className="w-100 d-none d-lg-block">
                                <form action="#">
                                    <div className="input-group">
                                        <select className="form-select">
                                            <option selected>All Categories</option>
                                            <option value="Milk Drinks">Milk Drinks</option>
                                            <option value="Curd & Yogurt">Curd &amp; Yogurt</option>
                                            <option value="Eggs">Eggs</option>
                                            <option value="Buns & Bakery">Buns &amp; Bakery</option>
                                            <option value="Cheese">Cheese</option>
                                            <option value="Condensed Milk">Condensed Milk</option>
                                            <option value="Dairy Products">Dairy Products</option>
                                        </select>
                                        <input type="text" aria-label="Last name" className="form-control w-45" placeholder="Search for products" />
                                        <button className="input-group-text bg-transparent" type="submit">
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
                            <a className="navbar-brand" >
                                <img className='w-50' src="../assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                            </a>
                            <div className="d-flex align-items-center lh-1">
                                <div className="list-inline me-4">
                                    <div className="list-inline-item">
                                        <Link className="text-muted position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" role="button" aria-controls="offcanvasRight">
                                            <i className="fa-solid fa-cart-plus fa-xl text-dark" />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                1
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                                    <i className="fa-solid fa-bars fa-xl text-dark" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-4 d-flex align-items-center">
                        <div className="list-inline ms-auto d-lg-block d-none">
                            <div className="list-inline-item me-5">
                                <NavLink to={'whishlist'} className="text-reset position-relative">
                                    <i className="fa-solid fa-heart fs-4 text-dark" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        5
                                    </span>
                                </NavLink>
                            </div>
                            <div className="list-inline-item me-5">
                                <Link className="text-reset position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" role="button" aria-controls="offcanvasRight">
                                    <i className="fa-solid fa-cart-plus fs-4 text-dark" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        1
                                    </span>
                                </Link>
                            </div>
                            <div className="list-inline-item">
                                <NavLink to={'profile/order'} className="text-reset">
                                    <i className="fa-solid fa-user fs-4 text-dark" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
