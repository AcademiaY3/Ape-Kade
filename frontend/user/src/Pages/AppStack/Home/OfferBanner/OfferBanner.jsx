import React from 'react'
import Banner01 from './Banner01/Banner01'
import Banner02 from './Banner01/Banner02'
import Banner03 from './Banner01/Banner03'

export default function OfferBanner() {
    return (
        <section className="my-10 mb-8">
            <div className="container">
                {/* row */}
                <div className="table-responsive-xl pb-6 pb-xl-0">
                    <div className="row flex-nowrap">
                        <Banner01 />
                        <Banner02 />
                        <Banner03/>
                    </div>
                </div>
            </div>
        </section>

    )
}
