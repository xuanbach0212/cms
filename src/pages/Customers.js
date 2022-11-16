import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
    '',
    'name',
    'phone',
    'total orders',
    'total spend',
    'location',
]

function renderHead(item, index){ <th key={index}>{item}</th> }

function renderBody(item, index){
  <tr key = {index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
}


function Customers() {
  return (
    <div className=''>
      <h2 className="page-header">
        customers
      </h2>

      <div className='row'>
        <div className='col-12'>
          <div className='card'>
          <div className='card__header'>
            <h3>Customer List</h3>
          </div>
            <div className='card__body'>
              <input></input>
              <input></input>
              <input></input>
              <input></input>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit='10'
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers