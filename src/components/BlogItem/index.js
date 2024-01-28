// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = details
  return (
    <Link to={`/blogs/:${id}`}>
      <li className="item-cont">
        <img src={imageUrl} alt={topic} className="image-dec" />
        <div>
          <p className="para">{topic}</p>
          <h1>{title}</h1>
          <div className="av">
            <img src={avatarUrl} alt="avatar" className="dp" />
            <p className="para">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
