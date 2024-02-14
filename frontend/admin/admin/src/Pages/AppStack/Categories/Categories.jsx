import React from 'react'

export default function Categories() {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                {/* row */}
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                            {/* pageheader */}
                            <div>
                                <h2>Categories</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><a className="text-inherit">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Categories</li>
                                    </ol>
                                </nav>
                            </div>
                            {/* button */}
                            <div>
                                <a href="add-category.html" className="btn btn-primary">Add New Category</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card-lg">
                            <div className="px-6 py-6">
                                <div className="row justify-content-between">
                                    <div className="col-lg-4 col-md-6 col-12 mb-2 mb-md-0">
                                        {/* form */}
                                        <form className="d-flex" role="search">
                                            <input className="form-control" type="search" placeholder="Search Category" aria-label="Search" />
                                        </form>
                                    </div>
                                    {/* select option */}
                                    <div className="col-xl-2 col-md-4 col-12">
                                        <select className="form-select">
                                            <option selected>Status</option>
                                            <option value="Published">Published</option>
                                            <option value="Unpublished">Unpublished</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* card body */}
                            <div className="card-body p-0">
                                {/* table */}
                                <div className="table-responsive">
                                    <table className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox">
                                        <thead className="bg-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Proudct</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a className="text-reset">Snack &amp; Munchies</a></td>
                                                <td>12</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Published</span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-warning me-3" >
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-danger" >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="border-top d-flex justify-content-between align-items-md-center px-6 py-6 flex-md-row flex-column gap-4">
                                <span>Showing 1 to 8 of 12 entries</span>
                                <nav>
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
