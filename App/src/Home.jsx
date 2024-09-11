function Home() {
return(
    <div className="container">
        <section className="title">
            <h1>Welcome to the frontend Quiz</h1>
            <p>Pick a subject to get started</p>
        </section>
        <section className="subjects">
            <button className="html">HTML</button>
            <button className="css">CSS</button>
            <button className="javascript">Javascript</button>
            <button className="accessibility">Accessibility</button>
        </section>
    </div>
)
}
export default Home