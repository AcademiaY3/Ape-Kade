import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashBanner() {
    const navigate = useNavigate()
    const navToUsers = () => {
        navigate('/app/customers')
    }
    return (
        <div className="row mb-8">
            <div className="col-md-12">
                {/* card */}
                <div className="card-lg bg-light p-8 border-0 rounded-4" style={{ backgroundImage: 'url(/assets/images/banner/mainAdminBanner.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'right' }}>
                    <div className="card-body">
                        <h1>Welcome Back!</h1>
                        <p className='text-capitalize'>Users are waiting , until your services to the apeKade.</p>
                        <button onClick={()=>{navToUsers()}} className="btn btn-primary">See All Users</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
