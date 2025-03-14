import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'

import './index.css'

const BlogItemDetails = () => {
  const { id } = useParams() // This will get the `id` parameter from the URL
  const [blogData, setBlogData] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const getBlogItemData = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()

      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      }
      setBlogData(updatedData)
      setIsLoading(false)
    }

    getBlogItemData()
  }, [id]) // Dependency on `id` so that it updates when the `id` in the URL changes

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  return (
    <div className="blog-container">
      {isLoading ? (
       <Loading />
      ) : (
        renderBlogItemDetails()
      )}
    </div>
  )
}

export default BlogItemDetails
