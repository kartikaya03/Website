import React from "react";
import "./App.css";
import ShadowBox from "./effect/boxshadow/ShadowBox";

function App() {
  return (
    <div className="metallic-background">
      <ShadowBox />
      <div className="content">
        <p>All the products are going to appear</p>
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default App;
