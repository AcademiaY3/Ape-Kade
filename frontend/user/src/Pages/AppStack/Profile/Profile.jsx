import React from 'react'
import ProfileNavbar from './ProfileNavbar/ProfileNavbar'
import Notification from './Notification/Notification'
import ProfileAddress from './ProfileAddress/ProfileAddress'
import ProfileSettings from './ProfileSettings/ProfileSettings'
import ProfileOrder from './ProfileOrder/ProfileOrder'
import ProfilePayment from './ProfilePayment/ProfilePayment'

export default function Profile() {
    return (
        <section>
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    <ProfileNavbar/>
                    {/* content outlet */}
                    {/* <Notification/> */}
                    <ProfileAddress/>
                    {/* <ProfileSettings/> */}
                    {/* <ProfileOrder/> */}
                    {/* <ProfilePayment/> */}
                </div>
            </div>
        </section>

    )
}
