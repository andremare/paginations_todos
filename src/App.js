import React, {useEffect, useState} from "react";
import Todos from "./elements/todos";
import Pagination from "./elements/pagination";
import "bootstrap/dist/css/bootstrap.css"
import {paginate} from "./elements/paginate";

function App() {
    const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(TODOS_URL).then((todos) => todos.json()).then((data) => setTodos(data));
    }, []);
    const [currentPage, setCurrentPage] = useState(1)
    const todosOnPage = 15

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const todosCrop = paginate(todos, currentPage, todosOnPage)

    return (
    <div className="App p-lg-2">
      <h1>ToDos List</h1>
        <Todos items={todosCrop} />
        <Pagination items={todos} onPageChange={handlePageChange} currentPage={currentPage} todosOnPage={todosOnPage} />
    </div>
  );
}

export default App;
