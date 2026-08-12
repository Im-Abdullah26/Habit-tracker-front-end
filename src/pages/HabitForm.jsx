import { useState, useEffect } from 'react'
import { index } from '../services/categories'

const HabitForm = (props) => {
  const initialState = {
    title: '',
    category: '',
  }
const [formData, setFormData] = useState(initialState)
const [categories, setCategories] = useState([])

 useEffect(() => {
    const fetchCategories = async () => {
    const categoriesData =  await index()
        setCategories(categoriesData)
}
fetchCategories()
        
}, [])


const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

const handleSubmit = (event) => {
    event.preventDefault()
    console.log('formData', formData)
  }

return (
 <main className='card'>
    <form onSubmit={handleSubmit}>
<label htmlFor='title-input'>Title</label>
<input
  required
  type='text'
  name='title'
  id='title-input'
  value={formData.title}
  onChange={handleChange}
/>
<label htmlFor='category-input'>Category</label>
<select
  required
  name='category'
  id='category-input'
  value={formData.category}
  onChange={handleChange}
>
{props.categories.map((category) => (
    <option>{category.name}</option>
))}
</select>


</form>
</main>
  )
}

export default HabitForm