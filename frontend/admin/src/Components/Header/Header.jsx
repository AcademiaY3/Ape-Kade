import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-glass">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center">
                        <Link className="text-inherit d-block d-xl-none me-4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i className="fa-solid fa-bars fs-3" />
                        </Link>
                        <form role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    <div>
                        <ul className="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0">
                            <li className="me-2">
                                <NavLink to={'notifications'} className="position-relative btn-icon btn-light btn rounded-circle"  >
                                    <i className="fa-solid fa-bell fs-5" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">
                                        2
                                    </span>
                                </NavLink>
                            </li>
                            <li className="ms-4">
                                <NavLink to={'profile'}>
                                    <img src="/assets/images/avatar/avatar-1.jpg" alt="propic" className="avatar avatar-md rounded-circle" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}
