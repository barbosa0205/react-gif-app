import React from 'react'

import './item.css'
export const Item = ({ title, imgUrl }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={imgUrl} alt={title} />
        </div>
    )
}
