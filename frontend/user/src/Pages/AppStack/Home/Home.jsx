import React from 'react'
import MainBanner from './MainBanner/MainBanner'
import Category from './Category/Category'
import MobilePreview from './MobilePreview/MobilePreview'
import NewArrival from './NewArrival/NewArrival'
import OfferBanner from './OfferBanner/OfferBanner'
import NewsLetter from './NewsLetter/NewsLetter'

export default function Home() {
    return (
        <>
            <MainBanner />
            <Category />
            <MobilePreview />
            <NewArrival />
            <OfferBanner />
            <NewsLetter/>
        </>
    )
}
