import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Input from "../../components/Input";
import axios from "axios";
// import "./index.scss";

const Edit = (props) => {
  const { id } = useParams();
  const [_id, set_Id] = useState(props.location.id);
  const [name, setName] = useState(props.location.name);
  const [price, setPrice] = useState(props.location.price);
  const [stock, setStock] = useState(props.location.stock);
  const [status, setStatus] = useState(props.location.status);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    getUserById();
    console.log(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/api/v3/product/${id}`, {
        // await axios.post(http://localhost:3000/api/v3/product, {
        name,
        price,
        stock,
      });
      alert("data berhasil di Edit");
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:3000/api/v3/product/${id}`);
    set_Id(response.data.id);
    setName(response.data.name);
    setPrice(response.data.price);
    setPrice(response.data.stock);
  };

  if (redirect) {
    return <Redirect to="" />;
  }

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
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

export default Edit;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// // import "./index.scss";

// const Edit = (props) => {
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     status: "",
//   });

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/api/v3/product/${props.match.params.id}`)
//       .then((res) => {
//         setProduct(res.data || { name: "", price: "", stock: "", status: "" });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [props.match.params.id]);

//   const handleChange = (e) => {
//     setProduct({
//       ...product,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:3000/api/v3/product/${props.match.params.id}`, product)
//       .then((res) => {
//         props.history.push("/");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="main">
//       <Link to="/" className="btn btn-danger">
//         Kembali
//       </Link>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Nama Produk</label>
//           <input type="text" className="form-control" id="name" name="name" value={product.name} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Harga Produk</label>
//           <input type="number" className="form-control" id="price" name="price" value={product.price} onChange={handleChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Simpan
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Edit;
