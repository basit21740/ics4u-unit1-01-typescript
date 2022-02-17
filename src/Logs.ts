/*
* This program is Truck Logs
*
* @author  Abdul Basit Butt
* @version 1.0
* @since   2022-02-15
*/

const prompt = require('prompt-sync')();
const loatlimit = 1100.0;
const logWeight = 20.0;

var userInput = prompt('Enter the log length (0.25, 0.5 or 1 meters)=');

let numberOfLogs = (loatlimit /userInput/logWeight);

console.log("This truck can carry " + numberOfLogs + " logs");

