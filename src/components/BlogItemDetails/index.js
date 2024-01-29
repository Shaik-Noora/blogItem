// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  render() {
    const {blogItemData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogItemData
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div>
        <h1>{title}</h1>
        <div className="name-logo">
          <img src={avatarUrl} alt="avatar" className="dp" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt="topic" className="para" />
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
