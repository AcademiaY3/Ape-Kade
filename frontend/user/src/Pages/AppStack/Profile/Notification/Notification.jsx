import React from 'react'

export default function Notification() {
    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
                <div className="mb-6">
                    {/* heading */}
                    <h2 className="mb-0">Notification settings</h2>
                </div>
                <div className="mb-10">
                    {/* text */}
                    <div className="border-bottom pb-3 mb-5">
                        <h5 className="mb-0">Email Notifications</h5>
                    </div>
                    {/* text */}
                    <div className="d-flex justify-content-between align-items-center mb-6">
                        <div>
                            <h6 className="mb-1">Weekly Notification</h6>
                            <p className="mb-0">Various versions have evolved over the years, sometimes by
                                accident, sometimes on purpose .</p>
                        </div>
                        {/* checkbox */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* text */}
                        <div>
                            <h6 className="mb-1">Account Summary</h6>
                            <p className="mb-0 pe-12">
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                ac turpis eguris eu sollicitudin massa. Nulla ipsum odio, aliquam in odio
                                et, fermentum
                                blandit nulla.
                            </p>
                        </div>
                        {/* form checkbox */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    {/* heading */}
                    <div className="border-bottom pb-3 mb-5">
                        <h5 className="mb-0">Order updates</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-6">
                        <div>
                            {/* heading */}
                            <h6 className="mb-0">Text messages</h6>
                        </div>
                        {/* form checkbox */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault2" />
                        </div>
                    </div>
                    {/* text */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Call before checkout</h6>
                            <p className="mb-0">We will only call if there are pending changes</p>
                        </div>
                        {/* form checkbox */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked2" />
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    {/* text */}
                    <div className="border-bottom pb-3 mb-5">
                        <h5 className="mb-0">Website Notification</h5>
                    </div>
                    <div>
                        {/* form checkbox */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckFollower" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckFollower">New Follower</label>
                        </div>
                        {/* form checkbox */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckPost" />
                            <label className="form-check-label" htmlFor="flexCheckPost">Post Like</label>
                        </div>
                        {/* form checkbox */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckPosted" />
                            <label className="form-check-label" htmlFor="flexCheckPosted">Someone you followed
                                posted</label>
                        </div>
                        {/* form checkbox */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckCollection" />
                            <label className="form-check-label" htmlFor="flexCheckCollection">Post added to
                                collection</label>
                        </div>
                        {/* form checkbox */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckOrder" />
                            <label className="form-check-label" htmlFor="flexCheckOrder">Order Delivery</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
