import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate
    const handleClickHtml = () => {
        navigate("/html")
    }
return(
    <div className="container">
        <section className="title">
            <h1>Welcome to the frontend Quiz</h1>
            <p>Pick a subject to get started</p>
        </section>
        <section className="subjects">
            <button className="html" onClick={handleClickHtml}>HTML</button>
            <button className="css">CSS</button>
            <button className="javascript">Javascript</button>
            <button className="accessibility">Accessibility</button>
        </section>
    </div>
)
}

export default Home