import { useState } from "react";
import "./App.css";

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { text: newItem, bought: false, editing: false }]); //adds a new item
      setNewItem("");
    }
  };

  const toggleBought = (index) => {
    const updatedItems = [...items];  //Creates a new array that is a copy of the existing items array.
    updatedItems[index].bought = !updatedItems[index].bought;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    const updatedItems = [...items];
    updatedItems[index].editing = true;
    setItems(updatedItems);
  };

  const handleEditChange = (index, newText) => {
    const updatedItems = [...items];
    updatedItems[index].text = newText;
    setItems(updatedItems);
  };

  const stopEditing = (index) => {
    const updatedItems = [...items];
    updatedItems[index].editing = false;
    setItems(updatedItems);
  };

  return (
    <div className="shopping-container">
      <h1 className="shopping-title">Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="shopping-input"
          placeholder="Add an item"
        />
        <button onClick={addItem} className="add-button">
          Add
        </button>
      </div>
      <ul className="shopping-list">
        {items.map((item, index) => (
          <li
            key={index}
            className={`shopping-item ${item.bought ? "bought" : ""}`}
            onClick={() => toggleBought(index)}
          >
            {item.editing ? (
              <input
                type="text"
                value={item.text}
                onChange={(e) => handleEditChange(index, e.target.value)}
                onBlur={() => stopEditing(index)}
                autoFocus
                className="edit-input"
              />
            ) : (
              <span onDoubleClick={() => startEditing(index)}>{item.text}</span>
            )}
            <button onClick={(e) => {e.stopPropagation(); removeItem(index);}} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}