import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GridItem } from './components/GridItem'
import { Header } from './components/Header'

import './App.css'

export const App = () => {
    //API_KEY:0HgmvrPSVGyt8ZDOFPqn7IG6F96gNRh5
    const [categories, setCategories] = useState(['skyrim'])

    return (
        <>
            <Header />
            <AddCategory setCategories={setCategories} />
            <div className="GridAPP">
                {categories.map(category => (
                    <GridItem key={category} category={category} />
                ))}
            </div>
        </>
    )
}
