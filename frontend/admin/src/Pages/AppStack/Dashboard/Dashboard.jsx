import React from 'react'
import DashBanner from './DashBanner/DashBanner'
import DashEarnings from './DashEarnings/DashEarnings'
import DashOrders from './DashOrders/DashOrders'
import DashCustomer from './DashCustomer/DashCustomer'
import RecentOrders from './RecentOrders/RecentOrders'
import NotiBanner from './NotificationBanner/NotiBanner'

export default function Dashboard() {
    return (
        <main className="main-content-wrapper pb-6 px-0 px-md-4">
            <section className="container">
                <DashBanner/>
                <div className="table-responsive-xl mb-6 mb-lg-0">
                    <div className="row flex-nowrap pb-3 pb-lg-0">
                        <DashEarnings />
                        <DashCustomer/>
                        <DashOrders />
                    </div>
                </div>
                <RecentOrders/>
            </section>
        </main>

    )
}
