import React from 'react'
import ProfileCanvas from './ProfileCanvas'

export default function ProfileNavbar() {
    return (
        <>
            {/* col */}
            < div className="col-12" >
                <div className="d-flex justify-content-between align-items-center d-md-none py-4">
                    {/* heading */}
                    <h3 className="fs-5 mb-0">Account Setting</h3>
                    {/* button */}
                    <button className="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAccount" aria-controls="offcanvasAccount">
                        <i className="fa-solid fa-bars fs-3" />
                    </button>
                </div>
            </div >
            <ProfileCanvas/>
            

            {/* col */}
            < div className="col-lg-2 col-md-4 col-12 border-end d-none d-md-block" >
                <div className="pt-6 pe-lg-0">
                    {/* nav */}
                    <ul className="nav flex-column nav-pills nav-pills-dark">
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="account-orders.html">
                                <i className="fa-solid fa-cart-shopping me-2" />
                                Your Orders
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link" href="account-settings.html">
                                <i className="fa-solid fa-gear me-2" />
                                Settings
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link" href="account-address.html">
                                <i className="fa-solid fa-map me-2" />
                                Address
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link" href="account-payment-method.html">
                                <i className="fa-solid fa-credit-card me-2" />
                                Payment Method
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link active" href="account-notification.html">
                                <i className="fa-solid fa-bell me-2" />
                                Notification
                            </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <hr />
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <a className="nav-link" href="../index.html">
                                <i className="fa-solid fa-right-from-bracket me-2" />
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}