import React from 'react'

export default function Dashboard() {
    return (
        <main className="main-content-wrapper">
            <section className="container">
                {/* row */}
                <div className="row mb-8">
                    <div className="col-md-12">
                        {/* card */}
                        <div className="card bg-light border-0 rounded-4" style={{ backgroundImage: 'url(../assets/images/slider/slider-image-1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right' }}>
                            <div className="card-body p-lg-12">
                                <h1>Welcome back! Admin</h1>
                                <p className='text-capitalize'>Users are waiting , until your services to the apeKade.</p>
                                <a href="#" className="btn btn-primary">See Users</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* table */}
                <div className="table-responsive-xl mb-6 mb-lg-0">
                    <div className="row flex-nowrap pb-3 pb-lg-0">
                        <div className="col-lg-4 col-12 mb-6">
                            {/* card */}
                            <div className="card h-100 card-lg">
                                {/* card body */}
                                <div className="card-body p-6">
                                    {/* heading */}
                                    <div className="d-flex justify-content-between align-items-center mb-6">
                                        <div>
                                            <h4 className="mb-0 fs-5">Earnings</h4>
                                        </div>
                                        <div className="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                                            <i className="bi bi-currency-dollar fs-5" />
                                        </div>
                                    </div>
                                    {/* project number */}
                                    <div className="lh-1">
                                        <h1 className="mb-2 fw-bold fs-2">$93,438.78</h1>
                                        <span>Monthly revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-6">
                            {/* card */}
                            <div className="card h-100 card-lg">
                                {/* card body */}
                                <div className="card-body p-6">
                                    {/* heading */}
                                    <div className="d-flex justify-content-between align-items-center mb-6">
                                        <div>
                                            <h4 className="mb-0 fs-5">Orders</h4>
                                        </div>
                                        <div className="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                                            <i className="bi bi-cart fs-5" />
                                        </div>
                                    </div>
                                    {/* project number */}
                                    <div className="lh-1">
                                        <h1 className="mb-2 fw-bold fs-2">42,339</h1>
                                        <span>
                                            <span className="text-dark me-1">35+</span>
                                            New Sales
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-6">
                            {/* card */}
                            <div className="card h-100 card-lg">
                                {/* card body */}
                                <div className="card-body p-6">
                                    {/* heading */}
                                    <div className="d-flex justify-content-between align-items-center mb-6">
                                        <div>
                                            <h4 className="mb-0 fs-5">Customer</h4>
                                        </div>
                                        <div className="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                                            <i className="bi bi-people fs-5" />
                                        </div>
                                    </div>
                                    {/* project number */}
                                    <div className="lh-1">
                                        <h1 className="mb-2 fw-bold fs-2">39,354</h1>
                                        <span>
                                            <span className="text-dark me-1">30+</span>
                                            new in 2 days
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-6">
                        {/* card */}
                        <div className="card h-100 card-lg">
                            {/* card body */}
                            <div className="card-body p-6">
                                <h3 className="mb-0 fs-5">Sales Overview</h3>
                                <div className="mt-6">
                                    {/* text */}
                                    <div className="mb-5">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="fs-6">Total Profit</h5>
                                            <span>
                                                <span className="me-1 text-dark">$1,619</span>
                                                (8.6%)
                                            </span>
                                        </div>
                                        {/* main wrapper */}
                                        <div>
                                            {/* progressbar */}
                                            <div className="progress bg-light-primary" style={{ height: 6 }}>
                                                <div className="progress-bar bg-primary" role="progressbar" aria-label="Example 1px high" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        {/* text */}
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="fs-6">Total Income</h5>
                                            <span>
                                                <span className="me-1 text-dark">$3,571</span>
                                                (86.4%)
                                            </span>
                                        </div>
                                        <div>
                                            {/* progressbar */}
                                            <div className="progress bg-info-soft" style={{ height: 6 }}>
                                                <div className="progress-bar bg-info" role="progressbar" aria-label="Example 1px high" style={{ width: '88%' }} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {/* text */}
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="fs-6">Total Expenses</h5>
                                            <span>
                                                <span className="me-1 text-dark">$3,430</span>
                                                (74.5%)
                                            </span>
                                        </div>
                                        <div>
                                            {/* progressbar */}
                                            <div className="progress bg-light-danger" style={{ height: 6 }}>
                                                <div className="progress-bar bg-danger" role="progressbar" aria-label="Example 1px high" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-6">
                        <div className="position-relative h-100">
                            {/* card */}
                            <div className="card card-lg mb-6">
                                {/* card body */}
                                <div className="card-body px-6 py-8">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            {/* svg */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-bell text-warning" viewBox="0 0 16 16">
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                            </svg>
                                        </div>
                                        {/* text */}
                                        <div className="ms-4">
                                            <h5 className="mb-1">Start your day with New Notification.</h5>
                                            <p className="mb-0">
                                                You have
                                                <a className="link-info" href="#!">2 new notification</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card */}
                            <div className="card card-lg">
                                {/* card body */}
                                <div className="card-body px-6 py-8">
                                    <div className="d-flex align-items-center">
                                        {/* svg */}
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-lightbulb text-success" viewBox="0 0 16 16">
                                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                            </svg>
                                        </div>
                                        {/* text */}
                                        <div className="ms-4">
                                            <h5 className="mb-1">Monitor your Sales and Profitability</h5>
                                            <p className="mb-0"><a className="link-info" href="#!">View Performance</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
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
                                                <td>Haldiram's Sev Bhujia</td>
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
            </section>
        </main>

    )
}
