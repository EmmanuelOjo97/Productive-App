import React from "react";
import { useReducer } from "react";
import styles from "./styles.module.css";

const initialState = {
  firstValue: "",
  secondValue: "",
  fullValue: "",
  operator: "",
  valuer: "100",
};

function reducer(state, action) {
  switch (action.type) {
    case "add-Number":
      return { ...state, firstValue: state.firstValue + action.payload };
    case "Clear":
      return { firstValue: "" };
    case "operation":
      if (state.firstValue === "") {
        return state;
      }
      return {
        ...state,
        secondValue: `${state.firstValue} ${action.payload}`,
        firstValue: "",
        operator: action.payload,
      };
    case "equal":
      if (state.operator === "") {
        return state;
      }
      if (state.secondValue && state.firstValue === "") {
        return state;
      }
      console.log(state.firstValue);
      return {
        // ...state,
        firstValue: equals(state.firstValue, state.secondValue, state.operator),
        operator: "",
      };
    case "dot":
      if (state.firstValue.includes(".")) {
        return state;
      }
      return {
        ...state,
        firstValue: state.firstValue + action.payload,
      };
    case "delete":
      return { ...state, firstValue: state.firstValue.slice(0, -1) };
    default:
      return state;
  }
}

function equals(first, second, operator) {
  const fpValue = parseFloat(first);
  const spValue = parseFloat(second);
  let value = "";
  if (operator === "*") {
    value = fpValue * spValue;
    return value.toString();
  } else if (operator === "+") {
    value = fpValue + spValue;
    return value.toString();
  } else if (operator === "-") {
    value = spValue - fpValue;
    return value.toString();
  } else if (operator === "÷") {
    value = spValue / fpValue;
    return value.toString();
  }
}
function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.page}>
      <div className={styles.calculatorGrid}>
        <div className={styles.output}>
          <div className={styles.previousCalculation}>{state.secondValue}</div>
          <div className={styles.currentCalculation}> {state.firstValue} </div>
        </div>
        <button
          className={styles.spanTwo}
          onClick={() => dispatch({ type: "Clear" })}
        >
          AC
        </button>
        <button onClick={() => dispatch({ type: "delete" })}>DEL</button>
        <button onClick={() => dispatch({ type: "operation", payload: "÷" })}>
          ÷
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 1 })}>
          1
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 2 })}>
          2
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 3 })}>
          3
        </button>
        <button onClick={() => dispatch({ type: "operation", payload: "*" })}>
          *
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 4 })}>
          4
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 5 })}>
          5
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 6 })}>
          6
        </button>
        <button onClick={() => dispatch({ type: "operation", payload: "+" })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 7 })}>
          7
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 8 })}>
          8
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 9 })}>
          9
        </button>
        <button onClick={() => dispatch({ type: "operation", payload: "-" })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "add-Number", payload: 0 })}>
          0
        </button>
        <button onClick={() => dispatch({ type: "dot", payload: "." })}>
          .
        </button>
        <button
          className={styles.spanTwo}
          onClick={() => dispatch({ type: "equal" })}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
