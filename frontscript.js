let currMoleTile;//this is (current mo tile)this will help tha keep track mole
let currPlantTile;
let score = 0;
let gameOver = false;
window.onload=function(){//page load in your website
    setGame();//fun creted

}
function setGame(){// called
    //set up the grid for the game borad in html
    for(let i=0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,1000);//the add image tag in inside so that is this fun(1000milscnd=1scnd)
    setInterval(setPlant,2000);
}
function getRandomTile(){
    //math.random..>(0-1)=(0-9)
    let num = Math.floor(Math.random() * 9);
    return num.toString();

}
function setMole(){//called
    if(gameOver){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src ="./rabbit2.png";
    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function setPlant(){
    if(gameOver){
        return;

    }
    if(currPlantTile){
        currPlantTile.innerHTML = ""; //it is empty string
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}
function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();//update score
    }
    else if(this == currPlantTile){
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();
        gameOver = true;
    }
}