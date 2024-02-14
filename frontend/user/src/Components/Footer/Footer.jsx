import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-2">
            <div className="container">
                <div className="row g-4 py-4">
                    <div className="col-12 col-md-12 col-lg-4">
                        <h6 className="mb-4">Categories</h6>
                        <div className="row">
                            <div className="col-6">
                                {/* list */}
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Vegetables &amp; Fruits</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link"> Breakfast &amp; instant food</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link"> Bakery &amp; Biscuits</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Atta, rice &amp; dal</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Sauces &amp; spreads</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Organic &amp; gourmet</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link"> Baby care</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Cleaning essentials</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Personal care</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                {/* list */}
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Dairy, bread &amp; eggs</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link"> Cold drinks &amp; juices</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link"> Tea, coffee &amp; drinks</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Masala, oil &amp; more</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Chicken, meat &amp; fish</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Paan corner</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link"> Pharma &amp; wellness</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Home &amp; office</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Pet care</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="row g-4">
                            <div className="col-6 col-sm-6 col-md-3">
                                <h6 className="mb-4">Get to know us</h6>
                                {/* list */}
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Company</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">About</a></li>
                                    <li className="nav-item mb-2"><a href="#1" className="nav-link">Blog</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Help Center</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Our Value</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-3">
                                <h6 className="mb-4">For Consumers</h6>
                                <ul className="nav flex-column">
                                    {/* list */}
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Payments</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Shipping</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Product Returns</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">FAQ</a></li>
                                    <li className="nav-item mb-2"><a href="../pages/shop-checkout.html" className="nav-link">Shop
                                        Checkout</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-3">
                                <h6 className="mb-4">Become a Shopper</h6>
                                <ul className="nav flex-column">
                                    {/* list */}
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Shopper Opportunities</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Become a Shopper</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Earnings</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Ideas &amp; Guides</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">New Retailers</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-3">
                                <h6 className="mb-4">Apekade programs</h6>
                                <ul className="nav flex-column">
                                    {/* list */}
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Apekade programs</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Gift Cards</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Promos &amp; Coupons</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Apekade Ads</a></li>
                                    <li className="nav-item mb-2"><a href="#!" className="nav-link">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item text-dark">Payment Partners</li>
                                <li className="list-inline-item">
                                    <a href="#!"><img src="/assets/images/payment/amazonpay.svg" alt /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!"><img src="/assets/images/payment/american-express.svg" alt /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!"><img src="/assets/images/payment//mastercard.svg" alt /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!"><img src="/assets/images/payment/paypal.svg" alt /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!"><img src="/assets/images/payment/visa.svg" alt /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-7 mt-4 mt-md-0">
                            <ul className="list-inline mb-0 text-lg-end text-center">
                                <li className="list-inline-item mb-2 mb-md-0 text-dark">Get deliveries with Apekade</li>
                                <li className="list-inline-item ms-4">
                                    <a href="#!"> <img src="/assets/images/appbutton/appstore-btn.svg" alt style={{ width: 140 }} /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!"> <img src="/assets/images/appbutton/googleplay-btn.svg" alt style={{ width: 140 }} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-top py-4">
                    <div className="row align-items-center">
                        <div className="col-md-6"><span className="small text-muted">© 2024 <span id="copyright"> -
                        </span>All rights reserved. Powered by <a href="#">Apekade</a>.</span></div>
                        <div className="col-md-6">
                            <ul className="list-inline text-md-end mb-0 small mt-3 mt-md-0">
                                <li className="list-inline-item text-muted">Follow us on</li>
                                <li className="list-inline-item me-2">
                                    <button className="btn btn-xs btn-social btn-icon">
                                        <i className="fa-brands fa-facebook" />
                                    </button>
                                </li>
                                <li className="list-inline-item me-2">
                                    <button className="btn btn-xs btn-social btn-icon">
                                        <i className="fa-brands fa-twitter" />
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button className="btn btn-xs btn-social btn-icon">
                                        <i className="fa-brands fa-instagram" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
