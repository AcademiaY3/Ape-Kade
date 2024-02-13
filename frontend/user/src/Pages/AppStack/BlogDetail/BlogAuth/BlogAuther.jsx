import React from 'react'

export default function BlogAuther() {
    return (
        <>
            <div>
                <hr className="mt-8 mb-5" />
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div className="d-flex align-items-center">
                        <img src="../assets/images/avatar/avatar-4.jpg" alt className="rounded-circle avatar-md" />
                        <div className="ms-2 lh-1">
                            <h5 className="mb-0">Dustin Warren</h5>
                            <span className="text-primary small">Marketing Manager</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center text-muted">
                        <span className="me-2"><small>22 April 2023</small></span>
                        <span>
                            <small>
                                Read time:
                                <span className="text-dark fw-bold">12min</span>
                            </small>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}
