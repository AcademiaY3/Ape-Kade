import React from 'react'
import SellerContactForm from './SellerContactForm/SellerContactForm'
import SellerContactCard from './SellerContactCard/SellerContactCard'

export default function SellerContact() {
    return (
        <>
            <div className='col-12 col-lg-9 col-md-8'>
                <div className="row">
                    <SellerContactForm />
                    <SellerContactCard/>
                </div>
            </div>

        </>
    )
}
