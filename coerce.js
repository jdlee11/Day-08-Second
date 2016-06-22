var values = [undefined, null, true, false, "", "1.2",
  "one", 0, -0, NaN, Infinity, -Infinity, 1, {}, [],
  [12], ['something'], function(){}];
var numValues = values.map(Number);
var stringValues = values.map(String);
var booleanValues = values.map(Boolean);

function fillTable() {
  var table = document.getElementsByClassName("myTable")[0];
  for (var r = 1; r < 19; r++){
    var row = table.insertRow(r); // make new row
    var cell0 = row.insertCell(0); // add 4 columns to each row
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var text0 = document.createTextNode(values[r - 1]); // first row is label
    var text1 = document.createTextNode(numValues[r - 1]);
    var text2 = document.createTextNode(stringValues[r - 1]);
    var text3 = document.createTextNode(booleanValues[r - 1]);
    cell0.appendChild(text0);
    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
  }
}
fillTable();
