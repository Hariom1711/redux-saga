import { addToCart, emptyCart, removeToCart } from '../Redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../Redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item)=><div className='product-item'>
            <div> <h5>Resturent Name : {item.name} </h5></div>
            <img src={item.imgdata} alt="" />
            <div>Category : {item.address} </div>
            <div>Price : {item.price} </div> 
            <div>Rating : {item.rating} </div>
          <div>Order : {item.somedata} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

              </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;