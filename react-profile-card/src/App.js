import React from "react";
import Card from "./components/Card";
import portfolioImage from "./assets/portfolio.jpg"; // Import the image

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#0d1117" }}>
      <Card
        name="Faizul Islam"
        location="Patna,India"
        description="User interface designer and front-end developer"
        skills={["UI/UX", "React", "JavaScript", "HTML", "CSS"]}
        image={portfolioImage} // Pass the imported image
      />
    </div>
  );
}

export default App;
