import React, { useState } from "react";
import "./style.css";

function Todo() {
  const [inputData, SetInputData] = useState("");
  const [item, setitem] = useState([]);

  const addItem = () => {
    if (!inputData) {
      alert("Please Enter a Task");
    } else {
      setitem([...item, inputData]);
      SetInputData("");
    }
  };
  const deleteItem = (id) => {
    console.log(id);
    const updatedItem = item.filter((curElem, ind) => {
      return ind != id;
    });
    setitem(updatedItem);
  };

  const removeAll = () => {
    setitem([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src="https://icon-library.com/images/to-do-list-icon/to-do-list-icon-10.jpg"
              alt="Todo Logo"
            />
            <figcaption>TODO ✔️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" ✏️Enter The Task"
              value={inputData}
              onChange={(e) => {
                SetInputData(e.target.value);
              }}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Task"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {item.map((curElem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{curElem}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Task"
                    onClick={() => deleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>
          {/* clear all button */}

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Clear Todo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
