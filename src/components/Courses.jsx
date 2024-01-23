import { Link, Outlet } from 'react-router-dom'
const Courses = () => {
  return (
    <div>
      <Link to="/courses">pdf-view</Link>
      <Outlet />
    </div>
  )
}
export default Courses
