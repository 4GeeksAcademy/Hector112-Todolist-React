import React, { useState } from 'react';

function Lista() {
	// Estado de la lista de tareas
	const [tasks, setTasks] = useState([]);
	// Estado del input de texto
	const [list, setlist] = useState("");

	// Enter para añadir tarea
	const nuevaTarea = (enter) => {
		if (enter.key === 'Enter') {
			const text = list.trim();
			if (text) {
				setTasks(prev => [...prev, { id: Date.now(), text }]);
			}
			setlist("");
		}
	};

	// Eliminar mi tarea por id
	const borrarTu = (id) => {
		setTasks(prev => prev.filter(t => t.id !== id));
	};

	return (
		// Contenedor principal
		<div className="contenedorTodo row justify-content-center ">
			{/* Contenedor de la lista, nueva tarea y todos */}
			<div className="contenedorLista col-6 text-center p-5 mt-5 mb-5 shadow-lg rounded-3 bg-white">
				<h1 className="text-center my-4 text-danger opacity-25">todos</h1>

				{/* Input para añadir tareas */}
				<input type="text" className="col-6 todo-input text-center" placeholder="Nueva tarea"
					value={list} onChange={(event) => setlist(event.target.value)} onKeyDown={nuevaTarea} />

				{/* Si no hay tareas, muestra un mensaje y si hay tareas, las muestra*/}
				{tasks.length === 0 ? (<p className="text-center opacity-50 no-tasks-message"> Añadir tareas </p>) : (

					// Caja de las tareas
					<div className="listaTareas" >

						{/* Hace que se muestren las tareas en forma de lista */}
						<ul className="list-unlysted ">

							{/* Añade una la linea para cada tarea */}
							{tasks.map(task => (

								// Hace que las tareas seam un li con un botón de eliminar
								<li key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", borderRadius: "4px" }}>
									<span style={{ flexGrow: 1 }}>{task.text}</span>

									{/* Botón x de eliminar tarea, se resalta al pasar el raton*/}
									<button style={{ background: "none", border: "none", color: "red", fontSize: "20px", cursor: "pointer", opacity: 0.2, alignItems: "center" }}
										onClick={() => borrarTu(task.id)}
										onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
										onMouseLeave={(e) => e.currentTarget.style.opacity = "0.2"}>
										&times;
									</button>

								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default Lista;