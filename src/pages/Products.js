import React, { useState, useEffect } from 'react'
import "../assets/css/product.css"
import { createProduct } from "../services/product.service"
import Badge from '../components/badge/Badge';
import Editor from '../components/editor/Editor';
function Products() {
    const [value, setValue] = useState("")

    const [inputData, setInputData] = useState({
        name: "Tên sản phẩm",
        price: "Liên Hệ",
        status: "",
        type: "Loại Sản Phẩm",
        describe: "Mô tả sản phẩm ở đây",
        quantity: "Còn Hàng",
        img: "",
        detail: "",

    });

    const [flag, setFlag] = useState(false)
    const [posts, setPosts] = useState([])

    const orderStatus = {
        "Còn Hàng": "success",
        "Hết Hàng": "danger",
        "Hàng Sắp Về": "primary",
        "refund": "danger"
    }


    function handleChange(event) {
        const { name, value } = event.target;

        setInputData(prevValue => {
            return {
                ...prevValue,
                [name]: (name === 'price' ? value + " đ" : value)
            };
        });

    }

    function html_to_string() {
        inputData.detail = String(value)
    }


    function handleClick() {
        setFlag(true)
        html_to_string()
        setPosts(inputData)
        alert("Thêm sản phẩm thành công! ")
        setInputData({
            name: "Tên sản phẩm",
            price: "Liên Hệ",
            status: "",
            type: "Loại Sản Phẩm",
            describe: "Mô tả sản phẩm ở đây",
            quantity: "Còn Hàng",
            img: "",
            detail: "",

        })
        setValue("")

    }


    useEffect(() => {
        const fetchData = async () => {
            flag &&
                await createProduct(posts)

        };
        fetchData();
    }, [posts, flag]);


    return (
        <div className=''>
            <h2 className="page-header">
                Products
            </h2>
            <div className='row'>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card__header'>
                            <div className='row'>

                                <div className='col-7'>
                                    <h3>Add Product</h3>
                                </div>
                                <div className='col-5'>
                                    <button className='btn-add-new' type='submit'>
                                        Create new product
                                    </button>
                                </div>
                            </div>

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
                                            {/* <select className='' onChange={handleChange} name="price">
                                                <option value={"Liên Hệ"}>Liên Hệ</option>
                                            </select> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h4 className='product_label'>Quantity</h4>
                                        <div className='product_input'>
                                            <select className='' onChange={handleChange} name="quantity">
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
                                        <h4 className='product_label'>Status</h4>
                                        <div className='product_input'>
                                            <input type="status"
                                                placeholder='status'
                                                name="status"
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div>
                                        <h4 className='product_label'>Type</h4>
                                        <div className='product_input'>
                                            <input type="text"
                                                placeholder='Type Name...'
                                                name="type"
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
                    <div>
                        <h4 className='product_label'>Product Detail</h4>
                        <Editor
                            setValue={setValue}
                        />
                        <br />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card__header'>
                            <p>Trang Chủ {'>>'} Danh Mục Sản Phẩm {'>>'} {inputData.type} </p>
                        </div>
                        <div className='card__body'>
                            <div className='row'>
                                <div className='col-5'>
                                    <img src={inputData.img} alt="" height="auto" width="auto"></img>
                                </div>
                                <div className='col-7'>
                                    <div className='example'>
                                        <h2>{inputData.name}</h2>
                                        {/* Giá: <span>{inputData.price}</span> đ */}
                                        <p className='price-example'>Giá: <span>{inputData.price}</span> </p>
                                        <p className='quantity-example'>Số Lượng: <Badge type={orderStatus[inputData.quantity]} content={inputData.quantity} /></p>
                                        <p className='describe-example'>{inputData.describe}</p>
                                        <div className='row'>
                                            <div className='col-6'><button className='btn-them'>Thêm vào giỏ hàng</button></div>
                                            <div className='col'><span className='btn-text'>Hoặc</span></div>
                                            <div className='col-4'><button className='btn-mua'>Mua ngay</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card__header'>
                            <p>Chi Tiết </p>
                            <div dangerouslySetInnerHTML={{ __html: value }}></div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row'>
                            <div className='col-4'>
                                <button className='btn-add' type='submit' onClick={handleClick}>
                                    Add product
                                </button>
                            </div>
                            <div className='col-3'>
                                <button className='btn-del' type='submit'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products