import React from 'react'

export default function SubHeader() {
    return (
        <header className="pb-lg-0 py-4 px-0 border-bottom border-bottom-lg-0 shadow-sm">
            <div className="container-fluid">
                <div className="row w-100 align-items-center g-0 gx-lg-3">
                    <div className="col-xxl-10 col-lg-8">
                        <div className="d-flex  align-items-center">
                            <a className="navbar-brand d-none d-lg-block" href="../index.html">
                                <img className='w-50' src="../assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                            </a>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                                                <circle cx={11} cy={11} r={8} />
                                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
                            <a className="navbar-brand" href="../index.html">
                                <img className='w-50' src="../assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                            </a>
                            <div className="d-flex align-items-center lh-1">
                                <div className="list-inline me-4">
                                    <div className="list-inline-item">
                                        <a className="text-muted position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                                            <i className="fa-solid fa-cart-plus fa-xl text-dark" />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                1
                                            </span>
                                        </a>
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
                                <a href="../pages/shop-wishlist.html" className="text-reset position-relative">
                                    <i className="fa-solid fa-heart fs-4 text-dark" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        5
                                    </span>
                                </a>
                            </div>
                            <div className="list-inline-item me-5">
                                <a className="text-reset position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                                    <i className="fa-solid fa-cart-plus fs-4 text-dark" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        1
                                    </span>
                                </a>
                            </div>
                            <div className="list-inline-item">
                                <a href="#" className="text-reset">
                                    <i className="fa-solid fa-user fs-4 text-dark" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
