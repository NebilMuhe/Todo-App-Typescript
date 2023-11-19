import { ChangeEvent, FormEvent } from "react";


export interface Todo {
    id: number,
    name:string,
    category:string,
    clicked: boolean
}

export interface Form {
    handleSubmit: (e: FormEvent) => void;
    todo: Todo;
    setTodo: React.Dispatch<React.SetStateAction<Todo>>;
    todos: Todo[];
  }

export interface TodoList {
    handleCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
    filtered: Todo[];
    handleCheckbox: (id: number) => void;
    handleDelete: (id: number) => void;
  }  

export interface Buttons {
  page: number;
  pageSize: number;
  end: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  length: number;
} 