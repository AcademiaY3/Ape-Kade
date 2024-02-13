import React from 'react'

export default function ProfileOrder() {
    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
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
                            {/* Table body */}
                            <tr>
                                <td className="align-middle border-top-0 w-0">
                                    <a href="#"><img src="../assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="fw-semibold text-inherit">
                                        <h6 className="mb-0">Haldiram's Nagpur Aloo Bhujia</h6>
                                    </a>
                                    <span><small className="text-muted">400g</small></span>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="text-inherit">#14899</a>
                                </td>
                                <td className="align-middle border-top-0">March 5, 2023</td>
                                <td className="align-middle border-top-0">1</td>
                                <td className="align-middle border-top-0">
                                    <span className="badge bg-warning">Processing</span>
                                </td>
                                <td className="align-middle border-top-0">$15.00</td>
                                <td className="text-muted align-middle border-top-0">
                                    <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle border-top-0 w-0">
                                    <a href="#"><img src="../assets/images/products/product-img-2.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="fw-semibold text-inherit">
                                        <h6 className="mb-0">Nutri Choise Biscuit</h6>
                                    </a>
                                    <span><small className="text-muted">2 Pkt</small></span>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="text-inherit">#14658</a>
                                </td>
                                <td className="align-middle border-top-0">July 9, 2023</td>
                                <td className="align-middle border-top-0">2</td>
                                <td className="align-middle border-top-0">
                                    <span className="badge bg-success">Completed</span>
                                </td>
                                <td className="align-middle border-top-0">$45.00</td>
                                <td className="text-muted align-middle border-top-0">
                                    <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle border-top-0 w-0">
                                    <a href="#"><img src="../assets/images/products/product-img-3.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="text-inherit">
                                        <h6 className="mb-0">Cadbury Dairy Milk 5 Star Bites</h6>
                                        <span><small className="text-muted">202 g</small></span>
                                    </a>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="text-inherit">#13778</a>
                                </td>
                                <td className="align-middle border-top-0">Oct 03, 2023</td>
                                <td className="align-middle border-top-0">4</td>
                                <td className="align-middle border-top-0">
                                    <span className="badge bg-success">Completed</span>
                                </td>
                                <td className="align-middle border-top-0">$99.00</td>
                                <td className="text-muted align-middle border-top-0">
                                    <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle border-top-0 w-0">
                                    <a href="#"><img src="../assets/images/products/product-img-4.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="fw-semibold text-inherit">
                                        <h6 className="mb-0">Onion Flavour Potato</h6>
                                    </a>
                                    <span><small className="text-muted">100 g</small></span>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="text-inherit">#13746</a>
                                </td>
                                <td className="align-middle border-top-0">March 5, 2023</td>
                                <td className="align-middle border-top-0">1</td>
                                <td className="align-middle border-top-0">
                                    <span className="badge bg-success">Completed</span>
                                </td>
                                <td className="align-middle border-top-0">$12.00</td>
                                <td className="text-muted align-middle border-top-0">
                                    <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle border-top-0 w-0">
                                    <a href="#"><img src="../assets/images/products/product-img-5.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="fw-semibold text-inherit">
                                        <h6 className="mb-0">Salted Instant Popcorn</h6>
                                    </a>
                                    <span><small className="text-muted">500 g</small></span>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="text-inherit">#13566</a>
                                </td>
                                <td className="align-middle border-top-0">July 9, 2023</td>
                                <td className="align-middle border-top-0">2</td>
                                <td className="align-middle border-top-0">
                                    <span className="badge bg-danger">Cancel</span>
                                </td>
                                <td className="align-middle border-top-0">$6.00</td>
                                <td className="text-muted align-middle border-top-0">
                                    <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle border-top-0 w-0">
                                    <a href="#"><img src="../assets/images/products/product-img-6.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="fw-semibold text-inherit">
                                        <h6 className="mb-0">Blueberry Greek Yogurt</h6>
                                    </a>
                                    <span><small className="text-muted">500 g</small></span>
                                </td>
                                <td className="align-middle border-top-0">
                                    <a href="#" className="text-inherit">#12094</a>
                                </td>
                                <td className="align-middle border-top-0">Oct 03, 2023</td>
                                <td className="align-middle border-top-0">4</td>
                                <td className="align-middle border-top-0">
                                    <span className="badge bg-success">Completed</span>
                                </td>
                                <td className="align-middle border-top-0">$18.00</td>
                                <td className="text-muted align-middle border-top-0">
                                    <a href="#" className="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i className="feather-icon icon-eye" /></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
