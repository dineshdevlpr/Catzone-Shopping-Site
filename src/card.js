export default function Card (props) {
    return (
<div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="#!"><img className="card-img-top" src={props.productData.imageUrl} alt="CATZONE"/></a>
                                <div className="card-body">
                                    <h4 className="card-title"><a href="#!">{props.productData.name}</a></h4>
                                    <h5>${props.productData.price}</h5>
                                    <p className="card-text">{props.productData.description}</p>
                                </div>
                                <div className="card-footer"><small className="text-muted">{props.productData.rating}</small>
                                <span>
                                    <button className ="btn btn-xs btn-primary ml-4" onClick={()=> {
                                        props.handleCart(props.productData)
                                        }} >Add to cart</button>
                                </span>
                                </div>
                            </div>
</div>
    )
}
