document.addEventListener('DOMContentLoaded', function(){

    const row = document.createElement("div")
    
    function createRow(rowlength){
        row.classList.add("rowbox");
        container.appendChild(row);
        for(let i = 0; i < rowlength; i++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.border = "thin solid black";
            row.appendChild(box);
        }
    }
    const container = document.querySelector(".container");
    createRow(3)








}
)