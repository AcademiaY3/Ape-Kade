import React from 'react'

export default function TeamCard() {
    return (
        <>
            <div className="bg-light rounded mb-5 my-md-0">
                {/* text */}
                <div className="p-6">
                    <h5 className="h6 mb-0">Chris Rogers</h5>
                    <small>Vice President, Retail</small>
                </div>
                {/* img */}
                <img src="../assets/images/about/team-1.png" alt className="img-fluid" />
            </div>
        </>
    )
}
