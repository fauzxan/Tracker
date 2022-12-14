import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";




export default function BasicTable(props) {
	const stockData = props.data;
	return (
		<TableContainer component={Paper} sx={{mt: 20}}>
			<Table sx={{ minWidth: 650, mt: "1%" }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Ticker Name</TableCell>
						<TableCell align="right">Date</TableCell>
						<TableCell align="right">Open</TableCell>
						<TableCell align="right">High</TableCell>
						<TableCell align="right">Low</TableCell>
						<TableCell align="right">Close</TableCell>
						<TableCell align="right">AdjClose</TableCell>
						<TableCell align="right">Volume</TableCell>
						<TableCell align="right">Dividends</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{stockData.map((row) => (
						<TableRow
							key={row.date}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.symbol}
							</TableCell>
							<TableCell align="right">{row.date.split("T")[0]}</TableCell>
							<TableCell align="right">{row.open}</TableCell>
							<TableCell align="right">{row.high}</TableCell>
							<TableCell align="right">{row.low}</TableCell>
							<TableCell align="right">{row.close}</TableCell>
							<TableCell align="right">{row.adjClose}</TableCell>
							<TableCell align="right">{row.volume}</TableCell>
							<TableCell align="right">{row.dividends}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
