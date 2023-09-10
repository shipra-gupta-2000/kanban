// Card.js
import React, { useState } from 'react';
import './Card.css'; // Import your custom CSS file for styling

const Card = ({ task }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1 className="card-title">{task.title}</h1>
      <p className="card-description">{task.description}</p>
      {isHovered && (
        <div className="card-buttons">
          <button className="card-button edit-button">Edit</button>
          <button className="card-button delete-button">Delete</button>
        </div>
      )}
    </div>
  );
}

export default Card;
