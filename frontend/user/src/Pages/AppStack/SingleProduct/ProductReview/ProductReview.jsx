import React from 'react'
import UserReview from '../ProductDetail/Review/UserReview'

export default function ProductReview() {
    return (
        <section className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mt-4">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="me-lg-12 mb-6 mb-md-0">
                                        <div className="mb-5">
                                            {/* title */}
                                            <h4 className="mb-3">Customer reviews</h4>
                                            <span>
                                                {/* rating */}
                                                <small className="text-warning">
                                                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                                                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                                                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                                                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                                                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                                                </small>
                                                <span className="ms-3">4.1 out of 5</span>
                                                <small className="ms-3">11,130 global ratings</small>
                                            </span>
                                        </div>
                                        <div className="mb-8">
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                                                    <span className="d-inline-block align-middle text-muted">5</span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">53%</span>
                                            </div>
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                                                    <span className="d-inline-block align-middle text-muted">4</span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={50} />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">22%</span>
                                            </div>
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                                                    <span className="d-inline-block align-middle text-muted">3</span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={35} />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">14%</span>
                                            </div>
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                                                    <span className="d-inline-block align-middle text-muted">2</span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '22%' }} aria-valuenow={22} aria-valuemin={0} aria-valuemax={22} />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">5%</span>
                                            </div>
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                                                    <span className="d-inline-block align-middle text-muted">1</span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '14%' }} aria-valuenow={14} aria-valuemin={0} aria-valuemax={14} />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">7%</span>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <h4>Review this product</h4>
                                            <p className="mb-0">Share your thoughts with other customers.</p>
                                            <a href="#" className="btn btn-outline-gray-400 mt-4 text-muted">Read More Reviews</a>
                                        </div>
                                    </div>
                                </div>
                                {/* col */}
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <UserReview />
                                        <UserReview />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
