import React, { useState } from 'react'

const LikeButton = () => {
  const [likes, setLikes] = useState(10);

  return (
    <button 
      className="btn btn-outline-primary btn-sm"
      onClick={() => setLikes(likes + 1)}
    >
      👍 Like ({likes})
    </button>
  )
}

export default LikeButton