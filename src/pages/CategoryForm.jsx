import { useState } from "react";

const CategoryForm = (props)=>{
    const initialState = {
        name: '',
        color: '',
    }
const [formData, setFormData] = useState(initialState)


const handleSubmit = (event) => {
    event.preventDefault()
    props.handleAddCategory(formData)
}

return (

<main className='card'>
    <form onSubmit={handleSubmit}>
    <label htmlFor='name-input'>Name</label>
<input
    required
    type='text'
    name='name'
    id='name-input'
    value={formData.name}
    onChange={handleChange}
/>
    <label htmlFor='color-input'>Color</label>
<input
    required
    type='text'
    name='color'
    id='color-input'
    value={formData.color}
    onChange={handleChange}
/>
<button type='submit'>ADD CATEGORY</button>

</form>
    </main>
  )
}
export default CategoryForm