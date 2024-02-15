import React from 'react'
import Paginator from '../../../Components/Paginator/Paginator'
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb'

export default function AppNotifications() {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                <BreadCrumb icon={'fa-bell'} page={'Notifications'} />
                {/* row */}
                <div className="row">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card">
                            <div className="p-6">
                                <div className="row justify-content-between">
                                    <div className="col-md-4 col-12 mb-2 mb-md-0">
                                        {/* form */}
                                        <form className="d-flex" role="search">
                                            <input className="form-control" type="search" placeholder="Search Notification" aria-label="Search" />
                                        </form>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12">
                                        {/* main */}
                                        <select className="form-select">
                                            <option selected>Select Status</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* card body */}
                            <div className="card-body p-0">
                                {/* table */}
                                <div className="table-responsive">
                                    <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                                        <thead className="bg-light">
                                            <tr>

                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Message</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a  className="text-reset">Haldiram Sev Bhujia</a></td>
                                                <td>Barry McKenzie</td>
                                                <td>
                                                    <span className="text-truncate">Nice &amp; fresh oranges with value for money..</span>
                                                </td>
                                                <td>
                                                    <span className="text-truncate text-warning">pending</span>
                                                </td>
                                                <td>23 Nov,2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a  className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" >
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" >
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <Paginator />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
