import React from 'react'
import Navbar from './Navbar'

const ViewAllVisitors = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Purpose</th>
      <th scope="col">Whom To Meet</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Rahul</th>
      <td>Raj</td>
      <td>Enquiry</td>
      <td>David</td>
      <td>27-10-2024</td>
    </tr>
    <tr>
      <th scope="row">Ebin</th>
      <td>Jacob</td>
      <td>Enquiry</td>
      <td>Priya</td>
      <td>04-07-2024</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAllVisitors