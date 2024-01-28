// Write your JS code here
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogItemData: {}}

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
    this.setState({blogItemData: updatedData})
  }

  render() {
    const {blogItemData} = this.state
    const {title, imageUrl, avatarUrl, content} = blogItemData
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
