import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const getLocalItems = () => {
  let lists = localStorage.getItem("list");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState(getLocalItems());
  const deleteitems = (e) => {
    const updateList = list.filter((i) => {
      return e != i;
    });
    setList(updateList);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="ml-32 mt-16 flex">
        <input
          type="text"
          placeholder="enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <FaPlus
          className="ml-6"
          onClick={(e) => {
            if (!task) {
            } else {
              setList([...list, task]);
              setTask("");
            }
          }}
        />
      </div>
      <div className="ml-32 mt-16 flex">
        <h1 className="px-32 py-1 bg-slate-500 rounded hover:bg-slate-600 hover:text-white">
          {list.map((e) => {
            return (
              <div className="flex" key={e}>
                <h2>{e}</h2>
                <RiDeleteBin5Line
                  className="text-white text-2xl ml-2 "
                  onClick={() => deleteitems(e)}
                />
              </div>
            );
          })}
        </h1>
      </div>
      <button className="px-12 py-2 bg-teal-950 rounded text-white ml-32 mt-8">
        Remove{" "}
      </button>
    </>
  );
};

export default Todo;
