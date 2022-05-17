import react,{useState} from "react"
import Categories from "./Categories";



const Category = () => {
    const [data, setData] = useState(Categories);

    const filterResult = (catItem)=>{
        const result = Categories.filter((curData)=>{
            return curData.category===catItem;
        });
        setData(result);
    }

    return (
        <>
            <h1 className="text-center text-dark" >Select Catogries</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult("men's clothing")}>Men</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult("women's clothing")}>WoMen's</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult("jewelery")}>Jewelery</button>
                        <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult("electronics")}>Electronics</button>
                        {/* <button className="btn btn-warning w-100 mb-4">black</button> */}
                        <button className="btn btn-warning w-100 mb-4"onClick={() => setData(Categories)}>All</button> 


                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {data.map((values) =>{
                                const {id,title,price,image} = values;
                                return(

                                    <>
                                    <div className="col-md-4" key={id}>
                                <div className="card mb-4 ">
                                    <img src={image} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{title.substring(0, 12)}</h5>
                                        <p>Price :{price}</p>
                                        <h6 className="card-subtitle mb-2 text-muted"></h6>
                                        <p className="card-text"></p>
                                        <button className="btn btn-dark text-white">buy now</button>
                                        {/* <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink> */}
                                    </div>
                                </div>
                            </div>
                           
                                    
                                 </>
                                )
                            
                            })}
                            
                            </div>
                    </div>

                </div>
            </div>

        </>


    );

};
export default Category;