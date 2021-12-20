
const btnGenerate = document.getElementById("generate");
const select = document.getElementById("difficulty");
const grid = document.getElementById("grid");

const difficultyCells = [10, 9, 7];


 

function generateGrid(items){

    let row = "";
    let cell = "";

    let j = 0;
    grid.innerHTML = "";

    for(let i=0; i < items; i++){

        
        row = document.createElement("div");
        row.className = "row";
        grid.append(row);

        for (j=0; j < items; j++){

            cell = document.createElement("div");
            cell.className = "col";
            let index = (j+1) + items*(i);
            cell.innerText = index;
            cell.setAttribute("data_value", index-1);
            row.append(cell);
        }
    }    
}

window.addEventListener("DOMContentLoaded", function(){
    generateGrid(difficultyCells[0]);
});

select.addEventListener('click', function(){
    
    let choice = this.value;
    btnGenerate.addEventListener('click', function(){
        generateGrid(difficultyCells[choice]);
    });
});

grid.addEventListener('click', (event) => {

    let item = event.target;
    console.log(item);
    
    if (item.className == "col"){
        item.classList.add("active");
    }
});

