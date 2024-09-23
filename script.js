document.addEventListener('DOMContentLoaded', function(){

let arr = []
const game_num = 9
const box_num = 9
for(let i = 0; i < game_num; i++){
    arr[i] = [];
    for(let y = 0; y < box_num; y++){
        arr[i][y] = null;
    }
}

let turn_count = 0;
const turn = document.querySelector('#whose-turn');

/*
null is empty
0 is circle
1 is cross
*/ 


function box(game_num, box_num){
    /*let box_num = 1;*/
    let selector = '#box' + '-' + game_num + '-' + box_num;
    let box1 = document.querySelector(selector);
    /*let box_id = 1;*/
    box1.addEventListener('click', function(){
        if (arr[game_num][box_num] != null){
            return;
        }
        else {
            let image = document.createElement("img");
            if (turn_count % 2 == 0){
                image.src = "o-mark.png"
                box1.appendChild(image);
                arr[game_num][box_num] = 0;
                console.log('game num is', game_num, 'box num is', box_num);
                turn_count += 1;
                indicate_turn();
            }
            else {
                
                image.src = "x-mark.png"
                box1.appendChild(image);
                arr[game_num][box_num] = 1;
                console.log('game num is', game_num, 'box num is', box_num);
                turn_count += 1;
                indicate_turn();
            }
        }
    });
}

function reset(){
    let reset = document.querySelector("#reset");
    reset.addEventListener('click', function(){
        for(let i = 0; i < game_num; i++){
            arr[i] = [];
            for(let y = 0; y < box_num; y++){
                arr[i][y] = null;
            }
        }
        turn_count = 0;
        indicate_turn();
        let all_cells = document.querySelectorAll(".item");
        for (let i = 0; i < all_cells.length; i++){
            if (all_cells[i].hasChildNodes()){
                all_cells[i].removeChild(all_cells[i].firstElementChild)
            }
            
        }
        
    })
    
}

function indicate_turn(){
    
    if (turn_count % 2 == 0){
        turn.textContent = "It is circle's turn";
    }
    else {
        turn.textContent = "It is cross' turn";
    }
    
}

for (let box_num = 0; box_num < 9; box_num++){
    for (let box_sub_num = 0; box_sub_num < 9; box_sub_num++)
    box(box_num, box_sub_num);
}
indicate_turn();
reset();


/*
1. implement reset function
2. Use function for all the boxes in the game
3. implement check function after each move
*/

}
)