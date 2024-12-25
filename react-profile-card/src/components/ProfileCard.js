import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, location, title, image, skills, isPro }) => {
  return (
    <div className="profile-card">
      {isPro && <div className="pro-badge">PRO</div>}
      <div className="profile-image">
        <img src={image} alt={`${name}`} />
      </div>
      <h2 className="name">{name}</h2>
      <p className="location">{location}</p>
      <p className="title">{title}</p>
      <div className="actions">
        <button className="btn message">Message</button>
        <button className="btn following">Following</button>
      </div>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
