import React, { useState } from "react"
import "./App.css"
import Post from "./Post"

function App() {
  const [posts, setPosts] = useState([
    {
      username: "jameem",
      caption: "champione.. champione..",
      imageUrl:
        "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/89/thumb_88508_default_news_size_5.jpeg",
    },
    {
      username: "shada",
      caption: "Champions",
      imageUrl:
        "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/08/thumb_107160_default_news_size_5.jpeg",
    },
  ])

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="logo.png" alt="" />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  )
}

export default App
