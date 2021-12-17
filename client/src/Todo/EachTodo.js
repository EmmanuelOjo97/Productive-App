import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Todo.module.css";
import { FaTrash } from "react-icons/fa";

function EachTodo({ deleteFood, ...item }) {
  const [completeTodo, setCompleteTodo] = useState(false);

  const itemCompleted = () => {
    setCompleteTodo(!completeTodo);
  };

  return (
    <div className={styles.list}>
      <article
        className={
          completeTodo === false ? styles.eachItem : styles.completeTodo
        }
        onClick={() => itemCompleted()}
      >
        <h3 className={styles.itemName}>{item.itemName}</h3>
        <div>
          <button
            className={styles.buttonFunction}
            onClick={() => deleteFood(item._id)}
          >
            <FaTrash />
          </button>
        </div>
      </article>
    </div>
  );
}

export default EachTodo;
