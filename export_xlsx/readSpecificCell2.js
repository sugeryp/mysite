// require xlsx module
const XLSX = require("xlsx");

// create workbook object from xlsx file
const workbook = XLSX.readFile("./files/iryo.xlsx");

const forth_sheet_name = workbook.SheetNames[3];

// get worksheet
let worksheet = workbook.Sheets[forth_sheet_name];

// find desired cell
const desired_values = [];

for(i = 1; i <= 148; i++) {
    const address_of_cell = `E${i}`; 
    let desired_cell = worksheet[address_of_cell];
    // get the values
    desired_values[i-1] = (desired_cell ? desired_cell.v : undefined);
}

console.log(forth_sheet_name);
console.log(desired_values);