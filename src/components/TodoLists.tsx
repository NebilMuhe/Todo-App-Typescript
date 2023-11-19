import { MdDelete } from "react-icons/md";
import { TodoList } from "./interface/interface";

const TodoLists = ({
  handleCategory,
  filtered,
  handleCheckbox,
  handleDelete,
}: TodoList) => {
  return (
    <section className="bg-gray-900 mt-3 w-80 h-80 sm:w-96 md:h-96 rounded-2xl mb-10">
      <h3 className="text-center text-3xl my-2 underline decoration-1 decoration-green-400">
        Todo Lists
      </h3>
      <div className="flex justify-between px-3">
        <p className="text-xl">Category</p>
        <select
          className="bg-gray-800 mt-2 outline-none rounded focus:outline-[#2e5897]"
          onChange={handleCategory}
        >
          <option value="all">All</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="sport">Sport</option>
        </select>
      </div>
      {filtered.map((todo) => (
        <div key={todo.id} className="flex justify-between px-8 mt-3">
          <span className="flex">
            <input
              type="checkbox"
              className="mt-1 accent-green-500 cursor-pointer"
              checked={todo.clicked}
              onChange={() => handleCheckbox(todo.id)}
            />
            <p
              className={`pl-2 text-xl ${
                todo.clicked && "line-through text-gray-500"
              }`}
            >
              {todo.name}
            </p>
          </span>
          <button
            onClick={() => handleDelete(todo.id)}
            className="transition ease-in-out delay-150 hover:fill-red-700 hover:-translate-y-1 hover:-translate-x-1 hover:scale-125 duration-300 "
          >
            <MdDelete className="fill-red-500 text-xl" />
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoLists;
