let container = document.getElementById('container');
let ball = document.getElementById('ball');

let time = setInterval(move, 5);

let pos = 0;
let final = false;

function move(){

    if(final == false){
        pos += 1;
        ball.style.left = pos + 'px';
        if(pos > 550){
            final = true;
        }
    }

    else{
        pos -= 1;
        ball.style.left = pos + 'px';
        if(pos < 0){
            final = false;
        }
    }
    
}