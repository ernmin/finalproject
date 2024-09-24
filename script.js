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
let previous_game_num = 9;
const turn = document.querySelector('#whose-turn');
indicate_turn();

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
    box1.addEventListener('click', mark_cross_circle.bind(null, game_num, box_num, box1));
}

function mark_cross_circle(game_num, box_num, box1){
    if (arr[game_num][box_num] != null){
        return;
    }
    else if (previous_game_num != 9 && previous_game_num != game_num){
        return;
    }
    else {
        let image = document.createElement("img");
        if (turn_count % 2 == 0){
            image.src = "o-mark.png"
            box1.appendChild(image);
            arr[game_num][box_num] = 0;
            console.log('game num is', game_num, 'box num is', box_num);
            console.log(check_small_game(game_num));
            turn_count += 1;
            previous_game_num = box_num;
            indicate_turn();
            next_game(game_num, box_num);
        }
        else {
            
            image.src = "x-mark.png"
            box1.appendChild(image);
            arr[game_num][box_num] = 1;
            console.log('game num is', game_num, 'box num is', box_num);
            console.log(check_small_game(game_num));
            turn_count += 1;
            previous_game_num = box_num;
            indicate_turn();
            next_game(game_num, box_num);
        }
    }
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

function check_small_game(game_num){
    if (check_row(game_num) == 1){
        return 1;
    }
    else if(check_column(game_num) == 1){
        return 1;
    }
    else if(check_diagonal(game_num) == 1){
        return 1;
    }
    else{
        return 0;
    }
}

function check_row(game_num){
    for(let cell_row = 0; cell_row < 7; cell_row = cell_row + 3){
        if (arr[game_num][cell_row] != null){
            if (arr[game_num][cell_row] == arr[game_num][cell_row + 1] && arr[game_num][cell_row + 1] == arr[game_num][cell_row + 2]){
                return 1;
            }
            else {
                continue;
            }
        }
        else {
            continue;
        }
    }
    return 0;
}

function check_column(game_num){
    for(let cell_column = 0; cell_column < 3; cell_column++){
        if (arr[game_num][cell_column] != null){
            if (arr[game_num][cell_column] == arr[game_num][cell_column + 3] && arr[game_num][cell_column + 3] == arr[game_num][cell_column + 6]){
                return 1;
            }
            else {
                continue;
            }
        }
        else {
            continue;
        }
    }
    return 0;
}

function check_diagonal(game_num){
    let cell_diagonal = 4;
    if (arr[game_num][cell_diagonal] == null){
        return 0;
    }
    else if (arr[game_num][cell_diagonal] == arr[game_num][cell_diagonal - 2] && arr[game_num][cell_diagonal] == arr[game_num][cell_diagonal + 2]){
        return 1;
    }
    else if (arr[game_num][cell_diagonal] == arr[game_num][cell_diagonal - 4] && arr[game_num][cell_diagonal] == arr[game_num][cell_diagonal + 4]){
        return 1;
    }
    else {
        return 0;
    }
}



for (let game_num = 0; game_num < 9; game_num++){
    for (let box_num = 0; box_num < 9; box_num++)
    box(game_num, box_num);
}
reset();



/*
1. implement reset function
2. Use function for all the boxes in the game
3. implement check function after each move
4. if there is a win, check who won using the turn count
*/

}
)