import { useEffect, useState } from "react"
import { index, deleteHabit } from '../services/habits'

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

    return (
        <section>
            <header>
                <h1>Let's build healthy habits, {props.user.username}!</h1>
                <h2>Your Habits</h2>
            </header>
            {allHabits.map((habit) => (
                <div className="card" key={habit._id}>
                    <header>
                        <h1>
                        {habit.title}
                        </h1>
                    </header>
                </div>
            ))}
        </section>
    )
}

export default Dashboard