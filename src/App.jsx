import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import {BasketList} from './components/BasketList';
import uuid from 'react-uuid';


function App() {
  
  const storagedList = JSON.parse(localStorage.getItem("Basket.Products"));

  const [items, setItem] = useState( () => 
    storagedList || [ { id: 1, product: "", price: 0, completed:false} ], []);
  
  const newItem = useRef();
  const newPrice = useRef();
  


  useEffect (() => {
    localStorage.setItem("Basket.Products", JSON.stringify(items));
  }, [items]);



  const handlerChange = () => {
    const product = newItem.current.value;
    const price = newPrice.current.value;
    if (product === '' || price === '') return;

    setItem((items) => {
      return [...items, {id: uuid(), product, price, completed:false}]
    });
    
    newItem.current.value="";
    newPrice.current.value="";
  }

  const toggleProduct = (idItem) => {
    const newProd =  [...items];
    const prod = newProd.find((prod) => prod.id === idItem);
    prod.completed = !prod.completed;
    setItem(newProd);
  };

  const DeleteProduct = () => {
    const newProd = items.filter((prod) => !prod.completed);
    setItem(newProd);
  };

  return (
    
    <>
    
    <h1>Bienvenido a tu canasta virtual</h1>
    <input type='text' ref={newItem} placeholder='Agregar producto'/>
    <input type="number" ref={newPrice} placeholder='Agregue precio' />
    <button onClick={handlerChange}>🧺</button>
    <button onClick={DeleteProduct}>🗑️</button>



    <BasketList item={items} toggleProduct={toggleProduct}/>

    </>
  );
  
}


export default App;
