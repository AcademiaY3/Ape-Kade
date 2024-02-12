import React from 'react'
import RelatedCard from './RelatedCard'

export default function RelatedProduct() {
    return (
        <section className="my-8">
            <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-12">
                        {/* heading */}
                        <h3>Related Items</h3>
                    </div>
                </div>
                {/* row */}
                <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
                    <RelatedCard/>
                    <RelatedCard/>
                    <RelatedCard/>
                    <RelatedCard/>
                    <RelatedCard/>
                </div>
            </div>
        </section>

    )
}
