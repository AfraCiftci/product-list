import React, { useState , useEffect} from 'react'
import axios from "axios"
import Header from '../components/Header';
import { Row } from 'react-bootstrap';
const Home = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
      getDataFromApi();
    }, [])
    
    const getDataFromApi = ()=>{
        axios("https://fakestoreapi.com/products")
        .then(response => setProducts(response.data))
        .catch(err => console.log(err))
        
    }
    console.log(products);

  return (
    <div>
    <Header/>
    <div className='products'>

      <Row>
        {
          products?.filter((product)) => {
            if(selectedItem== "all"){
              return product;
            }else{
              return product.category==selectedItem.toLowerCase();
            }
          })
        }
      </Row>
    </div>
    </div>
  )
}

export default Home;