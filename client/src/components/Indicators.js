import React, { useState, useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "./indicator.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Axios from "axios";

export default function Indicators(props) {
	console.log("inside props:", props);
	const [rsi, setRsi] = useState("");
	useEffect(() => {
        const passing_value = props.data;
		Axios.post("http://localhost:5010/caclRsi/", { passing_value })
			.then((response) => {
				console.log("calc rsi", response);
                setRsi(response.rsi)
                console.log("rsi inside indicator",rsi)
			})
			.catch((err) => {
				console.log(err);
			});
	});

	return (
		<div>
			<h3>Indicators</h3>
			<Grid2 container spacing={1}>
				<Grid2 item xs={3.5}>
					<Card sx={{ minWidth: 275 }} className="card" variant="outlined">
						<CardActionArea>
							<CardContent>
								<Typography variant="h5" component="div">
									Relative Strength Indicator (RSI)
								</Typography>
								<Typography variant="body2">{rsi}</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid2>
			</Grid2>
		</div>
	);
}
