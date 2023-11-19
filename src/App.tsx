import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Todo } from "./components/interface/interface";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    name: "",
    category: "",
    clicked: false,
  });

  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtered, setFiltered] = useState<Todo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [length, setLength] = useState<number>(0);
  const [category, setCategory] = useState("all");
  const pageSize = 5;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  useEffect(() => {
    const myTodo = localStorage.getItem("myTodo");
    const fill = myTodo ? JSON.parse(myTodo) : [];
    setTodos(fill);
  }, []);

  useEffect(() => {
    if (category === "all") {
      const slice = todos.slice(start, end);
      setFiltered(slice);
      setLength(todos.length);
      return;
    }
    const filter = todos.filter((todo) => todo.category === category);
    const value = filter.slice(start, end);
    setFiltered(value);
    setLength(filter.length);
  }, [start, end, todos, category]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    localStorage.setItem("myTodo", JSON.stringify([...todos, todo]));
    setTodo({
      id: 0,
      name: "",
      category: "",
      clicked: false,
    });
  };

  const handleDelete = (id: number) => {
    const filter = todos.filter((todo) => todo.id !== id);
    setTodos(filter);
    localStorage.setItem("myTodo", JSON.stringify(filter));
    if (filtered.length === 1 && page !== 1) {
      const newPage = page - 1;
      setPage(newPage);
    }
  };

  const handleCheckbox = (id: number) => {
    const check = todos.find((todo) => todo.id === id);
    if (check) check.clicked = !check.clicked;
    setTodos([...todos]);
    localStorage.setItem("myTodo", JSON.stringify([...todos]));
  };

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const cat = e.target.value;
    setCategory(cat);
    setPage(1);
  };

  return (
    <>
      <div className="min-h-screen bg-[#283339] text-white font-urbanist">
        <div className="flex flex-col items-center justify-center min-h-screen mx-10">
          <h1 className="text-4xl mb-4 underline decoration-2 decoration-green-400">
            Todo App
          </h1>
          <TodoForm
            handleSubmit={handleSubmit}
            todo={todo}
            setTodo={setTodo}
            todos={todos}
          />
          <div className="bg-gray-900 mt-3 w-80 sm:w-96 h-96 rounded-2xl relative mb-10">
            <TodoLists
              handleCategory={handleCategory}
              handleCheckbox={handleCheckbox}
              handleDelete={handleDelete}
              filtered={filtered}
            />
            <div className="absolute left-0 right-0 bottom-0">
              <Button
                pageSize={pageSize}
                end={end}
                page={page}
                length={length}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
