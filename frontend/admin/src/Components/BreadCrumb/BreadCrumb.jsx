import React from 'react'

export default function BreadCrumb({page,icon}) {
    return (
        <div className="row mb-8">
            <div className="col-md-12">
                <div className="card p-4">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                            <h2>{page}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{ page}</li>
                                </ol>
                            </nav>
                        </div>
                        <i className={`fa-solid ${icon} fs-3`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
