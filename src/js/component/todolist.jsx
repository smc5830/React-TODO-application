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
					placeholder="ingrese tarea"
					onChange={(e) => {
						setTarea(e.target.value);
					}}
					onDoubleClick={() => {
						setLista([...lista, tarea]);
					}}
				/>
				<ul>
					{lista.map(function (valor, i) {
						return (
							<div key={i}>
								{valor}
								<button
									onClick={() => {
										borrar(i);
									}}>
									X
								</button>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
