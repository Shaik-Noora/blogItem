// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogData: []}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      topic: each.topic,
      author: each.author,
    }))
    this.setState({blogData: updatedData})
  }

  render() {
    const {blogData} = this.state
    return (
      <ul>
        {blogData.map(each => (
          <BlogItem key={each.id} details={each} />
        ))}
      </ul>
    )
  }
}

export default BlogList
