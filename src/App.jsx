import Nav from "./components/Nav"
import SignUpForm from "./pages/SignUpForm"
import './App.css'
import { Routes, Route, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import SignInForm from "./pages/SignInForm"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import * as categoriesService from './services/categories'
import * as habitsService from './services/habits'
import HabitForm from "./pages/HabitForm"
import CategoryForm from "./pages/CategoryForm"

const getUserFromToken = () => {
  const token = localStorage.getItem('token')

  if (!token) return null

  return JSON.parse(atob(token.split('.')[1])).payload
}

const App = () => {

  const [user, setUser] = useState(getUserFromToken())
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await categoriesService.index()
      setCategories(categoriesData)
    }
    if (user) fetchCategories()
  }, [user])

const handleAddHabit = async (formData) => {
const newHabit = await habitsService.create(formData)
  navigate('/')
}

const handleAddCategory = async (formData) => {
  const newCategory = await categoriesService.create(formData)
  setCategories([newCategory, ...categories])
  navigate('/habits/new')
}

const handleUpdateHabit = async (habitId, formData) => {
  const updatedHabit = await habitsService.update(habitId, formData)
  navigate('/')
}
  
  return (
    <div>
      <Nav user={user} setUser={setUser} />
      <main className="app-main">
      <Routes>
        <Route path='/' element={user ? <Dashboard user={user} /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm setUser={setUser} />} />
        <Route path='/sign-in' element={<SignInForm setUser={setUser} />} />
        <Route path='/habits/new' element={<HabitForm categories={categories} handleAddHabit={handleAddHabit} />}/>
        <Route path='/categories/new' element={<CategoryForm handleAddCategory={handleAddCategory} />}/>       
      </Routes>
      </main>
    </div>
  )
}

export default App