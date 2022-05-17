import React, { useEffect } from 'react'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink ,Link} from 'react-router-dom';

export const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                {/* Loading... */}
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct=(cat)=>{
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <ul className="d-flex mb-5 pb-5">
                    <li className="card item" onClick={()=>setFilter(data)}>
                    <span><img src="https://www.kindpng.com/picc/m/70-703753_fashion-icon-png-icon-fashion-vector-png-transparent.png" alt="" style={{height:"80px",width:"80px"}}/></span>All</li>
                    <li className="card item" onClick={()=>filterProduct("men's clothing")}>
                    <span><img src="https://freepngimg.com/thumb/model/27726-7-mens-fashion-clipart.png" alt="" style={{height:"80px",width:"80px"}}/></span>Men's Wear</li>
                    <li className="card item" onClick={()=>filterProduct("women's clothing")}>
                    <span><img src="data:image/jpeg;base64,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" alt="" style={{height:"80px",width:"80px"}}/></span>Women's Wear</li>
                    <li className="card item" onClick={()=>filterProduct("jewelery")}>
                    <span><img src="https://m.media-amazon.com/images/I/61Yf6Gbl-fL._AC_UL320_.jpg" alt="" style={{height:"80px",width:"80px"}}/></span>Jewelery</li>
                    <li className="card item" onClick={()=>filterProduct("electronics")}>
                    <span><img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" style={{height:"80px",width:"80px"}}/></span>Electronics</li>
                </ul>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card text-center m-2 p-4 shadow-lg" key={product.id}>
                                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                            <p className="card-text lead fw-bold">₹{product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
            {/* <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div> */}
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }
                </div>
            
        </>
    )
}