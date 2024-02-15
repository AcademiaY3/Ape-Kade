import React from 'react'
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb'
import Paginator from '../../../Components/Paginator/Paginator'

export default function Sellers() {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                <BreadCrumb icon={'fa-user-nurse'} page={'Sellers'} />
                {/* row */}
                <div className="row">
                    <div className="col-xl-12 col-12 mb-5">
                        <div className="card h-100 card">
                            <div className="p-6">
                                <div className="row">
                                    {/* search bar */}
                                    <div className="col-md-6 col-12">
                                        <form className="d-flex" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search Seller" aria-label="Search" />
                                        </form>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <button className='btn btn-dark'>Add Seller</button>
                                    </div>
                                </div>
                            </div>
                            {/* card body */}
                            <div className="card-body p-0">
                                {/* table */}
                                <div className="table-responsive">
                                    <table className="table table-centered table-hover text-nowrap table-borderless mb-0">
                                        <thead className="bg-light">
                                            <tr>
                                                <th>Seller Id</th>
                                                <th>Store Name</th>
                                                <th>Email</th>
                                                <th>Gross Sale</th>
                                                <th>Earning</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#010</td>
                                                <td><a href="#" className="text-reset">E-Grocery Super Market</a></td>
                                                <td>egrocery@dayrep.com</td>
                                                <td>$200.00</td>
                                                <td>$60.00</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
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
                            </div>
                            <Paginator/>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
