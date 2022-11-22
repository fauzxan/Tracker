# Tracker
### Indicators used:
##### RSI:
Relative strength index is a simple way to measure if a given stock is oversold or overbought. RSI takes the ratio between the average gains and average losses for the past couple of days for a given stock. The period under spectation is typically 14 days. Let's call the ratio averageGain/averageLoss as 'r'. If r>1, it means that in the last 14 days, there were more gains than losses. Similarly, if the ratio is less than 1, then there were more losses than gains in the past 14 days. More precisely, as the value of r -> 0, it implies that the averageLoss >> averageGain. <br/>
Now, RSI is a value between 0 and 100, and in order to represent it on this scale, the formula is as follows:
$$
RSI = 100 - (100/(1+(averageGain/averageLoss)))
$$

If the 14d RSI dips below 30, the stock is considered oversold. <br/>
Conversly, if the 14d RSI rises above 70, the stock is considered overbought.
