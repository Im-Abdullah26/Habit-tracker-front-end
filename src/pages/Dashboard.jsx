import { useEffect, useState } from "react"
import { index, deleteHabit, update } from '../services/habits'
import { Link } from "react-router"

const Dashboard = (props) => {

    const [allHabits, setAllHabits] = useState([])

    useEffect(() => {
        const fetchHabits = async () => {
            const habitsData =  await index()
            setAllHabits(habitsData)
        }
        fetchHabits()
        
    }, [])

const handleDeleteHabit = async (habitId) => {
  const deletedHabit = await deleteHabit(habitId)
  setAllHabits(allHabits.filter((habit) => habit._id !== deletedHabit._id))
}

const handleComplete = async (habit) => {
  const updatedHabit = await update(habit._id, { completed: !habit.completed })
  setAllHabits(allHabits.map((h) => (h._id === updatedHabit._id ? updatedHabit : h)))
}

    return (
        <section>
            <header>
                <h1>Let's build healthy habits, {props.user.username}!</h1>
                <h2>Your Habits</h2>
            </header>
            {allHabits.map((habit) => (
                <div className="card" key={habit._id}>
                    <header>
                        <input className="checkbox"
  type='checkbox'
  checked={habit.completed}
  onChange={() => handleComplete(habit)}
/>
                        <h1 className="categoryh1">
                        {habit.title}
                        </h1>

                        <p className="p1" style={{ backgroundColor: habit.category.color }}>
                        {habit.category.name}
                        </p>

                    </header>
                    <Link className="Edit" to={`/habits/${habit._id}/edit`}>Edit</Link> {' '}
                    <button className="deleteButton" onClick={() => handleDeleteHabit(habit._id)}>Delete</button>

                </div>
            ))}
        </section>
    )
}

export default Dashboard