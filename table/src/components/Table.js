import React, { useState } from 'react'
import Tablerow from './Tablerow'
import Sample from './TableAPI'
import './Table.css'




const Table = () => {
    const[sample]=useState(Sample)
  return (
    <>
    <h1>Recent Users</h1>
    <div id="center">
    <table>
    <tr>
        <td>S No</td>
        <td>First name</td>
        <td>Last Name</td>
        <td>Email</td>
        <td>gender</td>
        <td>IP Address</td>
        <td>Profile Picture</td>
    </tr>
    <Tablerow data={sample}/>
    </table>
    </div>
  
    </>
  )
}

export default Table
