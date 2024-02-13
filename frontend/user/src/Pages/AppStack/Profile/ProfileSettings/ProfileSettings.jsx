import React from 'react'
import AccountDetails from './AccountDetails/AccountDetails'
import AccountPassword from './AccountPassword/AccountPassword'
import AccountDelete from './AccountDelete/AccountDelete'

export default function ProfileSettings() {
    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6">
                <div className="mb-6">
                    {/* heading */}
                    <h2 className="mb-0">Account Setting</h2>
                </div>
                <div className="row">
                    <AccountDetails />
                    <div className="col-12 col-md-6">
                        <AccountPassword />
                        <AccountDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}
