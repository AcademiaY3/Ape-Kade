import React from 'react'
import BlogBody from './BlogBody/BlogBody'
import BlogQuote from './BlogQuote/BlogQuote'
import BlogAuther from './BlogAuth/BlogAuther'

export default function BlogDetail() {
    return (
        <>
            <section className="mt-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div>
                                <div className="mb-5">
                                    <h1 className="fw-bold text-center">Garlic Cream Bucatini with Peas and Asparagus</h1>
                                </div>
                                <div className="mb-8"><img src="../assets/images/blog/blog-img-4.jpg" alt className="img-fluid rounded" /></div>
                            </div>
                            <BlogQuote />
                            <BlogBody />
                            <BlogAuther />
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
