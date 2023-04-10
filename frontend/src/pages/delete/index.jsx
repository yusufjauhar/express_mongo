import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
// import "./index.scss";

const Delete = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const history = useHistory();

  useEffect(() => {
    console.log(id);
    const getProductById = async () => {
      const response = await axios.get(`http://localhost:3000/api/v3/product/${id}`);
      setProduct(response.data);
    };
    getProductById();
  }, [id]);

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3000/api/v3/product/${id}`);
    console.log(response);
    alert("Data berhasil dihapus");
    history.push("/");
  };

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {product._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {product.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {product.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {product.stock}</td>
          </tr>
        </tbody>
      </table>
      <Link to="#" className="btn btn-sm btn-danger" onClick={() => handleDelete(id)}>
        Delete
      </Link>
    </div>
  );
};

export default Delete;
