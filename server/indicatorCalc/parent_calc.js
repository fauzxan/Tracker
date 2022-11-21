var tulind = require("tulind");
var yahooFinance = require("yahoo-finance");
var returnValue = [];

const loadData = (symbol, from, to, freq) => {
	let open = [];
	let close = [];
	let high = [];
	let low = [];
	let volume = [];
	let updateValues = () => {
		returnValue.map((e) => {
			open.push(e.open);
			close.push(e.adjClose);
			high.push(e.high);
			low.push(e.low);
			volume.push(e.volume);
		});
	};

	const data = yahooFinance.historical(
		{
			symbol: symbol,
			from: from,
			to: to,
			freq: freq,
		},
		function (error, quotes) {
			if (error)
				console.log("Error in server/indicatorCalc/parent_calc.js", err);
			else {
				returnValue = quotes;
			}
			console.log("Data loaded in parent_calc.js");
		}
	);
    updateValues();
	return {
		open,
		close,
		high,
		low,
		volume,
	};
};
// console.log(tulind.indicators);

module.exports = { loadData };
