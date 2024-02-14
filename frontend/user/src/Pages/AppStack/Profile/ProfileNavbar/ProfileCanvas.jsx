import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProfileCanvas() {
    return (
        <>{/* modal */}
            <div className="offcanvas offcanvas-start w-75" tabIndex={-1} id="offcanvasAccount" aria-labelledby="offcanvasAccountLabel">
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
                            <NavLink to={'order'} className="nav-link" aria-current="page" >
                                <i className="fa-solid fa-cart-shopping me-2" />
                                Your Orders
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <NavLink to={'settings'} className="nav-link" >
                                <i className="fa-solid fa-gear me-2" />
                                Settings
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <NavLink to={'address'} className="nav-link">
                                <i className="fa-solid fa-map me-2" />
                                Address
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <NavLink to={'payment'} className="nav-link" >
                                <i className="fa-solid fa-credit-card me-2" />
                                Payment Method
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <NavLink to={'notification'} className="nav-link" >
                                <i className="fa-solid fa-bell me-2" />
                                Notification
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
