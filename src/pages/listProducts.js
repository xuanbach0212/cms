import React from 'react'
import Table from '../components/table/Table'
import { getProduct } from '../services/product.service'
import { useEffect, useState } from 'react'


const latestOrders = {
    header: [
        "product id",
        "Name",
        "Image",
        " price",
        "date",
        "Type",
        "status",
        "edit",
        "delete"
    ]
}


const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

// const orderStatus = {
//     "shipping": "primary",
//     "pending": "warning",
//     "paid": "success",
//     "refund": "danger"
// }




function ListProducts() {

    const [posts, setPosts] = useState([])
    const [flag,setFLag] = useState(false)

    useEffect(() =>{ 
        const fetchData = async () => {
        const data = await getProduct();
        setPosts(data);
        setFLag(true)
    };
        fetchData();
    }, []);


    function handleEdit(){
        
    }


    function handleDelete(){

    }


    console.log(posts)
    const renderOrderBody = (item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.img}</td>
            <td>{item.price}</td>
            <td>{item.date.substring(0,16)}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>
                <button className='lt_icon edit' onClick={handleEdit}>
                    <i class='bx bx-edit' ></i>
                </button>
            </td>
            <td>
                <button className='lt_icon trash' onClick={handleDelete}>
                    <i class='bx bx-trash' ></i>
                </button>
            </td>
        </tr>
    )
    

  return (
    flag &&
    <div>
        <div className='row'>
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest Products</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                limit = "10"
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={posts}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default ListProducts


