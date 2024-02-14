import React from 'react'

export default function ProfileAddress() {
    return (
        <div className="col-lg-10 col-md-8 col-12">
            <div className="py-6 p-md-6">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="mb-6">
                            <h2 className="mb-0">Address settings</h2>
                        </div>
                        <form>
                            <div className="row row-gap-4">
                                <div className="col-6">
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
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-4">
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-12 text-end">
                                    <button className='btn btn-primary'>Save Details</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="d-none d-lg-flex justify-content-end align-items-start col-12 offset-lg-1 col-lg-4">
                        <img src="/assets/images/profile/location.png" alt className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>

    )
}
