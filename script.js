document.addEventListener('DOMContentLoaded', function(){

let arr = []
for(let i = 0; i < 9; i++){
    arr[i] = null;
}

let turn_count = 0;

/*
null is empty
0 is circle
1 is cross
*/

function box1(){
    let box1 = document.querySelector('#box-5-1');
    let box_id = 1;
    box1.addEventListener('click', function(){
        if (arr[box_id] != null){
            return;
        }
        else {
            let image = document.createElement("img");
            if (turn_count % 2 == 0){
                image.src = "o-mark.png"
                box1.appendChild(image);
                arr[box_id] = 0;
                turn_count += 1;
            }
            else {
                
                image.src = "x-mark.png"
                box1.appendChild(image);
                arr[box_id] = 1;
                turn_count += 1;
            }
        }
    });
}
box1();
}
)