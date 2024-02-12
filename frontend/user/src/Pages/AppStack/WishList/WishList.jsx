import React from 'react'
import WishListItem from './WishListItem'

export default function WishList() {
    return (
        <section className="my-4">
            <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-8">
                            {/* heading */}
                            <h1 className="mb-0">My Wishlist</h1>
                        </div>
                        <div>
                            {/* table */}
                            <div className="table-responsive">
                                <table className="table text-nowrap table-with-checkbox">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Image</th>
                                            <th>Product</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <WishListItem/>
                                        <WishListItem/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
