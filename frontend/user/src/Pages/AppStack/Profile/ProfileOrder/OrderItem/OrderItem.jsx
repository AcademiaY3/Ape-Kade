import React from 'react'

export default function OrderItem() {
    return (
        <tr>
            <td className="align-middle border-top-0 w-0">
                <a href="#"><img src="../assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xl" /></a>
            </td>
            <td className="align-middle border-top-0">
                <a href="#" className="fw-semibold text-inherit">
                    <h6 className="mb-0">Haldirams Nagpur Aloo Bhujia</h6>
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
    )
}
