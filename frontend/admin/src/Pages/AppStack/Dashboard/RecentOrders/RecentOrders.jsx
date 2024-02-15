import React from 'react'

export default function RecentOrders() {
    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-6">
                <div className="card h-100 card-lg">
                    {/* heading */}
                    <div className="p-6">
                        <h3 className="mb-0 fs-5">Recent Order</h3>
                    </div>
                    <div className="card-body p-0">
                        {/* table */}
                        <div className="table-responsive">
                            <table className="table table-centered table-borderless text-nowrap table-hover">
                                <thead className="bg-light">
                                    <tr>
                                        <th scope="col">Order Number</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Order Date</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#FC0005</td>
                                        <td>Haldiram Sev Bhujia</td>
                                        <td>28 March 2023</td>
                                        <td>$18.00</td>
                                        <td>
                                            <span className="badge bg-light-primary text-dark-primary">Shipped</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#FC0004</td>
                                        <td>NutriChoice Digestive</td>
                                        <td>24 March 2023</td>
                                        <td>$24.00</td>
                                        <td>
                                            <span className="badge bg-light-warning text-dark-warning">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#FC0003</td>
                                        <td>Onion Flavour Potato</td>
                                        <td>8 Feb 2023</td>
                                        <td>$9.00</td>
                                        <td>
                                            <span className="badge bg-light-danger text-dark-danger">Cancel</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#FC0002</td>
                                        <td>Blueberry Greek Yogurt</td>
                                        <td>20 Jan 2023</td>
                                        <td>$12.00</td>
                                        <td>
                                            <span className="badge bg-light-warning text-dark-warning">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#FC0001</td>
                                        <td>Slurrp Millet Chocolate</td>
                                        <td>14 Jan 2023</td>
                                        <td>$8.00</td>
                                        <td>
                                            <span className="badge bg-light-info text-dark-info">Processing</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
