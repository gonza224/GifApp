import React, {useState} from 'react'

import { AddCategory, GifGrid } from './components/'

export const GifApp = () => {
    const [categories, setCategories] = useState(['Volkanovski','Hacking cats'])
    
    const onAddCategory = ( newCategory ) => {
        if (categories.some(category => category.toLowerCase() == newCategory.toLowerCase())) return
        setCategories([newCategory, ...categories])
    }

    const onRemoveCategory = ( categoryToRemove ) => {
        setCategories(categories.filter(cat => cat != categoryToRemove))
    }

    return (
        <>
            <h1 className='title'>
                <span>GifApp</span>\
            </h1>
            
            <AddCategory onNewCategory={onAddCategory} />

            <section>
                {
                    categories.map(category =>
                        <GifGrid key={category} category={category} onRemoveCategory={onRemoveCategory} />
                    )
                }
            </section>
        </>
    )
}
