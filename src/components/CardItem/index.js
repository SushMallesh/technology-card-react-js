import './index.css'

const CardItem = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard
  return (
    <li className={`card ${className}`}>
      <div className="card-details">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
