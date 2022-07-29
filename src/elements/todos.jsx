import React from 'react';

const Todos = ({items}) => {
    return (
        <div>
            <ul>
                {items.map(todo => <li key={todo.id}>{todo.id + '. ' + todo.title}</li>)}
            </ul>
        </div>
    );
};
export default Todos;
