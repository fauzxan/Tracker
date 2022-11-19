import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LandingSearch from "./components/LandingSearch";
import BasicTable from "./components/BasicTable";

function App() {
	const [stockData, setStockData] = useState([]);
	

	return (
		<div className="App">
			<NavBar />

			<Container>
				<div className="Enter">Enter Stock Name</div>
				<LandingSearch />
				{stockData.map((dt) => {
					return (
						<div>
							<br />
							Month: {dt.date.split("-")[1]}
							<br />
							Open: {dt.open}
							<br />
							Close: {dt.close}
							<br />
							High: {dt.high}
							<br />
							Low: {dt.low}
						</div>
					);
				})}
			</Container>
		</div>
	);
}

export default App;
