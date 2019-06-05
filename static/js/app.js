// from data.js
//Level 1: Automatic Table and Date Search
//Appending table and adding new rows of data
var tableData = data;

// YOUR CODE HERE!
console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tbody.text("");

function loadData(dataArray) {
    dataArray.forEach((dataRow) => {
        // console.log(dataRow);
        var row = tbody.append("tr");
        Object.entries(dataRow).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);

        }); 
    })
};

//mainline
loadData(tableData)
console.log(tableData);


//Got this from homework 14-3-9
// //Creating ability to search through date/time column to match user input
// var dateSearch = tableData;

// Adding variables for filter and reset button and Input Field for filtering
var filterBtn = d3.select("#filter-btn");
var resetbtn = d3.select("#reset-btn");
var inputField1 = d3.select("#datetime");
console.log(filterBtn);

// Filter by attribute

filterBtn.on("click", function(){
    d3.event.preventDefault();
    var inputDate = inputField1.property("value").trim();
    // Filter by field matching input value
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate)

    // Add filtered sighting to table
    tbody.html("");
  
    let response = {
        filterDate
    }
  
    if (response.filterDate.length !== 0) {
      loadData(filterDate);
    }
      else {
        tbody.append("tr").append("td").text("No results found!"); 
      }
  })
  
  resetbtn.on("click", () => {
    tbody.html("");
    loadData(tableData)
    console.log("Table reset")
  })