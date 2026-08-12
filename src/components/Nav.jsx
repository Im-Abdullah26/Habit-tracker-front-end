import { Link } from "react-router"


const Nav = (props) => {

    const handleSignOut = () => {
        localStorage.removeItem('token')
        props.setUser(null)
    }

    return (
        <nav>
<Link className="nav-brand" to="/">
    <img src="/logo.png" alt="Habitum logo" className="nav-logo" />
    Habitum
</Link>            { props.user ? (
                <ul>

                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/habits/new">New habit</Link>
                    </li>
                    
                    <li>
                        <Link to="/categories/new">New Category</Link>
                    </li>
                    
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>

                    <li>
                        <Link to="/" onClick={handleSignOut}>Sign Out</Link>
                    </li>


                </ul>
            ) : (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/sign-up'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/sign-in'>Sign In</Link>
                </li>
            </ul>
            ) }

        </nav>
    )
}

export default Nav