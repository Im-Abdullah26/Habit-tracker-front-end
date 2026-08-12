import { Link } from "react-router"

const Landing = () => {
    return (
        <section className="hero">
            <h1 className="hero-title">Build habits that stick.</h1>
            <p className="hero-subtitle">
                Track your daily habits, organize them by category, and watch your streaks grow.
            </p>

            <div className="hero-actions">
                <Link to="/sign-up">
                    <button className="hero-btn-primary">Sign Up</button>
                </Link>
                <Link to="/sign-in">
                    <button className="hero-btn-secondary">Sign In</button>
                </Link>
            </div>
        </section>
    )
}

export default Landing