import Login from './Login'
import Dashbord from './components/Dashbord'
import CoursesPage from './components/CoursesPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PdfViewer from './components/PdfViewer'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/dashbord" element={<Dashbord />}></Route>
        <Route exact path="/course/:id" element={<CoursesPage />}></Route>
        <Route exact path="/pdfview/:url" element={<PdfViewer />}></Route>
      </Routes>
    </Router>
  )
}
export default App
