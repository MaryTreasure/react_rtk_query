import React from "react";
import "./App.css";
import { useGetGoodsQuery } from "./redux";

function App() {
  const { data = [], isLoading } = useGetGoodsQuery("milk");
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <ul>
        {data.map((good) => (
          <li key={good.id}>{good.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
