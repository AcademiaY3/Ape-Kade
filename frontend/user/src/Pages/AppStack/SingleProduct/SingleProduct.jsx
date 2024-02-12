import React from 'react'
import ProductBanner from './ProductBanner/ProductBanner'
import ProductDetail from './ProductDetail/ProductDetail'
import RelatedProduct from './RelatedProduct/RelatedProduct'
import ProductReview from './ProductReview/ProductReview'

export default function SingleProduct() {
  return (
      <>
          <ProductBanner />
          <ProductDetail />
          <ProductReview/>
          <RelatedProduct/>
    </>
  )
}
