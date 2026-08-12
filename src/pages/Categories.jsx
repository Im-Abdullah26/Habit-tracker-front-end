import { Link } from "react-router"

const Categories = (props) => {
  const { categories, handleDeleteCategory } = props

  return (
<section>
 <header>
    <h1>Your Categories</h1>
 </header>
 {categories.length === 0 && (
  <div className="card">
    <p>You don't have any categories yet.</p>
    <Link className="Edit" to="/categories/new">Create a category</Link>
</div>
)}
{categories.map((category) => (
    <div className="card" key={category._id}>
    <header>
    <h1 className="categoryh1">{category.name}</h1>
    <p className="p1" style={{ backgroundColor: category.color }}>
    {category.color}</p>
</header>
<button className="deleteButton"
onClick={() => handleDeleteCategory(category._id)}> 
Delete</button>
</div>
      ))}
</section>
  )
}

export default Categories