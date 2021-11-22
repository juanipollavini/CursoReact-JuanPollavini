import React from 'react'

export const Item = ({prod}) => {
    return (
        <div key={prod.id} className="card m-3" style={{widht: "10rem"}}>
            <img src={prod.img} alt={prod.name} />
            <div className="card-body">
                <h3 className="card-title">{prod.name}</h3>
                <p className="card-text">Precio: $ {prod.precio}</p>
                <p className="card-text">{prod.desc}</p>
                <button className="btn btn-primary">Agregar</button>
            </div>
        </div>
    )
}

export default Item;

