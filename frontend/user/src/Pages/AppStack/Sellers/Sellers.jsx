import React from 'react'
import SellerCard from './SellerCard/SellerCard'

export default function Sellers() {
    return (
        <section className="mt-8 mb-lg-14 mb-8">
            <div className="container">
                {/* row */}
                <div className="mb-8 bg-light d-lg-flex justify-content-lg-between rounded">
                    <div className="align-self-center p-8">
                        <div className="mb-3">
                            <h5 className="mb-0 fw-bold">E-Grocery Sellers List</h5>
                            <p className="mb-0 text-muted">Whatever the occasion, weve got you covered.</p>
                        </div>
                        <div className="position-relative">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search E-Grocery Sellers" style={{ paddingRight: '30px' }} />
                        </div>
                    </div>
                    <div className="py-4">
                        {/* img */}
                        <img src="../assets/images/svg-graphics/store-graphics.svg" alt className="img-fluid" />
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 g-lg-4">
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                </div>
            </div>
        </section>

    )
}
