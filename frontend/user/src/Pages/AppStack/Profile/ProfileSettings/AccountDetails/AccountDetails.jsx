import React from 'react'

export default function AccountDetails() {
    return (
        <div className='col-12 col-md-6'>
            {/* heading */}
            <h5 className="mb-4">Account details</h5>
            <div className="row">
                <div className="col-12">
                    {/* form */}
                    <form>
                        {/* input */}
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="jitu chauhan" />
                        </div>
                        {/* input */}
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="example@gmail.com" />
                        </div>
                        {/* input */}
                        <div className="mb-5">
                            <label className="form-label">Phone</label>
                            <input type="text" className="form-control" placeholder="Phone number" />
                        </div>
                        {/* button */}
                        <div className="mb-3">
                            <button className="btn btn-primary">Save Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
