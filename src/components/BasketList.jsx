import React from 'react'
import BasketItem from './BasketItem';


export function BasketList({ item, toggleProduct }) {
    return (
        <>
            <ul>
                {item.map((pro) => (
                    pro.product !== "" && <BasketItem key={pro.id} pro={pro}  toggleProduct={toggleProduct} />
                ))}
            </ul>
        </>
    );
}
