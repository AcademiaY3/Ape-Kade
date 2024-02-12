import React from 'react'

export default function SubHeader() {
    return (
        <header className="py-lg-5 pb-lg-0 py-4 px-0 border-bottom border-bottom-lg-0 shadow-sm">
            <div className="container-fluid">
                <div className="row w-100 align-items-center g-0 gx-lg-3">
                    <div className="col-xxl-10 col-lg-8">
                        <div className="d-flex  align-items-center">
                            <a className="navbar-brand d-none d-lg-block" href="../index.html">
                                <img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
                            </a>
                            <div className="w-100 ms-4 d-none d-lg-block">
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
                        <div className="d-flex justify-content-between w-100 d-lg-none">
                            <a className="navbar-brand" href="../index.html">
                                <img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" />
                            </a>
                            <div className="d-flex align-items-center lh-1">
                                <div className="list-inline me-4">
                                    <div className="list-inline-item">
                                        <a href="#!" className="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="list-inline-item">
                                        <a className="text-muted position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                                <line x1={3} y1={6} x2={21} y2={6} />
                                                <path d="M16 10a4 4 0 0 1-8 0" />
                                            </svg>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                1
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                                        <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                    </svg>
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
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </a>
                            </div>
                            <div className="list-inline-item me-5">
                                <a className="text-reset position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                                    <i className="fa-solid fa-cart-plus fs-4 text-dark" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        1
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </a>
                            </div>
                            <div className="list-inline-item">
                                <a href="#!" className="text-reset" data-bs-toggle="modal" data-bs-target="#userModal">
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
