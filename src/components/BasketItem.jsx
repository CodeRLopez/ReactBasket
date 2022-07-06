import React, {useState} from 'react'

export default function BasketItem({ pro, toggleProduct }) {
    const { id, product, price, completed } = pro

    const [amount, setAmount] = useState(0);


    const addProduct = () => {
        setAmount((amount) => (
            amount += 1
        ))
    };

    const lessProduct = () => {
        setAmount((amount) => (
            amount>0?(amount=amount-1):(amount=0)
        ))
    };

    const handleToClick = () => {
        toggleProduct(id)
    }


    return (
        <li>
            <div>{product} <input type="checkbox" checked={completed}  onChange={handleToClick}/></div> 
            <span>precio: C${price}</span>
            <button onClick={lessProduct}>➖</button>
            {amount}
            <button onClick={addProduct}>➕</button>
            
        </li>
    )
}

