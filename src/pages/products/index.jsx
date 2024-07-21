import React, { useEffect, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
// import '../App.css'

const initialValue = {
    data: [],
    loader: false
};

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case "LOADER":
            return { ...state, loader: action.payload };
        case "DATA":
            return { ...state, loader: false, data: action.payload };
        default:
            return state;
    }
};

const Products = () => {
    const [states, dispatch] = useReducer(reducer, initialValue);
    const navigate = useNavigate();

    const isHandle = () => {
        navigate('/');
    }

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'LOADER', payload: true });
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                dispatch({ type: 'DATA', payload: data });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                dispatch({ type: 'LOADER', payload: false });
            }
        };

        fetchData();
    }, []);

    console.log(states);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Products</h1>
                {states.loader ? (
                    <div className="spinner-border text-center" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="row">
                        {states.data.map((item) => (
                            <div className="col-md-3 mb-4" key={item.id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={item.image} className="card-img-top" alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <Link to={`/productdetail?productId=${item.id}&productName=${item.title}`} className="btn btn-primary">Click to Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <button onClick={isHandle}>Click to Home</button>
        </>
    );
}

export default Products;
