import React from 'react'

export default function Products() {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        {/* page header */}
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div>
                                <h2>Products</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><a href="#" className="text-inherit">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Products</li>
                                    </ol>
                                </nav>
                            </div>
                            {/* button */}
                            <div>
                                <a href="add-product.html" className="btn btn-primary">Add Product</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card-lg">
                            <div className="px-6 py-6">
                                <div className="row justify-content-between">
                                    {/* form */}
                                    <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                                        <form className="d-flex" role="search">
                                            <input className="form-control" type="search" placeholder="Search Products" aria-label="Search" />
                                        </form>
                                    </div>
                                    {/* select option */}
                                    <div className="col-lg-2 col-md-4 col-12">
                                        <select className="form-select">
                                            <option selected>Status</option>
                                            <option value={1}>Active</option>
                                            <option value={2}>Deactive</option>
                                            <option value={3}>Draft</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* card body */}
                            <div className="card-body p-0">
                                {/* table */}
                                <div className="table-responsive">
                                    <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                        <thead className="bg-light">
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
                                                        <label className="form-check-label" htmlFor="checkAll" />
                                                    </div>
                                                </th>
                                                <th>Image</th>
                                                <th>Proudct Name</th>
                                                <th>Category</th>
                                                <th>Status</th>
                                                <th>Price</th>
                                                <th>Create at</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productOne" />
                                                        <label className="form-check-label" htmlFor="productOne" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-1.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Haldiram's Sev Bhujia</a></td>
                                                <td>Snack &amp; Munchies</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Active</span>
                                                </td>
                                                <td>$18.00</td>
                                                <td>24 Nov 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productTwo" />
                                                        <label className="form-check-label" htmlFor="productTwo" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-2.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">NutriChoice Digestive</a></td>
                                                <td>Bakery &amp; Biscuits</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Active</span>
                                                </td>
                                                <td>$24.00</td>
                                                <td>20 Nov 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productThree" />
                                                        <label className="form-check-label" htmlFor="productThree" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-3.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Cadbury 5 Star Chocolate</a></td>
                                                <td>Snack &amp; Munchies</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Active</span>
                                                </td>
                                                <td>$3.00</td>
                                                <td>14 Nov 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productFour" />
                                                        <label className="form-check-label" htmlFor="productFour" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-4.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Onion Flavour Potato</a></td>
                                                <td>Snack &amp; Munchies</td>
                                                <td>
                                                    <span className="badge bg-light-warning text-dark-warning">Draft</span>
                                                </td>
                                                <td>$13.00</td>
                                                <td>08 Nov 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productFive" />
                                                        <label className="form-check-label" htmlFor="productFive" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-5.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Salted Instant Popcorn</a></td>
                                                <td>Instant Food</td>
                                                <td>
                                                    <span className="badge bg-light-warning text-dark-warning">Draft</span>
                                                </td>
                                                <td>$9.00</td>
                                                <td>09 Nov 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productSix" />
                                                        <label className="form-check-label" htmlFor="productSix" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-6.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Blueberry Greek Yogurt</a></td>
                                                <td>Dairy, Bread &amp; Eggs</td>
                                                <td>
                                                    <span className="badge bg-light-danger text-dark-danger">Deactive</span>
                                                </td>
                                                <td>$11.00</td>
                                                <td>02 Nov 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productSeven" />
                                                        <label className="form-check-label" htmlFor="productSeven" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-7.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Britannia Cheese Slices</a></td>
                                                <td>Dairy, Bread &amp; Eggs</td>
                                                <td>
                                                    <span className="badge bg-light-success text-dark-success">Active</span>
                                                </td>
                                                <td>$24.00</td>
                                                <td>15 Oct 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productEight" />
                                                        <label className="form-check-label" htmlFor="productEight" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-8.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Blueberry Greek Yogurt</a></td>
                                                <td>Instant Food</td>
                                                <td>
                                                    <span className="badge bg-light-danger text-dark-danger">Deactive</span>
                                                </td>
                                                <td>$12.00</td>
                                                <td>24 Oct 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productNine" />
                                                        <label className="form-check-label" htmlFor="productNine" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-9.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Slurrp Millet Chocolate</a></td>
                                                <td>Instant Food</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Active</span>
                                                </td>
                                                <td>$8.00</td>
                                                <td>08 Oct 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="productTen" />
                                                        <label className="form-check-label" htmlFor="productTen" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!"><img src="../assets/images/products/product-img-10.jpg" alt className="icon-shape icon-md" /></a>
                                                </td>
                                                <td><a href="#" className="text-reset">Amul Butter - 500 g</a></td>
                                                <td>Instant Food</td>
                                                <td>
                                                    <span className="badge bg-light-primary text-dark-primary">Active</span>
                                                </td>
                                                <td>$8.00</td>
                                                <td>09 Oct 2022</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="feather-icon icon-more-vertical fs-5" />
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-trash me-3" />
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="bi bi-pencil-square me-3" />
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                                <span>Showing 1 to 8 of 12 entries</span>
                                <nav className="mt-2 mt-md-0">
                                    <ul className="pagination mb-0">
                                        <li className="page-item disabled"><a className="page-link" href="#!">Previous</a></li>
                                        <li className="page-item"><a className="page-link active" href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
