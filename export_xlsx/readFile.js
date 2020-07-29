// require xlsx module
const XLSX = require("xlsx");

// create workbook object from xlsx file
const workbook = XLSX.readFile("./files/iryo.xlsx");
console.log(workbook);