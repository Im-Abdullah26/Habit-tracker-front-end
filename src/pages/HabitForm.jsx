import { useState } from 'react'

const HabitForm = (props) => {
  const initialState = {
    title: '',
    category: '',
  }
const [formData, setFormData] = useState(initialState)



const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

const handleSubmit = (event) => {
    event.preventDefault()
    props.handleAddHabit(formData)
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

<option value=''>Select a category</option>

{props.categories.map((category) => (
    <option key={category._id} value={category._id}>{category.name}</option>
))}
</select>


</form>
</main>
  )
}

export default HabitForm