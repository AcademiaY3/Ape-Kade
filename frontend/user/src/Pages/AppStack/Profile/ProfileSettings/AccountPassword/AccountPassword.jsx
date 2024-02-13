import React from 'react'

export default function AccountPassword() {
    return (
        <div className="row">
            <div className="col-12">
                {/* heading */}
                <h5 className="mb-4">Password</h5>
                <form className="row">
                    {/* input */}
                    <div className="mb-3 col-6">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control" placeholder="**********" />
                    </div>
                    {/* input */}
                    <div className="mb-3 col-6">
                        <label className="form-label">Current Password</label>
                        <input type="password" className="form-control" placeholder="**********" />
                    </div>
                    {/* input */}
                    <div className="col-12 text-end">

                        <a href="#" className="btn btn-primary">Save Password</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
