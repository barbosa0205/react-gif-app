import React, { useState } from 'react'
import './addCategory.css'
export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        setCategories(category =>
            !category.includes(inputValue)
                ? [inputValue, ...category]
                : category
        )
    }
    return (
        <form className="add-category_container" onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    )
}
