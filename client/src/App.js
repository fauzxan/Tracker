import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Container from "@mui/material/Container";
import LandingSearch from "./components/LandingSearch";
import Indicators from "./components/Indicators";

function App() {
	return (
		<div className="App">
			<NavBar />
			
			<Container>
				<div className="Enter">Enter Stock Name</div>
				<LandingSearch />
				<Indicators />
			</Container>
			
		</div>
	);
}

export default App;
