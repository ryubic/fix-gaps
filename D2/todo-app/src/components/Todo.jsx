export default function Todo({ todo, funct }) {
  
  return (
    <>
      <div className="todo">
        <span style={todo.completed ? ({textDecoration: "line-through"}) : {}}>{todo.task}</span>
        <span style={{display: "flex", margin: "10px", gap: "10px"}}>
          <button
            className="button"
            onClick={() => funct.onDelete(todo.id)}
          >Delete</button>
          <button
            className="button"
            onClick={() => {
              alert("hello");
            }}
          >Edit</button>
          <button
            className="button"
            onClick= {()=> funct.onComplete(todo.id)}
          >Mark Completed</button>
        </span>
      </div>
    </>
  );
}
