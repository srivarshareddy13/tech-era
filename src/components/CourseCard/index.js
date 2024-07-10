const CourseCard = props => {
  const {name, imageUrl, description} = props

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default CourseCard
