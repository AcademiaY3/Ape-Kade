import React from 'react'

export default function Paginator() {
    return (
        <div className="border-top d-flex justify-content-between align-items-md-center px-6 py-6 flex-md-row flex-column gap-4">
            <span>Showing 1 to 8 of 12 entries</span>
            <nav>
                <ul className="pagination mb-0">
                    <li className="page-item disabled"><a className="page-link" href="#!">Previous</a></li>
                    <li className="page-item"><a className="page-link active" href="#!">1</a></li>
                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                    <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}
