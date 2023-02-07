import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.scss";

// const Detail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});

const Detail = () => {
  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: </td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
