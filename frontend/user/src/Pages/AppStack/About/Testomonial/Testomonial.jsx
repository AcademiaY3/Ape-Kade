import React from 'react'
import TeamCard from './TeamCard/TeamCard'

export default function Testomonial() {
    return (
        <>
            {/* section */}
            <section className="my-10">
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center mx-4">
                    {/* item */}
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                </div>
            </section>
        </>
    )
}
