import {Link} from 'react-router-dom'
import './index.css'

const CourseItem = props => {
  const {id, name, logoUrl} = props

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
