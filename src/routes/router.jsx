import { createBrowserRouter } from "react-router-dom";
import {React} from 'react'
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Products from "../pages/products"
import ProductDetail from "../pages/productdetail";
import ReducerPage from '../pages/ReducerPages';
import Practise from "../pages/practise";

export const publicroute = createBrowserRouter([
{path:'/' , element: <Home /> },
{path:'/about' , element: <About /> },
{path:'/contact' , element: <Contact /> },
{path:'/Products' , element: <Products /> },
{path:'/Productdetail' , element: <ProductDetail /> },
{path:'/Reducer' , element: <ReducerPage /> },
{path:'/practise' , element: <Practise /> },

]);