let colorSelected; 
const MAX_ROWS = 10;  
const MAX_COLS = 10;
//Adds a row
function addR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

   // limits the rows to 10 blocks 
    if (rows.length >= MAX_ROWS) {
        alert("Maximum number of rows reached"); // alert pops up the message 
        return;
    }
    //if grid is empty need to create row
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };

        row.appendChild(col);
        grid.appendChild(row);
    //otherwise append a new row with the current
    //amount of columns
    } else {
        let numCols = rows[0].childElementCount;
        let row = document.createElement("tr");
        for (let i = 0; i < numCols; i++){
            let col = document.createElement("td");
            col.onclick = function(){
              this.style.backgroundColor = colorSelected;
            };
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}
//Adds a column
function addC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

// limits the number of column   
if (rows.length > 0) { 
    if (rows[0].childElementCount >= MAX_COLS) {  // Check if the first row has reached the maximum number of columns
        alert("Maximum number of columns reached");
        return;
    }
}
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);

    } else {
        for (let i = 0; i < rows.length; i++){
            let col = document.createElement("td");
            col.onclick = function(){
              this.style.backgroundColor = colorSelected;
            };
            rows[i].appendChild(col);
        }
    } 
}

//Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    if(rows.length === 0){
        alert("There is nothing to delete");
        return;
    }

    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
    
}
//Remove a column
function removeC() {
    let rows = document.getElementsByTagName("tr");
    let grid = document.getElementById("grid");

    if(rows.length === 0){
        alert("There is nothing to delete");
        return;
    }

    if(rows[0].childElementCount === 1) {
        grid.innerHTML = "";
        return;
    } 

    for (let i = 0; i < rows.length; i++){
        let col = rows[i].lastElementChild; 
        rows[i].removeChild(col);
    }

}
//sets global variable for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
}

function fill(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colorSelected;
    }
}

function clearAll(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "";
    }
}

function fillU(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        if (cells[i].style.backgroundColor === "") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}