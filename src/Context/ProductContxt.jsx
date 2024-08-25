import { createContext , useEffect, useState} from "react";

export let ProductsContext =  createContext([]);

export default function ProductsContextProvider({children}){

// const [products, setProducts] = useState([])
// async function getResentProducts() {
//     try{
//     let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
//     console.log(data?.data);
//     setProducts(data?.data)
//   }catch(err){
//     console.log(err); 
//       }
// }

// useEffect(()=>{
//   getResentProducts()
  

// },[])
// console.log('this proudacts',products);


    return <ProductsContext.Provider value={{products , setProducts}}>
        {children}
    </ProductsContext.Provider>
}