import React from 'react'

const Comments = () => {

  const comments = [
    { id: 1, name: "Rahul", text: "Good product 👍" },
    { id: 2, name: "Priya", text: "Value for money 💯" },
    { id: 3, name: "Amit", text: "Average quality" }
  ];

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Customer Comments</h3>

      <div className="row">
        {comments.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Comments