import React, { useState } from 'react';

function Lista() {
	// Estado de la lista de tareas
	const [tasks, setTasks] = useState([]);
	// Estado del input de texto
	const [inputValue, setInputValue] = useState("");

	// Enter para añadir tarea
	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			const text = inputValue.trim();
			if (text) {
				setTasks(prev => [...prev, { id: Date.now(), text }]);
			}
			setInputValue("");
		}
	};

	// Aquí elimino mi tarea por id
	const handleDelete = (id) => {
		setTasks(prev => prev.filter(t => t.id !== id));
	};

	return (
		<div className="contenedorLista row justify-content-center">
			<h1 className="text-center my-4 text-danger opacity-25">todos</h1>
      
      <div className="col-9 text-center pb-5">
        <input type="text" className="col-9 todo-input text-center" placeholder="Nueva tarea"
			  	value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown}/>
      </div>

			  {tasks.length === 0 ? (
			  	<p className="text-center opacity-50 no-tasks-message"> Añadir tareas </p>) : (
          <div className= "col-6" >  
            <ul className= "list-unlysted ">
              {tasks.map(task => (
                <li 
                  key={task.id}
                  style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px",
                          borderRadius: "4px"}}>
                  <span style={{ flexGrow: 1 }}>{task.text}</span>
                  <button style={{background: "none", border: "none", color: "red", fontSize: "20px", cursor: "pointer", opacity: 0.2}}
                    onClick={() => handleDelete(task.id)} 
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "1"} onMouseLeave={(e) => e.currentTarget.style.opacity = "0.2"}>
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>  
        
			)}
		</div>
	);
}

export default Lista;