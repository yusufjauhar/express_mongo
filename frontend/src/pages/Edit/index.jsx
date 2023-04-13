import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
// import "./index.scss";

const Edit = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v3/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/v3/product/${id}`, product)
      .then((res) => {
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <Link to="/" className="btn btn-danger">
        Kembali
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama Produk</label>
          <input type="text" className="form-control" id="name" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Harga Produk</label>
          <input type="number" className="form-control" id="price" name="price" value={product.price} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default Edit;
