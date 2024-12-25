import React from "react";
import portfolioImage from "../assets/portfolio.jpg"; // Adjust the image path as needed

const Card = ({ name, location, description, skills }) => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)",
        padding: "20px",
        borderRadius: "20px",
        color: "#fff",
        width: "350px",
        textAlign: "center",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "#ffc107",
          color: "#000",
          fontWeight: "bold",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        PRO
      </div>
      <img
        src={portfolioImage} // Use the imported image here
        alt={name}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "4px solid #fff",
          margin: "20px auto",
        }}
      />
      <h2 style={{ fontSize: "24px", margin: "10px 0" }}>{name}</h2>
      <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "15px" }}>
        {location}
      </p>
      <p style={{ fontSize: "16px", margin: "10px 0" }}>{description}</p>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            background: "#6c63ff",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            marginRight: "10px",
            fontWeight: "bold",
          }}
        >
          Message
        </button>
        <button
          style={{
            background: "#4caf50",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Following
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              background: "#444",
              color: "#fff",
              padding: "5px 15px",
              margin: "5px",
              borderRadius: "15px",
              fontSize: "14px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
