import { useState, useEffect } from 'react'

const HabitForm = (props) => {
  const initialState = {
    title: '',
    category: '',
  }
const [formData, setFormData] = useState(initialState)
const [categories, setCategories] = useState([])

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

</form>
</main>
  )
}

export default HabitForm