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
<option value='News'>News</option>
<option value='Sports'>Sports</option>
<option value='Games'>Games</option>
<option value='Movies'>Movies</option>
<option value='Music'>Music</option>
<option value='Television'>Television</option>
<option value='Other'>Other</option>
</select>

</form>
</main>
  )
}

export default HabitForm