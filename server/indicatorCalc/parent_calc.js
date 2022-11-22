var yahooFinance = require("yahoo-finance");
let open = [];
let close = [];
let high = [];
let low = [];
let volume = [];
function updateValues(res) {
	open = [];
	close = [];
	high = [];
	low = [];
	volume = [];
	for (var i = 0; i < res.length; i++) {
		open.push(res[i].open);
		close.push(res[i].adjClose); //Adjusted close, not close
		high.push(res[i].high);
		low.push(res[i].low);
		volume.push(res[i].volume);
	}
}
const loadData = async (symbol, from, to, freq) => {
	function data(callback) {
		var d = yahooFinance.historical(
			{
				symbol: symbol,
				from: from,
				to: to,
				freq: freq,
			},
			function (error, quotes) {
				if (error) {
					console.log("Error in server/indicatorCalc/parent_calc.js", err);
				}
				callback(quotes);
				console.log("Data loaded in parent_calc.js");
			}
		);
		return d;
	}
	await data(updateValues);
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
