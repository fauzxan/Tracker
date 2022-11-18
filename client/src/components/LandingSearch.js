import React, { useState } from "react";
import Grid2 from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";
import Axios from "axios";

const LandingSearch = () => {
	const defaultValues = {
		
		Month: 0,
		Day: "",
		type: "m",
	};
	const [formValues, setFormValues] = useState(defaultValues);
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const sendData = (event) => {
		event.preventDefault();
		console.log("Values", formValues);
		Axios.post("http://localhost:5000/retrieveData", { formValues })
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<form onSubmit={sendData}>
			<Grid2 container spacing={2}>
				<Grid2 xs={12}>
					<TextField
						variant="filled"
						label="Ticker Symbol"
						sx={{ width: "100%" }}
                        name="TickerSymbol"
                        onChange={handleInputChange}
					/>
				</Grid2>
				<Grid2 xs={12}>
					<Button variant="filled" type="submit" sx={{ width: "100%" }}>
						Submit
					</Button>
				</Grid2>
			</Grid2>
		</form>
	);
};
export default LandingSearch;
