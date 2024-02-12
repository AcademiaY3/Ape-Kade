import React from 'react'

export default function UserReview() {
    return (
        <div className="d-flex border-bottom pb-6 pt-4">
            {/* img */}
            <img src="../assets/images/avatar/avatar-12.jpg" alt className="rounded-circle avatar-lg" />
            <div className="ms-5">
                <h6 className="mb-1">Robert Thomas</h6>
                {/* content */}
                <p className="small">
                    <span className="text-muted">29 December 2022</span>
                    <span className="text-primary ms-3 fw-bold">Verified Purchase</span>
                </p>
                {/* rating */}
                <div className="mb-2">
                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                    <i className="fa-solid fa-star" style={{ color: '#FFD43B' }} />
                    <span className="ms-3 text-dark fw-bold">Need to recheck the weight at delivery point</span>
                </div>
                <p className="mb-0">
                    Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between.
                    FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .
                </p>
            </div>
        </div>
    )
}
