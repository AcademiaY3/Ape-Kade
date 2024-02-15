import React from 'react'

export default function Customers() {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                            <div>
                                <h2>Customers</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Customers</li>
                                    </ol>
                                </nav>
                            </div>
                            <div>
                                <a href="#!" className="btn btn-primary">Add New Customer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-12 mb-5">
                        <div className="card h-100 card-lg">
                            <div className="p-6">
                                <div className="row justify-content-between">
                                    <div className="col-md-4 col-12">
                                        <form className="d-flex" role="search">
                                            <input className="form-control" type="search" placeholder="Search Customers" aria-label="Search" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                                        <thead className="bg-light">
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
                                                        <label className="form-check-label" htmlFor="checkAll" />
                                                    </div>
                                                </th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Purchase Date</th>
                                                <th>Phone</th>
                                                <th>Spent</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerOne" />
                                                        <label className="form-check-label" htmlFor="customerOne" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-1.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Bonnie Howe</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>bonniehowe@gmail.com</td>
                                                <td>17 May, 2023 at 3:18pm</td>
                                                <td>-</td>
                                                <td>$49.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerTwo" />
                                                        <label className="form-check-label" htmlFor="customerTwo" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-2.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Judy Nelson</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>judynelson@gmail.com</td>
                                                <td>27 April, 2023 at 2:47pm</td>
                                                <td>435-239-6436</td>
                                                <td>$490.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerThree" />
                                                        <label className="form-check-label" htmlFor="customerThree" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-3.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">John Mattox</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>johnmattox@gmail.com</td>
                                                <td>27 April, 2023 at 2:47pm</td>
                                                <td>347-424-9526</td>
                                                <td>$29.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerFour" />
                                                        <label className="form-check-label" htmlFor="customerFour" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-4.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Wayne Rossman</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>waynerossman@gmail.com</td>
                                                <td>27 April, 2023 at 2:47pm</td>
                                                <td>-</td>
                                                <td>$39.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerFive" />
                                                        <label className="form-check-label" htmlFor="customerFive" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-5.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Rhonda Pinson</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>rhondapinson@gmail.com</td>
                                                <td>18 March, 2023 at 2:47pm</td>
                                                <td>304-471-8451</td>
                                                <td>$213.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerSix" />
                                                        <label className="form-check-label" htmlFor="customerSix" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-6.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">John Mattox</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>johnmattox@gmail.com</td>
                                                <td>18 March, 2023 at 2:47pm</td>
                                                <td>410-636-2682</td>
                                                <td>$490.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerSeven" />
                                                        <label className="form-check-label" htmlFor="customerSeven" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-7.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Wayne Rossman</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>waynerossman@gmail.com</td>
                                                <td>18 March, 2023 at 2:47pm</td>
                                                <td>845-294-6681</td>
                                                <td>$39.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerEight" />
                                                        <label className="form-check-label" htmlFor="customerEight" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-8.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Richard Shelton</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>richarddhelton@jourrapide.com</td>
                                                <td>12 March, 2023 at 9:47am</td>
                                                <td>313-887-8495</td>
                                                <td>$19.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerNine" />
                                                        <label className="form-check-label" htmlFor="customerNine" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-9.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Stephanie Morales</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>stephaniemorales@gmail.com</td>
                                                <td>22 Feb, 2023 at 9:47pm</td>
                                                <td>812-682-1588</td>
                                                <td>$250.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerTen" />
                                                        <label className="form-check-label" htmlFor="customerTen" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-10.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Stephanie Morales</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>stephaniemorales@gmail.com</td>
                                                <td>22 Feb, 2023 at 9:47pm</td>
                                                <td>812-682-1588</td>
                                                <td>$250.00</td>
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
                                                <td className="pe-0">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="customerEleven" />
                                                        <label className="form-check-label" htmlFor="customerEleven" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src="../assets/images/avatar/avatar-11.jpg" alt className="avatar avatar-xs rounded-circle" />
                                                        <div className="ms-2">
                                                            <a href="#" className="text-inherit">Pasquale Kidd</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>pasqualekidd@rhyta.com</td>
                                                <td>22 Feb, 2023 at 9:47pm</td>
                                                <td>336-396-0658</td>
                                                <td>$159.00</td>
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
            </div>
        </main>

    )
}
