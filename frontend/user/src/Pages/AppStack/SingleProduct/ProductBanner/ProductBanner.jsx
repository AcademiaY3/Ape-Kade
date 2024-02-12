import React from 'react'

export default function ProductBanner() {
    return (
        <section className="mt-8">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/* img slide */}
                        <div className="product" id="product">
                            <div className="zoom" style={{ backgroundImage: 'url(../assets/images/products/product-single-img-1.jpg)' }}>
                                <img src="../assets/images/products/product-single-img-1.jpg" alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-lg-10 mt-6 mt-md-0">
                            {/* content */}
                            <a href="#!" className="mb-4 d-block">Bakery Biscuits</a>
                            {/* heading */}
                            <h1 className="mb-1">Napolitanke Ljesnjak</h1>
                            <div className="mb-4">
                                {/* rating */}
                                {/* rating */}
                                <small className="text-warning">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                </small>
                                <a href="#" className="ms-2">(30 reviews)</a>
                            </div>
                            <div className="fs-4">
                                {/* price */}
                                <span className="fw-bold text-dark">$32</span>
                                <span className="text-decoration-line-through text-muted">$35</span>
                                <span><small className="fs-6 ms-2 text-danger">26% Off</small></span>
                            </div>
                            {/* hr */}
                            <div className="mt-4">
                                <div className="mb-4">
                                    {/* text */}
                                    <h4 className="mb-1">Nutrient Value &amp; Benefits</h4>
                                    <p className="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc
                                        sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <h5 className="mb-1">Seller</h5>
                                    <p className="mb-0">DMart Pvt. LTD</p>
                                </div>
                            </div>
                            <hr className="my-2" />
                            <div className="mt-3 d-flex flex-row justify-content-end align-items-center">
                                <button type="button" className="btn btn-primary me-4">
                                    <i className="fa-solid fa-cart-shopping mx-3" />
                                    Add to cart
                                </button>
                                <button type="button" className="btn btn-danger">
                                    <i className="fa-solid fa-money-bill mx-3" />
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
