import React from 'react'

export default function ProductDetail() {
    return (
        <section className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mt-8">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="mb-4">Details</h4>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <table className="table table-striped">
                                        {/* table */}
                                        <tbody>
                                            <tr>
                                                <th>Weight</th>
                                                <td>1000 Grams</td>
                                            </tr>
                                            <tr>
                                                <th>Ingredient Type</th>
                                                <td>Vegetarian</td>
                                            </tr>
                                            <tr>
                                                <th>Brand</th>
                                                <td>Dmart</td>
                                            </tr>
                                            <tr>
                                                <th>Item Package Quantity</th>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <th>Form</th>
                                                <td>Larry the Bird</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <table className="table table-striped">
                                        {/* table */}
                                        <tbody>
                                            <tr>
                                                <th>ASIN</th>
                                                <td>SB0025UJ75W</td>
                                            </tr>
                                            <tr>
                                                <th>Best Sellers Rank</th>
                                                <td>#2 in Fruits</td>
                                            </tr>
                                            <tr>
                                                <th>Date First Available</th>
                                                <td>30 April 2022</td>
                                            </tr>
                                            <tr>
                                                <th>Item Weight</th>
                                                <td>500g</td>
                                            </tr>
                                            <tr>
                                                <th>Generic Name</th>
                                                <td>Banana Robusta</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
