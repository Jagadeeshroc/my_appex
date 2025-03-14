import { Component } from 'react'
import Loading from '../Loading'


import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  state = { isLoading: true, blogsData: [] }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.status
    console.log(statusCode)
  
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({ blogsData: formattedData, isLoading: false })
  }

  render() {
    const { blogsData, isLoading } = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loading />
        ) : (
          
          blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
          
        )}
      </div>
    )
  }
}

export default BlogsList