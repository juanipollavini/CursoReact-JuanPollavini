import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);
    
    const incrementar = () => {
        
        if (stock>counter) {
            setCounter(counter +1)
        }else{
            alert('No hay mas stock')
        }
    
    }

    const decrementar = () => {

        if(counter>1){
            setCounter(counter -1)
        } else{
            alert('No se puede seleccionar ese valor')
        }
    
    }

    return (
        <div>
            <div>
            <Button variant="warning" onClick ={decrementar}>-</Button>
            <h2>
              {counter}
            </h2>
            <Button variant="warning" onClick ={incrementar}>+</Button>
            </div>
            <Button variant="warning" size="lg">Agregar</Button>
        </div>
    )
}
 export default ItemCount;