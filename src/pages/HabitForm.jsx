import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import * as habitsService from '../services/habits'

const HabitForm = (props) => {
  const initialState = {
    title: '',
    category: '',
  }

const { habitId } = useParams()  
const [formData, setFormData] = useState(initialState)



const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

const handleSubmit = (event) => {
  event.preventDefault()
  if (habitId) {
    props.handleUpdateHabit(habitId, formData)
  } else {
    props.handleAddHabit(formData)
  }
}

useEffect(() => {
  const fetchHabit = async () => {
    const habitsData = await habitsService.index()
    const foundHabit = habitsData.find((habit) => habit._id === habitId)
    if (foundHabit) {
      setFormData({ title: foundHabit.title, category: foundHabit.category._id })
    }
  }
  if (habitId) fetchHabit()
  return () => setFormData(initialState)
}, [habitId])

return (
 <main className='card'>
    <h1>{habitId ? 'Edit Habit' : 'New Habit'}</h1>
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
<button type='submit'>ADD HABIT</button>

</form>
</main>
  )
}

export default HabitForm