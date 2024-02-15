import React from 'react'

export default function Reviews() {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div>
                            {/* page header */}
                            <h2>Reviews</h2>
                            {/* breacrumb */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Reviews</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card-lg">
                            <div className="p-6">
                                <div className="row justify-content-between">
                                    <div className="col-md-4 col-12 mb-2 mb-md-0">
                                        {/* form */}
                                        <form className="d-flex" role="search">
                                            <input className="form-control" type="search" placeholder="Search Reviews" aria-label="Search" />
                                        </form>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12">
                                        {/* main */}
                                        <select className="form-select">
                                            <option selected>Select Rating</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                            <option value={4}>Four</option>
                                            <option value={5}>Five</option>
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
                                                <th>Reviews</th>
                                                <th>Rating</th>
                                                <th>Date</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td><a href="#" className="text-reset">Haldiram Sev Bhujia</a></td>
                                                <td>Barry McKenzie</td>
                                                <td>
                                                    <span className="text-truncate">Nice &amp; fresh oranges with value for money..</span>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span><i className="fa-solid fa-star text-warning" /></span>
                                                        <span><i className="fa-solid fa-star text-warning" /></span>
                                                        <span><i className="fa-solid fa-star text-warning" /></span>
                                                        <span><i className="fa-solid fa-star text-warning" /></span>
                                                        <span><i className="fa-solid fa-star text-warning" /></span>
                                                    </div>
                                                </td>
                                                <td>23 Nov,2022</td>
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
                                            <li className="page-item disabled"><a className="page-link" >Previous</a></li>
                                            <li className="page-item"><a className="page-link active" >1</a></li>
                                            <li className="page-item"><a className="page-link" >2</a></li>
                                            <li className="page-item"><a className="page-link" >3</a></li>
                                            <li className="page-item"><a className="page-link" >Next</a></li>
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
