import React from 'react'

export default function NotiBanner() {
    return (
        <div className="row mb-8">
            <div className="col-md-4">
                {/* card */}
                <div className="card bg-white p-4">
                    <div className="row">
                        <div className="col-6 d-flex flex-column justify-content-center ">
                            <h5>Notifications</h5>
                            <p className='mt-2 mb-1 text-capitalize'>Dont miss out The Notifications , Click Below To Check </p>
                            <button className='mt-0 btn btn-sm btn-primary w-full'>See All</button>
                        </div>
                        <div className="col-6 text-end">
                            <img src="/assets/images/banner/notibanner.png" className='img-fluid' alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
