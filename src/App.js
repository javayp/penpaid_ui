import React, { useState, useEffect, useRef, useContext, createContext } from "react";

// Create a recipe context (our recipe book)
const RecipeContext = createContext();

function App() {
  const [cookies, setCookies] = useState(0);  // useState to track cookies
  const timer = useRef(null);                 // useRef to store timer reference
  const recipe = useContext(RecipeContext);   // useContext to access recipe from the book

  // useEffect to ring the bell when cookies count changes
  useEffect(() => {
    console.log(`You have baked ${cookies} cookies!`);
  }, [cookies]);

  // Start the cookie timer
  const startBaking = () => {
    timer.current = setInterval(() => {
      console.log("Timer is running... Baking cookies!");
    }, 1000);
  };

  // Stop the cookie timer
  const stopBaking = () => {
    clearInterval(timer.current);
    console.log("Baking stopped!");
  };

  return (
    <div>
      <h1>Cookie Bakery</h1>
      <h2>You've baked {cookies} cookies!</h2>
      <button onClick={() => setCookies(cookies + 1)}>Bake Cookie</button>
      <button onClick={startBaking}>Start Baking Timer</button>
      <button onClick={stopBaking}>Stop Baking Timer</button>
      <h3>Recipe: {recipe}</h3>
    </div>
  );
}

// App component is wrapped with the RecipeContext provider (our recipe book)
function Wrapper() {
  const cookieRecipe = "Flour, Sugar, Butter, Chocolate Chips";  // Our recipe

  return (
    <RecipeContext.Provider value={cookieRecipe}>
      <App />
    </RecipeContext.Provider>
  );
}

export default Wrapper;
