import React from 'react'

export default function SellerContactForm() {
    return (
        <div className="col-md-7 col-12">
            <div className="mb-2">
                {/* heading */}
                <h1 className="h3">Contact Seller</h1>
            </div>
            {/* form */}
            <form className="row needs-validation" noValidate>
                {/* input */}
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="contactFName">
                        First Name
                        <span className="text-danger">*</span>
                    </label>
                    <input type="text" id="contactFName" className="form-control" name="contactFName" placeholder="Enter Your First Name" required />
                    <div className="invalid-feedback">Please enter firstname.</div>
                </div>
                <div className="col-md-6 mb-3">
                    {/* input */}
                    <label className="form-label" htmlFor="contactLName">
                        Last Name
                        <span className="text-danger">*</span>
                    </label>
                    <input type="text" id="contactLName" className="form-control" name="contactLName" placeholder="Enter Your Last name" required />
                    <div className="invalid-feedback">Please enter lastname.</div>
                </div>
                <div className="col-md-12 mb-3">
                    {/* input */}
                    <label className="form-label" htmlFor="contactTitle">Title</label>
                    <input type="text" id="contactTitle" name="contactTitle" className="form-control" placeholder="Your Title" required />
                    <div className="invalid-feedback">Please enter title.</div>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="contactEmail">
                        Email
                        <span className="text-danger">*</span>
                    </label>
                    <input type="email" id="contactEmail" name="contactEmail" className="form-control" placeholder="Enter Your First Name" required />
                    <div className="invalid-feedback">Please enter email.</div>
                </div>
                <div className="col-md-6 mb-3">
                    {/* input */}
                    <label className="form-label" htmlFor="contactPhone">Phone</label>
                    <input type="text" id="contactPhone" name="contactPhone" className="form-control" placeholder="Your Phone Number" required />
                    <div className="invalid-feedback">Please enter phone.</div>
                </div>
                <div className="col-md-12 mb-3">
                    {/* input */}
                    <label className="form-label" htmlFor="contactTearea">Textarea</label>
                    <textarea rows={3} id="contactTearea" className="form-control" placeholder="Additional Comments" required defaultValue={""} />
                    <div className="invalid-feedback">Please enter a message in the textarea.</div>
                </div>
                <div className="col-md-12">
                    {/* btn */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
