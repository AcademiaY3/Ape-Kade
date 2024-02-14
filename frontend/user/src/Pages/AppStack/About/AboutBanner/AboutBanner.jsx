import React from 'react'
import AboutCard from './AboutCard/AboutCard'

export default function AboutBanner() {
    return (
        <>
            {/* section */}
            < section className="mt-10" >
                {/* container */}
                < div className="container" >
                    {/* row */}
                    < div className="row" >
                        {/* col */}
                        < div className="col-12">
                            {/* row */}
                            <div className="row mb-12">
                                <div className="col-12">
                                    <div className="mb-8">
                                        {/* heading */}
                                        <h2>Ready to get started?</h2>
                                    </div>
                                </div>

                                <AboutCard />
                                <AboutCard />
                                <AboutCard />
                                <AboutCard />

                                <div className="col-12">
                                    {/* text */}
                                    <p>
                                        For assistance using Apekade services, please visit our
                                        <a href="#">Help Center</a>
                                    </p>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >
        </>
    )
}
