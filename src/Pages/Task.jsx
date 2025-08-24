import { Pen, Plus, Trash } from "lucide-react";
import { useState } from "react";

function Task() {
  const [inputvalue, setInputvalue] = useState("");
  const [item, setItem] = useState([]);
  const [date, setDate] = useState("");
  const [timer, setTimer] = useState("");

  const addItem = () => {
    if (!inputvalue.trim()) {
      return alert("Please input an item");
    }
    if (!date.trim()) {
      return alert("Please input a date");
    }
    setItem([...item, inputvalue.trim()]);
    setInputvalue("");
    // setDate("");
  };

  //   const addTime = () => {
  //     let countFrom = document.getElementById("daTe");
  //     const now = new Date().getTime();
  //     const pickedTime = new Date(countFrom).getTime;

  //     let timeDiff = pickedTime-now
  //     console.log(timeDiff);

  //   };

  const deleteItem = (itemDelete) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const filtered = item.filter((task) => task !== itemDelete);
    setItem(filtered);
  };

  const editItem = (itemEdit) => {
    const filtered = item.filter((task) => task !== itemEdit);
    setItem(filtered);
    setInputvalue(itemEdit);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-xl ">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>

      {/* Input Field */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter item name"
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring"
        />
        <p></p>
        <span className="flex-1 border-1 mx-3 rounded p-3">
          <input
            type="datetime-local"
            id="daTe"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-10"
          />
        </span>
        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus />
        </button>
      </div>

      {/* Item List */}
      {item.length > 0 ? (
        <ul className="space-y-2">
          {item.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md"
            >
              <span className="flex-1 rounded p-3">{task}</span>
              <span className="mx-4">{date}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => editItem(task)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pen size={18} />
                </button>
                <button
                  onClick={() => deleteItem(task)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No items added yet</p>
      )}
    </div>
  );
}

export default Task;
