import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Todo.module.css";
import EachTodo from "./EachTodo";
import { FaPlus } from "react-icons/fa";

function Todo() {
  const [itemName, setItemName] = useState("");
  const [days, setDays] = useState("");
  const [itemList, setItemLists] = useState([]);
  const [completeTodo, setCompleteTodo] = useState(false);

  https: useEffect(() => {
    axios.get("https://productivi.herokuapp.com/read").then((response) => {
      console.log(response);
      setItemLists(response.data.map((obj) => ({ ...obj, complete: false })));
    });
  }, []);
  const addToList = (e) => {
    e.preventDefault();
    if (itemName !== "") {
      axios.post("https://productivi.herokuapp.com/insert", {
        itemName: itemName,
        days: parseInt(days),
      });
      setItemName("");
    }
  };
  const deleteFood = (id) => {
    axios.delete(`https://productivi.herokuapp.com/delete/${id}`);
  };
  const completeItem = (id) => {
    const item = itemList.find((item) => item._id === id);
    setCompleteTodo();
    console.log(itemList);
  };

  return (
    <div className={styles.page}>
      <form className={styles.inputForm} onSubmit={addToList}>
        <h1>To do</h1>
        <label htmlFor="fruit">Item</label>
        <input
          type="text"
          name="fruit"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          autoComplete="off"
          className={styles.inputSubmit}
          required
        />
        {/* <label htmlFor="days"> Days last eaten</label>
        <input
          type="number"
          name="days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          autoComplete="off"
          className={styles.inputSubmit}
        /> */}

        <button type="submit" className={styles.submitButton}>
          <FaPlus />
        </button>
      </form>

      {itemList.map((item) => {
        return (
          <EachTodo
            key={item._id}
            {...item}
            deleteFood={deleteFood}
            // completeItem={completeItem}
          ></EachTodo>
        );
      })}
    </div>
  );
}

export default Todo;
