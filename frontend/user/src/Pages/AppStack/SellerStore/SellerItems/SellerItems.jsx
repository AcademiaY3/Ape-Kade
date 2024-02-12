import React from 'react'
import SellerItemCard from './SellerItemCard'

export default function SellerItems() {
    return (
        <div className="col-12 col-lg-9 col-md-8">
            <div className="mb-8 bg-light d-lg-flex justify-content-lg-between rounded">
                <div className="align-self-center p-8">
                    <div className="mb-3">
                        <h5 className="mb-0 fw-bold">E-Grocery Super Market</h5>
                        <p className="mb-0 text-muted">Whatever the occasion, weve got you covered.</p>
                    </div>
                    <div className="position-relative">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search E-Grocery Super Market" style={{ paddingRight: '30px' }} />
                    </div>
                </div>
                <div className="py-4">
                    {/* img */}
                    <img src="../assets/images/svg-graphics/store-graphics.svg" alt className="img-fluid" />
                </div>
            </div>
            <div className="d-md-flex justify-content-between mb-3 align-items-center">
                <div>
                    <p className="mb-3 mb-md-0">Product List</p>
                </div>
                <div className="d-flex justify-content-md-between align-items-center">
                    <div>
                        {/* select option */}
                        <select className="form-select">
                            <option selected>Sort by: Featured</option>
                            <option value="Low to High">Price: Low to High</option>
                            <option value="High to Low">Price: High to Low</option>
                            <option value="Release Date">Release Date</option>
                            <option value="Avg. Rating">Avg. Rating</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* row */}
            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                <SellerItemCard />
                <SellerItemCard />
                <SellerItemCard />
                <SellerItemCard />
                <SellerItemCard />
                <SellerItemCard />
                <SellerItemCard />
                <SellerItemCard />
                <SellerItemCard />
            </div>
        </div>
    )
}
