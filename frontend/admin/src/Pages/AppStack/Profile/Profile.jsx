import React from 'react'
import BreadCrumb from '../../../Components/BreadCrumb/BreadCrumb'

export default function Profile() {
    return (
        <main className="main-content-wrapper pb-6 px-0 px-md-4 pt-14">
            <div className="container">
                <BreadCrumb page={'My Profile'} icon={'fa-user'} />
                {/* row */}
                <div className="row">
                    <div className="col-md-8 col-12 mb-5">
                        <div className="card p-5">
                            <h4 className='mb-0'>Account Settings</h4>
                            <p className='mt-0'>All the personal info goes here</p>
                            <form>
                                <div className="row row-gap-4">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" required />
                                    </div>
                                    <div className="col-6">
                                        <select className="form-select">
                                            <option selected>India</option>
                                            <option value={1}>UK</option>
                                            <option value={2}>USA</option>
                                            <option value={3}>UAE</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <select className="form-select">
                                            <option selected>Gujarat</option>
                                            <option value={1}>Northern Ireland</option>
                                            <option value={2}>Alaska</option>
                                            <option value={3}>Abu Dhabi</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" className="form-control" placeholder="Zip Code" />
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <input type="text" className="form-control" placeholder="Business Name" />
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <input type="text" className="form-control" placeholder="Business Name" />
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <input type="text" className="form-control" placeholder="Business Name" />
                                    </div>
                                    <div className="col-12 text-end">
                                        <button className='btn btn-primary'>Edit Details</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="card p-3 d-flex justify-content-center align-items-center">
                            <h5>Image Preview</h5>
                            <img src="/assets/images/avatar/avatar-4.jpg" className=' rounded img-fluid' alt="banner" />
                            {/* <button className='btn btn-danger mt-3'>Remove Image</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
