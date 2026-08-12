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
    <Link className="Edit" to="/categories/new">Create your first category</Link>
</div>
)}
</section>
  )
}

export default Categories