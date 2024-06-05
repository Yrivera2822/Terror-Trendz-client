import React from 'react'

function HatCard({hats}) {
  return (
    <div key={hats.id} className="card text-center" style={{ width: "18rem" }}>
    <img
      src={hats.image}
      className="card-img-top"
      alt="hatImage"
      style={{ height: "25vh", objectFit: "cover" }}
    />
    <Link to={`/hats/${product_id}`}>
      <div className="card-body">
        <h2 className="card-title">{hats.title}</h2>
        <p className="card-text">{hats.description}</p>
      </div>
    </Link>
  </div>
);
}

export default HatCard
