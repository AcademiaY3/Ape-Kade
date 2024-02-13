import React from 'react'

export default function AccountDelete() {
    return (
        <div className="row">
            <div className="col-12 mt-4 border p-3 rounded border-danger bg-danger">
                {/* heading */}
                <h5 className="mb-4 text-white">Delete Account</h5>
                <p className="mb-5 text-white">This account contain 12 orders, Deleting your account will remove all
                    the order details associated with it.</p>
                {/* btn */}
                <div className='text-end'>
                    <button className="btn btn-white">I want to delete my account</button>
                </div>
            </div>
        </div>
    )
}
