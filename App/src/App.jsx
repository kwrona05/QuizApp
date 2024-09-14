import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import HtmlQuiz from './HtmlQuiz';
import CssQuiz from './CssQuiz';
import JavascriptQuiz from './JavascriptQuiz';

function App() {
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<HtmlQuiz />} />
            <Route path="/css" element={<CssQuiz />} />
            <Route path="/javascript" element={<JavascriptQuiz />} />
        </Routes>
    </Router>
    )
}
export default App