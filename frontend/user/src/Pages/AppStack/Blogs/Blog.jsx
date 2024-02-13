import React from 'react'
import BlogBanner from './BlogBanner/BlogBanner'
import BlogItem from './BlogItem/BlogItem'
import BlogHeader from './BlogHeader/BlogHeader'

export default function Blog() {
    return (
        <>
            <BlogHeader />
            <section className="mt-6 mb-lg-14 mb-8">
                {/* container */}
                <div className="container">
                    <BlogBanner />
                    {/* row */}
                    <div className="row">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </div>
                </div>
            </section>
        </>

    )
}
