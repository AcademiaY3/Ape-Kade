import React from 'react'
import SubHeader from './Subheader/SubHeader'
import Navigator from './Navigator/Navigator'
import CartModel from './CartModel/CartModel'

export default function Header() {
    return (
        <>
            <SubHeader />
            <Navigator />
            <CartModel/>
        </>
    )
}
