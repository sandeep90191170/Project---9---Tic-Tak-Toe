console.log("Welcome to Tic Tak Toe")
let turn = "X"
let gameover = false;

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 15.5, 10.4, 0],
        [3, 4, 5, 15.5, 15.4, 0],
        [6, 7, 8, 15.5, 20.4, 0],
        [0, 3, 6, 10.5, 15.4, 90],
        [1, 4, 7, 15.5, 15.4, 90],
        [2, 5, 8, 20.5, 15.4, 90],
        [0, 4, 8, 15.5, 15.4, 45],
        [2, 4, 6, 15.5, 15.4, 136],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is Won"
            gameover = true;
            document.querySelector(".line").style.width = "12vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }

    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector ('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }

        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        document.querySelector(".line").style.width = "0vw"
    });

turn = "X";
gameover = false;
document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

})


