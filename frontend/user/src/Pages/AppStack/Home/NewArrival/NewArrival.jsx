import React from 'react'
import ArrivalCard from './ArrivalCard'

export default function NewArrival() {
    return (
        <section className="mt-10">
            <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-12">
                        <div className="mb-6 d-xl-flex justify-content-between align-items-center">
                            {/* heading */}
                            <div className="mb-5 mb-xl-0">
                                <h3 className="mb-0">New Products</h3>
                                <p className="mb-0">New products with updated stocks</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-shop fs-4" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row row-cols-2 row-cols-xl-5 row-cols-md-3 g-4">
                    <ArrivalCard/>
                    <ArrivalCard/>
                    <ArrivalCard/>
                    <ArrivalCard/>
                    <ArrivalCard/>
                    <ArrivalCard/>
                    <ArrivalCard/>
                    <ArrivalCard/>
                    <ArrivalCard/>
                    <ArrivalCard/>
                </div>
            </div>
        </section>

    )
}
