import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Input from "../../components/Input";
import axios from "axios";
import "./index.scss";

const Tambah = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/v3/product", {
        name,
        price,
        stock,
      });
      alert("data berhasil di tambahkan");
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <Redirect to="" />;
  }

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={name} onChange={(e) => setName(e.target.value)} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price} onChange={(e) => setPrice(e.target.value)} />
          <Input name="stock" type="number" placeholder="Stock Produk..." label="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
          <Input name="status" type="checkbox" label="Active" checked={status} onChange={() => setStatus(true)} />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;

// const Tambah = () => {
//   const [product, setProduct] = useState({ name: "", price: "", stock: "", status: false });

//   const handleChange = (e) => {
//     setProduct({
//       ...product,
//       [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/api/v3/product", product);
//       console.log(response);
//       alert("Data berhasil ditambahkan");
//     } catch (error) {
//       console.error(error);
//       alert("Terjadi kesalahan saat menambah data");
//     }
//   };
