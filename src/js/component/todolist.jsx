import React, { useState, useEffect } from "react";

export const App = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	function borrar(i) {
		let re = lista.filter((valor, index) => {
			return index != i;
		});
		setLista(re);
	}

	useEffect(() => {
		console.log(lista);
	}, [lista]);

	return (
		<div className="fondo">
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap');
			</style>
			<div className="app1">
				<h1>ToDo List</h1>
				<input
					className="box"
					value={tarea}
					placeholder="ingrese tarea"
					onChange={(e) => {
						setTarea(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setLista([...lista, tarea]);
							setTarea("");
						}
					}}
				/>
				<ul>
					{lista.map(function (valor, i) {
						return (
							<div className="tareas" key={i}>
								{valor}
								<button
									type="button"
									className="btn-close borrar"
									aria-label="Close"
									onClick={() => {
										borrar(i);
									}}></button>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
