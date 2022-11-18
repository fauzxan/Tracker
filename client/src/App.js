import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LandingSearch from "./components/LandingSearch";

function App() {
	const [stockData, setStockData] = useState([]);
	useEffect(() => {
		Axios.get("http://localhost:5000/retrieveData")
			.then((response) => {
				setStockData(response.data);
			})
			.catch((err) => console.log(err));
	}, []);
	console.log(stockData);

	return (
		<div className="App">
			<NavBar />

			<Container>
				<div className="Enter">Enter Stock Name</div>
				<LandingSearch />
				{stockData.map((dt) => {
					return <div>{dt.high}</div>;
				})}
			</Container>
		</div>
	);
}

export default App;
