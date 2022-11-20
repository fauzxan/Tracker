import React, { useState } from "react";
import Grid2 from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import Axios from "axios";
import BasicTable from "./BasicTable";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";

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

	const handleSelectChange = (event) => {
		setFormValues({
			...formValues,
			freq: event.target.value,
		});
	};

	const [stockData, setStockData] = useState([]);

	const sendData = (event) => {
		event.preventDefault();
		console.log("Values", formValues);
		Axios.post("http://localhost:5000/retrieveData/", { formValues })
			.then((response) => {

				console.log("From date:", formValues.from)
				console.log("To date:", formValues.to)
				if (response.data.length === 0) alert("Server returned null");
				console.log("Response recieved from server");
				setStockData(response.data.reverse());
				console.log("StockData updated ");
			})
			.catch((err) => console.log(err));
	};

	const [dateTime, setDateTime] = useState(dayjs(""));
    const [dateTimeTo, setDateTimeTo] = useState(dayjs(""));



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
					<Grid2 xs={4} sx={{ mt: 2 }}>
						<Select
							labelId="select-label"
							id="select"
							label="Frequency"
							onChange={handleSelectChange}
							sx={{ width: "100%" }}
						>
							<MenuItem value={"m"}>Monthly</MenuItem>
							<MenuItem value={"d"}>Daily</MenuItem>
							<MenuItem value={"w"}>Weekly</MenuItem>
							<MenuItem value={"v"}>Dividends</MenuItem>
						</Select>
					</Grid2>
					<Grid2 xs={4} sx={{ mt: 2, ml: 1 }}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label="From"
								renderInput={(params) => <TextField {...params} />}
								views={['year', 'month', 'day']}
								value={dateTime}
								onChange={(newValue) => {
									setDateTime(newValue);
									setFormValues({
										...formValues,
										from: newValue,
									});
								}}
							/>
						</LocalizationProvider>
					</Grid2>
					<Grid2 xs={3} sx={{ mt: 2 }}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label="To"
								renderInput={(params) => <TextField {...params} />}
								views={['year', 'month', 'day']}
								value={dateTimeTo}
								onChange={(newValue) => {
									setDateTimeTo(newValue);
									setFormValues({
										...formValues,
										to: newValue,
									});
								}}
							/>
						</LocalizationProvider>
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
