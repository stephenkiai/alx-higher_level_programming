-- displays average temp (Fahrenheit) by city ordered by temp (descending).
SELECT `city`, AVG(`value`) AS `avg_temp`
FROM `temperatures`
GROUP BY `city`
ORDER BY `avg_temp` DESC;
