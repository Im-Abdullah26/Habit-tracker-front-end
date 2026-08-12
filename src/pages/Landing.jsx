import { Link } from "react-router"

const Landing = () => {
    return (
        <section className="card">
            <h1>Welcome!</h1>
            <p>Sign up or sign in to see your dashboard.</p>

            <div className="actions">
                <Link to="/sign-up">
                    <button>Sign Up</button>
                </Link>
                <Link to="/sign-in">
                    <button>Sign In</button>
                </Link>
            </div>

        </section>
    )
}

export default Landing