import React from 'react'
import SellerSpec from './SellerSpec/SellerSpec'
import SellerItems from './SellerItems/SellerItems'
import SellerContact from './SellerContact/SellerContact'

export default function SellerStore() {
    return (
        <section className="mb-8 mt-8">
            <div className="container">
                {/* row */}
                <div className="row">
                    <SellerSpec />
                    {/* outlet should present here */}
                    {/* <SellerItems /> */}
                    <SellerContact/>
                </div>
            </div>
        </section>

    )
}
