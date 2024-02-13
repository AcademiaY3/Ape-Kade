import React from 'react'

export default function ProfileCanvas() {
    return (
        <>{/* modal */}
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasAccount" aria-labelledby="offcanvasAccountLabel">
                {/* offcanvas header */}
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasAccountLabel">Account Settings</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                {/* offcanvas body */}
                <div className="offcanvas-body">
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
                            <a className="nav-link active" href="account-settings.html">
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
                            <a className="nav-link" href="account-notification.html">
                                <i className="fa-solid fa-bell me-2" />
                                Notification
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
