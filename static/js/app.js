// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
   // clear out any existing data
    tbody.html("");

console.log()
// looping through each object in the data and appending a row and cells for each value 
data.forEach((dataRow) => {
    // append a row to the table body
    let row = tbody.append("tr");
    // loop through each field in the dataRow and addd each value to a table cell
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
            }
        );
    });
}
function handleClick() {
  //grab the datetime value from the filer
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check to see if a date was entered and filer the data using that data

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
  
    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};
// attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build thje table
buildTable(tableData);    