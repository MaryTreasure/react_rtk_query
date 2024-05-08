import React, { useState } from "react";
import "./App.css";
import { useAddProductMutation, useDeleteProductMutation, useGetGoodsQuery } from "./redux";

function App() {
  const [count, setCount] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct("");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id).unwrap();

  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddProduct}>Add product</button>
      </div>

      <select value={count} onChange={(e) => setCount(e.target.value)}>
        <option value="''">all</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <ul>
        {data.map((good) => (
          <li key={good.id} onClick={() => handleDeleteProduct(good.id)}>{good.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
