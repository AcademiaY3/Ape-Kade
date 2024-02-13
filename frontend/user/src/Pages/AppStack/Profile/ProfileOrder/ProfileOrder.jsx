import React from 'react'
import OrderItem from './OrderItem/OrderItem'

export default function ProfileOrder() {
    return (
        <div className="col-lg-10 col-md-8 col-12">
            <div className="py-6 p-md-6">
                {/* heading */}
                <h2 className="mb-6">Your Orders</h2>
                <div className="table-responsive-xxl border-0">
                    {/* Table */}
                    <table className="table mb-0 text-nowrap table-centered">
                        {/* Table Head */}
                        <thead className="bg-light">
                            <tr>
                                <th>&nbsp;</th>
                                <th>Product</th>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Items</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {/* order item */}
                            <OrderItem/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
