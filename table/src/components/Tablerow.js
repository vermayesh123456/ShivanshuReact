import React from 'react'
import './Table'
// {"id":664,"first_name":"Cooper","last_name":"Lightfoot","email":"clightfootif@google.es","gender":"Male","ip_address":"65.108.18.42","image":"http://dummyimage.com/60x59.png/cc0000/ffffff"},

const Tablerow = ({data}) => {
  return (
    <>
    {
        data.map( (tabledata)=>{
            return(
                <>
                <tr>
                    <td>{tabledata.id}</td>
                    <td>{tabledata.first_name}</td>
                    <td>{tabledata.last_name}</td>
                    <td>{tabledata.email}</td>
                    <td>{tabledata.gender}</td>
                    <td>{tabledata.ip_address}</td>
                    <td><img src={tabledata.image} alt="xyz"/></td>
                 </tr>
                </>
            )
        })
    }
      
    </>
  )
}

export default Tablerow
