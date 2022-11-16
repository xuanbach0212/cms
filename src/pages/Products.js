import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '../components/badge/Badge'
import Table from '../components/table/Table'
import "../assets/css/product.css"
import axios from 'axios'

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}


const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>{item.category}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
        <td>
            <button className='lt_icon edit'>
                <i class='bx bx-edit' ></i>
            </button>
        </td>
        <td>
            <button className='lt_icon trash'>
                <i class='bx bx-trash' ></i>
            </button>
        </td>
    </tr>
)


const latestOrders = {
    header: [
        "product id",
        "Name",
        "total price",
        "date",
        "category",
        "status",
        "edit",
        "delete"
    ],
    body: [
    ]
}

function Products() {


    const [inputText, setInputText] = useState({
        name: "",
        price:"",
        status:"",
        time:"",
        category:"",
        describe:"",
        img:""
    });


    const [a,setA] = useState({
        product: [],
        name: "",
        price:"",
        status:"",
        time:"",
        category:"",
        describe:"",
        img:"",
        id:""
    })


    componentDidMount()


    function handleChange(event) {
        const { name, value } = event.target;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }


    return (
        <div className=''>
            <h2 className="page-header">
                Products
            </h2>

            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card__header'>
                            <h3>Add New Product</h3>
                        </div>
                        <div className='card__body'>
                            <div>
                                <h4 className='product_label'>Name</h4>
                                <div className='product_input'>
                                    <input type="text"
                                        placeholder='Product Name...'
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-5'>
                                    <div>
                                        <h4 className='product_label'>Price</h4>
                                        <div className='product_input'>
                                            <input type="text"
                                                placeholder='Product Price...'
                                                name="price"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h4 className='product_label'>Status</h4>
                                        <div className='product_input'>
                                            <select className='' onChange={handleChange} name="status">
                                                <option value={"Còn Hàng"}>Còn Hàng</option>
                                                <option value={"Hết Hàng"}>Hết Hàng</option>
                                                <option value={"Hàng Sắp Về"}>Hàng Sắp Về</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-5'>
                                    <div>
                                        <h4 className='product_label'>Date</h4>
                                        <div className='product_input'>
                                            <input type="date"
                                                placeholder='dd/mm/yyyy'
                                                name="time"
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h4 className='product_label'>Category</h4>
                                        <div className='product_input'>
                                            <input type="text"
                                                placeholder='Category Name...'
                                                name="category"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className='product_label'>Image</h4>
                                <div className='product_input '>         
                                    <input className='input_file' 
                                    type="file" 
                                    name='img' 
                                    accept='image/*'
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <h4 className='product_label'>Describe</h4>
                                <div className='product_input'>
                                    <textarea placeholder='Product Name...'
                                        name="describe"
                                        onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card__header'>
                            <h3>Sample Product</h3>
                        </div>
                        <div className='card__body'>
                            <div>
                                <h3>{inputText.name}</h3>
                                <p>{inputText.price}</p>
                                <p>{inputText.status}</p>
                                <p>{inputText.time}</p>
                                <p>{inputText.category}</p>
                                <img src={inputText.img} alt="" height="50" width="50"></img>
                                <p>{inputText.describe}</p>
                            </div>
                            <div>
                                <button className='' type='submit'>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest Products</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products