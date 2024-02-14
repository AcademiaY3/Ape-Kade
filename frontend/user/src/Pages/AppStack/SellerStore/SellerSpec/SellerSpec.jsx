import React from 'react'
import SellerProductCats from './SellerProductCats'

export default function SellerSpec() {
    return (
        <div className="col-12 col-lg-3 col-md-4 mb-4 mb-md-0">
            <div className="d-flex flex-column">
                <div>
                    <img src="../assets/images/stores-logo/stores-logo-1.svg" alt className="rounded-circle icon-shape icon-xxl" />
                </div>
                {/* heading */}
                <div className="mt-4">
                    <h1 className="mb-1 h4">E-Grocery Super Market</h1>
                    <div className="small text-muted">
                        <span>Everyday store prices</span>
                    </div>
                    <div>
                        <span>
                            <small><a href="#">100% satisfaction guarantee</a></small>
                        </span>
                    </div>
                    {/* rating */}
                    <div className="mt-2">
                        {/* rating */}
                        <small className="text-warning">
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                            <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                        </small>
                        <span className="ms-2">5.0</span>
                        {/* text */}
                        <span className="text-muted ms-1">(3,400 reviews)</span>
                    </div>
                </div>
            </div>
            <hr />
            {/* nav */}
            <ul className="nav flex-column nav-pills nav-pills-dark">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    <i className="fa-solid fa-bag-shopping me-4"/>
                        Shop
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">
                    <i className="fa-solid fa-pen me-4"/>
                        Contact
                    </a>
                </li>
            </ul>
            <hr />
            <div>
                <h4>Categories</h4>
                <ul className="nav flex-column nav-links">
                    {/* nav item */}
                    <SellerProductCats/>
                    <SellerProductCats/>
                    <SellerProductCats/>
                </ul>
            </div>
        </div>
    )
}
