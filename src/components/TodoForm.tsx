import { Form } from "./interface/interface";

const TodoForm = ({ handleSubmit, todo, setTodo, todos }: Form) => {
  return (
    <section className="bg-gray-900 p-5 w-80 sm:w-96 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="bg-gray-800 px-2 py-1 w-72 rounded-md outline-none focus:outline-[#2e5897]"
            placeholder="Add Task"
            value={todo.name}
            onChange={(e) =>
              setTodo({
                ...todo,
                name: e.target.value,
                id: todos.length ? todos[todos.length - 1].id + 1 : 1,
              })
            }
          />
        </div>
        <div>
          <select
            name=""
            id=""
            className={`bg-gray-800 px-2 py-1 w-72 mt-3 outline-none rounded-md focus:outline-[#2e5897]  ${
              !todo.category && "text-gray-400"
            }`}
            placeholder="Category"
            value={todo.category}
            onChange={(e) => setTodo({ ...todo, category: e.target.value })}
          >
            <option value="" className="" disabled>
              Add Category
            </option>
            <option value="personal" className="text-white">
              Personal
            </option>
            <option value="work" className="text-white">
              Work
            </option>
            <option value="sport" className="text-white">
              Sport
            </option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-600 mt-3 px-2 py-1 rounded-md font-semibold hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
