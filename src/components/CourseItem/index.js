import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {details} = props
  const {id, name, logoUrl} = details

  return (
    <Link to={`/courses/${id}`}>
      <li className="list-item">
        <img src={logoUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default CourseItem
