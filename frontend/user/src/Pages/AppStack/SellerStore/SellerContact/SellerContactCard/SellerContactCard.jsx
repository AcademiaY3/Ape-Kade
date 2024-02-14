import React from 'react'

export default function SellerContactCard() {
    return (
        <div className="col-12 col-md-5 mt-5 mt-md-0">
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        {/* card body */}
                        <div className="card-body px-6 py-5">
                            <div className="d-flex align-items-center">
                                <div>
                                    <i className="fa-solid fa-envelope fs-1" />
                                </div>
                                {/* text */}
                                <div className="ms-4">
                                    <h5 className="mb-1">seller@gmail.com</h5>
                                    <p className="mb-0 text-capitalize">
                                        get in touch with the seller
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card mb-6">
                        {/* card body */}
                        <div className="card-body px-6 py-5">
                            <div className="d-flex align-items-center">
                                <div>
                                    <i className="fa-solid fa-phone fs-1" />
                                </div>
                                {/* text */}
                                <div className="ms-4">
                                    <h5 className="mb-1">+94 986545221</h5>
                                    <p className="mb-0 text-capitalize">
                                        drop a call for instant communication
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card mb-0">
                        {/* card body */}
                        <div className="card-body px-4 py-5">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                {/* text */}
                                <div className="ms-0">
                                    <p className="mb-0 text-capitalize">
                                        Address and details
                                    </p>
                                </div>
                                <div>
                                    <i className="fa-solid fa-map fs-5" />
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <img src="../assets/images/profile/location.png" alt className="w-40 img-fluid rounded" />
                                <div className="ms-4">
                                    <div className="d-flex flex-row justify-content-start align-items-center">
                                        <i className="fa-solid fa-globe" />
                                        <p className="mb-1 text-capitalize ms-3">Sri Lanka</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start align-items-baseline">
                                        <i className="fa-solid fa-road" />
                                        <p className="mb-1 text-capitalize ms-3"> Malabe, New Kandy Road, Malabe.</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-start align-items-baseline">
                                        <i className="fa-solid fa-city" />
                                        <p className="mb-1 text-capitalize ms-3">Colombo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
