// require xlsx module
const XLSX = require("xlsx");

// create workbook object from xlsx file
const workbook = XLSX.readFile("./files/iryo.xlsx");

const second_sheet_name = workbook.SheetNames[1];
let address_of_cell = "A1";

// get worksheet
let worksheet = workbook.Sheets[second_sheet_name];

// find desired cell
let desired_cell = worksheet[address_of_cell];

// get the values
let desired_value = (desired_cell ? desired_cell.v : undefined);

console.log(second_sheet_name);
console.log(desired_value);