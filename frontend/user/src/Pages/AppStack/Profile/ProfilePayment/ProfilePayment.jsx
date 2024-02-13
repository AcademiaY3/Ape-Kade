import React from 'react'

export default function ProfilePayment() {
  return (
    <div className="col-lg-10 col-md-8 col-12">
      <div className="py-6 p-md-6">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="row">
              <div className="col-12">
                <div className="mb-6">
                  <h2 className="mb-0">Payment Info</h2>
                </div>
                {/* input */}
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input type="text" className="form-control" placeholder="1234 4567 6789 4321" />
                </div>
              </div>
              <div className="col-md-6 col-12">
                {/* input */}
                <div className="mb-3 mb-lg-0">
                  <label className="form-label">Name on card</label>
                  <input type="text" className="form-control" placeholder="Enter your first name" />
                </div>
              </div>
              <div className="col-md-3 col-12">
                {/* input */}
                <div className="mb-3 mb-lg-0 position-relative">
                  <label className="form-label">Expiry date</label>
                  <input className="form-control flatpickr" type="text" placeholder="Select Date" />
                  <div className="position-absolute bottom-0 end-0 p-3 lh-1">
                    <i className="bi bi-calendar text-muted" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12">
                {/* input */}
                <div className="mb-3 mb-lg-0">
                  <label className="form-label">CVV code</label>
                  <input type="password" className="form-control" placeholder="***" />
                </div>
              </div>
              <div className='col-12 text-end mt-4'>
                <button className='btn btn-primary'>Save Details</button>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex justify-content-end align-items-start col-12 col-lg-4 offset-lg-1">
            <img src="../assets/images/profile/pay.png" alt className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
