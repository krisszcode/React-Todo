import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo =>{
            const {id, content} = todo
            return(
                <div className="collection-item" key={id}>
                    <span onClick={() => {deleteTodo(id)}}>{content}</span>
                </div>    
            )
        })
    ) : (
        <p className="center">You have no todo's left YASS</p>
    )
    return (
        <div>
            <div className="todos collection">
                {todoList}
            </div>
        </div>
    )
}

export default Todos
