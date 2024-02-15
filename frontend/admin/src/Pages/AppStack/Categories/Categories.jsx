import React from 'react'
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb'
import Paginator from '../../../Components/Paginator/Paginator'

export default function Categories() {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                {/* row */}
                <BreadCrumb page={'Categories'} icon={'fa-sitemap'}/>
                <div className="row">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card">
                            <div className="px-6 py-6">
                                <div className="row justify-content-between">
                                    <div className="col-md-6 col-12 mb-2 mb-md-0">
                                        {/* form */}
                                        <form className="d-flex" role="search">
                                            <input className="form-control" type="search" placeholder="Search Category" aria-label="Search" />
                                        </form>
                                    </div>
                                    {/* select option */}
                                    <div className="text-end col-md-6 col-12">
                                        <button className='btn btn-dark'>Add New</button>
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
                            <Paginator/>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
