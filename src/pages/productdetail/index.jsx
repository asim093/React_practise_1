import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import { useParams, useSearchParams } from 'react-router-dom';

const ProductDetail = () => {
  // const { id } = useParams();
  const [searchparams] = useSearchParams();
  const productId = searchparams.get('productId');
  const productName = searchparams.get('productName');
  const [data, setData] = useState({});

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
       setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getSingleProduct();
  }, [productId]); 

  return (
    <div>
      <Navbar />
      <h1>Product Details</h1>
      <h2>ID: {productId}</h2>
      {data && (
        <div className="product-detail">
          <img src={data.image} alt={data.title} style={{ maxWidth: '200px' }} />
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <p><strong>Price:</strong> ${data.price}</p>
          <p><strong>Category:</strong> {data.category}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
