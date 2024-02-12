import React from 'react'

export default function SellerItemCard() {
    return (
        <div className="col">
            <a href="/product-details">
                {/* card */}
            </a><div className="card card-product-v2 h-100"><a href="/product-details">
            </a><div className="card-body position-relative"><a href="/product-details">
                {/* badge */}
            </a><div className="text-center position-relative"><a href="/product-details">
                <div className="position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                </div>
                {/* img */}
                <img src="../assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
                {/* action btn */}
            </a><div className="product-action-btn"><a href="/product-details">
            </a><a href="#" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Cart" data-bs-original-title="Cart"><i className="fa-solid fa-cart-shopping" /></a>
                            <a href="#" className="btn-action mb-1" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist"><i className="fa-solid fa-heart" /></a>
                        </div>
                    </div>
                    {/* title */}
                    <h2 className="fs-6">Haldirams Sev Bhujia</h2>
                    <div className="d-flex flex-row justify-content-between w-100">
                        {/* rating */}
                        <small className="text-warning">
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                        </small>
                        <span className="text-muted small">4.5(149)</span>
                    </div>
                    {/* price */}
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                            <span className="text-danger">$18</span>
                            <span className="text-decoration-line-through text-muted">$24</span>
                        </div>
                        <div><span className="text-uppercase small text-primary">In Stock</span></div>
                    </div>
                </div>
                {/* hidden class for hover */}
                <div className="product-content-fade border-info" />
            </div>
        </div>
    )
}
