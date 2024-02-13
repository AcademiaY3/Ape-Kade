import React from 'react'

export default function BlogBanner() {
    return (
        <div className="row d-flex align-items-center mb-8">
            <div className="col-12 col-md-12 col-lg-7">
                <a href="#!">
                    {/* img */}
                    <div className="img-zoom">
                        <img src="../assets/images/blog/blog-banner.png" alt className="img-fluid w-100" />
                    </div>
                </a>
            </div>
            {/* text */}
            <div className="col-12 col-md-12 col-lg-5">
                <div className="ps-lg-8 mt-8 mt-lg-0">
                    <h2 className=" mb-4 mb-lg-8 text-capitalize"><a href="#" className="text-inherit">Apekade Latest Trends and blogs for all</a></h2>
                    <p>
                        Apekade, e-commerce blog is a treasure trove of insights, featuring expert advice, industry trends, and product spotlights. Dive into informative articles on online marketing strategies, e-commerce innovations, and customer engagement. Stay ahead with Apekade's blog, your go-to source for navigating the ever-evolving world of digital commerce.
                    </p>
                    <p className=''>
                        Delve into thought-provoking articles that explore the latest e-commerce technologies, marketing tactics, and customer-centric approaches. From in-depth product reviews to strategic business guides, Apekade's blog is a valuable companion, guiding readers through the dynamic landscape of e-commerce, fostering knowledge, and promoting successful digital ventures. Stay informed, stay inspired with Apekade's insightful blog posts.
                    </p>
                    <div className="d-flex justify-content-between text-muted">
                        <span><small>25 April 2023</small></span>
                        <span>
                            <small>
                                Read time:
                                <span className="text-dark fw-bold">6min</span>
                            </small>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
