import React from 'react'
import SellerSpec from './SellerSpec/SellerSpec'
import SellerItems from './SellerItems/SellerItems'

export default function SellerStore() {
    return (
        <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
                {/* row */}
                <div className="row">
                    <SellerSpec />
                    {/* outlet should present here */}
                    <SellerItems/>
                </div>
            </div>
        </section>

    )
}
