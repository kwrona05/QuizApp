import { useNavigate } from "react-router-dom"

function Html() {
    const navigate = useNavigate
    const handleClickHtml = () => {
        navigate('/html')
    }
    return(
        <button onClick={handleClickHtml}>HTML</button>
    )
}
export default Html