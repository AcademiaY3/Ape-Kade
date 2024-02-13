import React from 'react'

export default function BlogItem() {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-10">
            <div className="mb-4">
                <a href="#!">
                    {/* img */}
                    <div className="img-zoom">
                        <img src="../assets/images/blog/blog-img-1.jpg" alt className="img-fluid w-100" />
                    </div>
                </a>
            </div>
            {/* text */}
            <div className="mb-3"><a href="#!">Recipes</a></div>
            {/* text */}
            <div>
                <h2 className="h5"><a href="#!" className="text-inherit">Harissa Chickpeas with Whipped Feta</a>
                </h2>
                <p>In et eros dapibus, facilisis ipsum sit amet, tempor dolor. Donec sed nisi gravida,
                    molestie dolor molestie, congue sapien.</p>
                <div className="d-flex justify-content-between text-muted mt-4">
                    <span><small>22 April 2023</small></span>
                    <span>
                        <small>
                            Read time:
                            <span className="text-dark fw-bold">12min</span>
                        </small>
                    </span>
                </div>
            </div>
        </div>
    )
}
