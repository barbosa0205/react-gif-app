import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { Item } from './Item'

import './gridItem.css'

// import './gridItem.css'

export const GridItem = ({ category }) => {
    const { data, loading } = useFetchGifs(category)

    return (
        <div className="main-container">
            <div className="title">
                <h2>{category}</h2>
            </div>
            {loading && <p>Loading</p>}
            <div className="grid-container">
                {data.map(img => (
                    <Item key={img.id} {...img} />
                ))}
            </div>
        </div>
    )
}
