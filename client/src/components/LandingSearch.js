import React, { useState } from "react";
import Grid2 from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";
import Axios from "axios";
import BasicTable from "./BasicTable";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const LandingSearch = () => {
	const defaultValues = {
		
	};
	const [formValues, setFormValues] = useState(defaultValues);
	const handleTextInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};
    const [freq, setFreq] = React.useState('');

    const handleSelectChange = (event) => {
        setFreq(event.target.value);
        setFormValues({
			...formValues,
			"freq": event.target.value,
		});
      };

	const [stockData, setStockData] = useState([]);

	const sendData = (event) => {
		event.preventDefault();
		console.log("Values", formValues);
		Axios.post("http://localhost:5000/retrieveData/", { formValues })
			.then((response) => {
				if (response.data.length == 0) alert("Enter a valid ticker symbol");
				console.log("Response recieved from server");
				setStockData(response.data);
				console.log("StockData updated ");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<form onSubmit={sendData}>
				<Grid2 container spacing={2}>
					<Grid2 xs={12}>
						<TextField
							variant="filled"
							label="Ticker Symbol"
							sx={{ width: "100%", mt: 5 }}
							name="tickerSymbol"
							onChange={handleTextInputChange}
						/>
					</Grid2>
					<Grid2 xs={4}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Frequency"
							onChange={handleSelectChange}
                            sx={{width:"100%", mt: 2}}
						>
							<MenuItem value={'m'}>Monthly</MenuItem>
							<MenuItem value={'d'}>Daily</MenuItem>
                            <MenuItem value={'m'}>Weekly</MenuItem>
							<MenuItem value={'v'}>Dividends</MenuItem>
						</Select>
					</Grid2>
					<Grid2 xs={12}>
						<Button variant="filled" type="submit" sx={{ width: "100%" }}>
							Submit
						</Button>
					</Grid2>
				</Grid2>
			</form>
			<BasicTable data={stockData} />
		</div>
	);
};
export default LandingSearch;
