import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v3/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tambah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." onChange={handleSearch} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td className="text-right">RP. {product.price}</td>
              <td className="text-center">
                <Link to={`/detail/${product._id}`} className="btn btn-sm btn-info">
                  Detail
                </Link>
                <Link
                  to={{
                    pathname: `/edit/${product._id}`,
                    state: {
                      id: product._id,
                      name: product.name,
                      price: product.price,
                      stock: product.stock,
                      status: product.status,
                    },
                  }}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </Link>
                <Link to="#" className="btn btn-sm btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredProducts.map((product) => console.log(product._id))}
    </div>
  );
};

export default Home;
