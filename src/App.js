function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    {id:1, text: 'comment 1'},
    {id:2, text: 'comment 2'},
    {id:3, text: 'comment 3'},
  ]

  const loading = false
  const showComments = true

  if(loading) return <p>Loading...</p>

  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      {showComments && commentBlock}
    </div>
  )
}

export default App