import React from 'react'
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb'

export default function Orders() {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                {/* row */}
                <BreadCrumb page={'Orders'} icon={'fa-shopping-bag'}/>
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
                                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                        </form>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12">
                                        {/* select */}
                                        <select className="form-select">
                                            <option selected>Status</option>
                                            <option value="Success">Success</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Cancel">Cancel</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* card body */}
                            <div className="card-body p-0">
                                {/* table responsive */}
                                <div className="table-responsive">
                                    <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                        <thead className="bg-light">
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
                                                        <label className="form-check-label" htmlFor="checkAll" />
                                                    </div>
                                                </th>
                                                <th>Image</th>
                                                <th>Order Name</th>
                                                <th>Customer</th>
                                                <th>Date &amp; TIme</th>
                                                <th>Payment</th>
                                                <th>Status</th>
                                                <th>Amount</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="orderOne" />
                                                        <label className="form-check-label" htmlFor="orderOne" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-1.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">FC#1007</a></td>
                                                <td>Jennifer Sullivan</td>
                                                <td>01 May 2023 (10:12 am)</td>
                                                <td>Paypal</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Success</span>
                                                </td>
                                                <td>$12.99</td>
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="orderTwo" />
                                                        <label className="form-check-label" htmlFor="orderTwo" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-2.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">FC#1006</a></td>
                                                <td>Willie Hanson</td>
                                                <td>20 April 2023 (9:20 am)</td>
                                                <td>COD</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Success</span>
                                                </td>
                                                <td>$8.19</td>
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="orderThree" />
                                                        <label className="form-check-label" htmlFor="orderThree" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-3.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">FC#1005</a></td>
                                                <td>Dori Stewart</td>
                                                <td>11 March 2023 (7:12 pm)</td>
                                                <td>Paypal</td>
                                                <td>
                                                    <span className="badge bg-light-warning text-dark-warning">Pending</span>
                                                </td>
                                                <td>$8.19</td>
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="orderFour" />
                                                        <label className="form-check-label" htmlFor="orderFour" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-4.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">FC#1004</a></td>
                                                <td>Ezekiel Rogerson</td>
                                                <td>09 March 2023 (6:23 pm)</td>
                                                <td>Stripe</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Success</span>
                                                </td>
                                                <td>$23.11</td>
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="orderFive" />
                                                        <label className="form-check-label" htmlFor="orderFive" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-5.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">FC#1003</a></td>
                                                <td>Maria Roux</td>
                                                <td>18 Feb 2022 (12:20 pm)</td>
                                                <td>COD</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Success</span>
                                                </td>
                                                <td>$2.00</td>
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="orderSix" />
                                                        <label className="form-check-label" htmlFor="orderSix" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-6.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">FC#1002</a></td>
                                                <td>Robert Donald</td>
                                                <td>12 Feb 2022 (4:56 pm)</td>
                                                <td>Paypal</td>
                                                <td>
                                                    <span className="badge bg-light-danger text-dark-danger">Cancel</span>
                                                </td>
                                                <td>$56.00</td>
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="orderSeven" />
                                                        <label className="form-check-label" htmlFor="orderSeven" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-7.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">FC#1001</a></td>
                                                <td>Diann Watson</td>
                                                <td>22 Jan 2023 (1:20 pm)</td>
                                                <td>Paypal</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Success</span>
                                                </td>
                                                <td>$23.00</td>
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
                            <div className="border-top d-md-flex justify-content-between align-items-center p-6">
                                <span>Showing 1 to 8 of 12 entries</span>
                                <nav className="mt-2 mt-md-0">
                                    <ul className="pagination mb-0">
                                        <li className="page-item disabled"><a className="page-link" href="#!">Previous</a></li>
                                        <li className="page-item"><a className="page-link active" href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
