import React from 'react'
import ProfileCanvas from './ProfileCanvas'
import { NavLink } from 'react-router-dom'

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
                            <NavLink className="nav-link" to={'order'} aria-current="page" >
                                <i className="fa-solid fa-cart-shopping me-2" />
                                Your Orders
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'settings'}>
                                <i className="fa-solid fa-gear me-2" />
                                Settings
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'address'}>
                                <i className="fa-solid fa-map me-2" />
                                Address
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'payment'}>
                                <i className="fa-solid fa-credit-card me-2" />
                                Payment Method
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'notification'}>
                                <i className="fa-solid fa-bell me-2" />
                                Notification
                            </NavLink>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <hr />
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                            <button className="nav-link">
                                <i className="fa-solid fa-right-from-bracket me-2" />
                                Log out
                            </button>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}
