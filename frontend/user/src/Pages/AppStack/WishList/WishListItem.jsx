import React from 'react'

export default function WishListItem() {
    return (
        <tr>
            <td className="align-middle">
                <a href="#"><img src="../assets/images/products/product-img-18.jpg" className="icon-shape icon-xxl" alt /></a>
            </td>
            <td className="align-middle">
                <div>
                    <h5 className="fs-6 mb-0"><a href="#" className="text-inherit">Organic
                        Banana</a></h5>
                    <small>$.98 / lb</small>
                </div>
            </td>
            <td className="align-middle">$35.00</td>
            <td className="align-middle"><span className="badge bg-success">In Stock</span></td>
            <td className="align-middle">
                <div className="btn btn-primary btn-sm">Add to Cart</div>
            </td>
            <td className="align-middle">
                <a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                    <i className="fa-solid fa-trash fs-4 text-danger"></i>
                </a>
            </td>
        </tr>
    )
}
