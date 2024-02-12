import React from 'react'
import ProductCard from './ProductCard/ProductCard'

export default function Products() {
    return (
        <div className="mt-4 mb-lg-14 mb-8">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    <section className="col-md-12">
                        {/* card */}
                        <div className="card mb-4 bg-light border-0">
                            {/* card body */}
                            <div className="card-body p-9">
                                <h2 className="mb-0 fs-1">Snacks &amp; Munchies</h2>
                            </div>
                        </div>
                        {/* list icon */}
                        <div className="d-lg-flex justify-content-between align-items-center">
                            <div className="mb-3 mb-lg-0">
                                <p className="mb-0">
                                    <span className="text-dark">24</span>
                                    Products found
                                </p>
                            </div>
                            {/* icon */}
                            <div className="d-md-flex justify-content-between align-items-center">
                                <div className="d-flex mt-2 mt-lg-0">
                                    <div className="me-2 flex-grow-1">
                                        {/* select option */}
                                        <input type="text" aria-label="Last name" className="form-control w-100" placeholder="Search for products" />
                                    </div>
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
                        </div>
                        {/* row */}
                        <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-2 mt-2">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}
