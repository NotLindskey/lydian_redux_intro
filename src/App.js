import "./App.css";
import { useState } from "react";

// useSelector is a hook provided by the react-redux library
import { useSelector, useDispatch } from "react-redux";
import ElementList from "./ElementList";

function App() {
	// useSelector accepts a function that tells it what part of the store you want.
	// here we return the whole store
	const reduxStore = useSelector((store) => store);
	const count = useSelector((store) => store.count);
	const elementList = useSelector((store) => store.elementList);

	// dispatch instance
	const dispatch = useDispatch();

	// hooks
	const [newElement, setNewElement] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch({
			type: "ADD_ELEMENT",
			payload: newElement,
		});
		setNewElement("");
	};

	return (
		<div>
			{/* Render the entire reduxStore to our DOM, as a JS object (JSON) */}
			<pre>{JSON.stringify(reduxStore)}</pre>
			<p>Count is: {count}</p>
			<button onClick={() => dispatch({ type: "INCREASE" })}>
				Increase Count
			</button>
			<button onClick={() => dispatch({ type: "DECREASE" })}>
				Decrease Count
			</button>
			{/* <p>Elements are: {JSON.stringify(elementList)}</p> */}
			<ElementList />

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Element name goes here"
					value={newElement}
					onChange={(event) => setNewElement(event.target.value)}
				/>
				<button type="submit">Add Element</button>
			</form>

			{/* <p>{elementList[0]}</p> */}
			{/* <button */}
			{/* // onClick={() => dispatch({ type: "ADD_ELEMENT", payload: "radium" })}
			// >
			// 	Add Element
			// </button> */}
		</div>
	);
}

export default App;
