import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()

        setInputValue("")
        if (inputValue.trim().length < 1) return

        onNewCategory(inputValue.trim())
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Search any gif category'
                value={inputValue}
                onChange={({target}) => setInputValue(target.value)}
            />
            <button className='add-category' type='input'>Add category</button>
        </form>
    )
}
