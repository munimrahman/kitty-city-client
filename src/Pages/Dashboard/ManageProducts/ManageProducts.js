import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useProducts from '../../../hooks/useProducts';

const ManageProducts = () => {
    // const products = useProducts();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://radiant-mesa-88609.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [products])

    const handleDelete = id => {
        swal({
            title: "Are You Sure to Delete?",
            text: "Once deleted, you will not be able to recover this order data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://radiant-mesa-88609.herokuapp.com/products/${id}`, {
                        method: "DELETE",
                        headers: { 'content-type': 'application/json' }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Order has been deleted!", {
                                    icon: "success",
                                });
                            }
                            const newProducts = products.filter(product => product._id !== id)
                            setProducts(newProducts)
                        })
                    // window.location.reload()
                } else {
                    swal("Order Info is Safe!");
                }
            });
    }

    return (
        <div>
            <h1>Manage All Products Page</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <tr className="text-center">
                                <th scope="roEDw">{index + 1}</th>
                                <td>{product?.key}</td>
                                <td className="fw-bold">{product?.name}</td>
                                <td>{product?.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(product?._id)} className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;