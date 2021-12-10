let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let bane = 0;
let sorthul = 1;
let galaxe = 2;
let stjerne = 3;
let player = 4;
let win = 5;
let sidsteWin = 6;
let sortKant = 7;
let playerPosition = {x:0, y:0}

let arr = [
    //LEVEL 0
    [
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
        [7,3,0,0,0,3,0,0,1,0,3,0,0,0,0,2,0,2,5,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,2,2,7],
        [7,0,0,1,0,0,0,0,0,0,3,0,0,3,0,2,0,0,0,7],
        [7,0,0,0,0,0,0,3,0,0,0,0,0,0,0,2,2,2,2,7],
        [7,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,7],
        [7,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,0,0,0,7],
        [7,3,0,0,0,0,0,3,0,0,3,0,0,3,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,3,7],
        [7,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,3,0,0,0,0,0,0,1,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,1,0,3,0,0,3,0,0,0,0,3,7],
        [7,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,7],
        [7,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,1,0,3,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,3,0,0,0,0,0,0,0,3,0,1,0,0,3,7],
        [7,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,2,0,2,0,2,0,0,0,0,0,3,7],
        [7,0,0,1,0,3,0,0,2,2,4,2,2,0,0,1,0,0,0,7],
        [7,3,0,0,0,0,0,0,2,0,2,0,2,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,7],
        [7,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,7],
        [7,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1,0,0,0,7],
        [7,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,7],
        [7,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,3,0,7],
        [7,3,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,3,7],
        [7,0,0,0,0,3,0,3,0,0,0,0,0,3,0,1,0,0,0,7],
        [7,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1,0,0,0,7],
        [7,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,3,7],
        [7,3,0,0,0,0,0,0,0,0,0,1,0,3,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,7],
        [7,0,0,1,0,0,0,0,0,0,3,0,0,0,0,1,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,7],
        [7,0,1,0,0,3,0,0,1,0,0,0,0,3,0,1,0,0,0,7],
        [7,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,3,0,7],
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
    ],
    //LEVEL 1
    [
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
        [7,4,2,0,2,0,0,0,0,1,0,0,0,3,0,0,0,0,0,7],
        [7,2,0,0,2,0,0,0,0,3,0,0,0,0,0,1,0,3,0,7],
        [7,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,1,0,0,7],
        [7,2,2,2,2,0,0,1,1,0,0,0,0,1,0,1,1,1,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3,0,7],
        [7,3,0,0,1,0,3,0,1,0,0,1,0,0,3,0,0,0,0,7],
        [7,0,0,1,1,0,0,1,1,0,0,0,0,3,0,0,1,0,0,7],
        [7,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,0,7],
        [7,0,0,1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,7],
        [7,0,3,0,0,0,0,0,0,1,0,0,0,0,0,3,0,0,3,7],
        [7,0,0,3,0,0,0,0,3,0,0,3,0,0,0,1,0,3,0,7],
        [7,3,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,7],
        [7,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,3,0,0,7],
        [7,0,0,0,3,0,0,0,3,0,0,1,0,0,0,3,0,0,1,7],
        [7,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,3,0,7],
        [7,0,0,1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,1,0,0,7],
        [7,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,3,0,7],
        [7,3,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,7],
        [7,1,0,0,1,0,0,3,0,0,0,0,0,0,0,1,0,0,1,7],
        [7,0,0,0,3,0,0,0,0,0,0,1,0,1,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,0,0,0,7],
        [7,0,0,1,0,0,0,3,0,0,0,3,0,0,0,0,0,1,0,7],
        [7,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,7],
        [7,0,3,0,0,0,0,0,0,0,1,0,0,0,0,3,0,0,0,7],
        [7,0,0,0,0,0,3,0,0,0,0,3,0,1,0,0,0,0,3,7],
        [7,0,0,0,1,0,0,0,0,1,0,0,3,0,0,0,0,0,0,7],
        [7,1,0,0,0,0,3,0,0,0,0,0,0,0,0,1,0,0,0,7],
        [7,0,0,3,0,0,0,1,0,0,0,3,0,1,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,7],
        [7,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,7],
        [7,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,7],
        [7,1,0,1,0,0,0,3,0,0,3,0,0,3,0,0,0,1,0,7],
        [7,0,1,1,1,0,0,1,0,0,0,0,0,0,0,2,2,2,2,7],
        [7,0,0,1,0,0,0,0,1,0,0,1,1,0,0,2,0,0,0,7],
        [7,0,0,0,0,0,3,0,0,3,0,1,0,0,0,2,0,2,2,7],
        [7,0,0,3,0,0,0,0,3,1,0,0,0,0,0,2,0,2,5,7],
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
    ],
    //LEVEL 2
    [
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
        [7,4,2,0,2,0,1,0,0,1,0,0,0,3,0,0,0,0,0,7],
        [7,2,0,0,2,0,1,0,0,0,3,0,1,0,0,1,0,3,0,7],
        [7,0,0,0,2,0,1,0,1,0,0,0,3,0,0,0,1,0,0,7],
        [7,2,2,2,2,0,0,0,0,0,0,0,0,1,0,1,1,1,0,7],
        [7,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,7],
        [7,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,3,1,7],
        [7,3,0,0,0,1,1,1,1,0,0,1,0,0,3,0,0,0,0,7],
        [7,0,0,0,0,3,0,3,0,0,0,0,0,0,0,0,1,0,1,7],
        [7,3,1,0,1,0,0,0,1,1,0,3,0,0,0,3,0,1,0,7],
        [7,0,0,1,0,1,0,0,0,1,0,0,1,0,3,0,3,0,1,7],
        [7,1,3,0,0,0,0,3,0,1,0,0,0,0,0,3,0,0,0,7],
        [7,0,0,3,0,0,3,0,3,1,0,3,0,0,0,1,0,3,0,7],
        [7,1,0,1,0,1,0,3,0,1,0,0,0,0,1,0,0,1,1,7],
        [7,0,1,0,0,0,1,0,3,1,1,0,0,0,0,0,3,0,0,7],
        [7,0,0,0,3,0,0,0,0,1,0,0,3,0,0,3,1,0,0,7],
        [7,0,0,0,0,0,1,3,0,1,0,3,3,3,0,1,0,0,0,7],
        [7,0,0,1,0,0,0,0,0,1,0,0,3,0,0,0,0,1,0,7],
        [7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,7],
        [7,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,7],
        [7,3,0,0,0,0,0,3,0,1,1,0,3,0,0,0,1,0,0,7],
        [7,1,0,0,0,0,3,3,3,1,0,3,3,3,0,1,0,0,1,7],
        [7,0,0,0,3,0,0,3,0,1,0,1,3,1,0,0,1,0,0,7],
        [7,1,0,0,0,0,0,0,1,1,0,0,0,0,0,3,0,0,0,7],
        [7,0,0,1,0,0,0,3,0,1,0,3,0,0,0,0,0,1,0,7],
        [7,3,0,0,0,1,0,0,0,1,0,0,0,3,0,1,0,0,0,7],
        [7,0,3,0,0,0,0,3,0,1,1,0,3,0,3,0,0,0,0,7],
        [7,0,0,0,0,0,1,0,0,1,0,0,0,3,0,1,0,0,3,7],
        [7,3,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,7],
        [7,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,7],
        [7,1,0,3,0,1,0,1,0,1,0,0,0,1,0,0,0,0,3,7],
        [7,0,0,1,0,0,0,0,3,1,0,0,1,0,0,1,0,0,0,7],
        [7,0,1,0,3,0,1,0,0,1,0,0,1,1,0,0,1,1,0,7],
        [7,0,0,3,3,3,0,0,0,1,1,0,1,0,0,0,1,0,1,7],
        [7,0,0,1,3,0,1,3,0,1,3,0,0,0,1,0,0,1,0,7],
        [7,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,7],
        [7,2,2,2,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,7],
        [7,0,0,2,0,1,3,0,0,3,0,1,0,0,0,1,0,3,3,7],
        [7,6,0,2,0,0,0,0,3,1,0,0,0,0,0,1,0,3,3,7],
        [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
    ]

   
];

let levelIndex = 0;
let maze = arr[levelIndex];

function nextLevel() {
    levelIndex++;
    maze = arr[levelIndex];
    drawMaze();
}

//tilføj billeder
let bil = new Image();
bil.src='fly.png';

let stjerneBil = new Image();
stjerneBil.src='stjerne.png';

let sortHulBil = new Image();
sortHulBil.src='sorthul.png';

let galaxeBil = new Image();
galaxeBil.src='galaxe.png';

let sidsteWinBil = new Image();
sidsteWinBil.src='sidstewin.png';

function drawMaze() {
    

//ctx.fillRect. Starter øverst venstre hjørne!
//udfyld banen

    for(let x = 0; x < maze.length; x++){
        for(let y = 0; y < maze[x].length; y++){

            if(maze[x][y] == bane)
            {
                ctx.fillStyle = "#33565a";
                ctx.fillRect(x*25,y*25,25,25);
            }
            else if(maze[x][y] == sorthul)
            {
             ctx.drawImage(sortHulBil,x*25,y*25,25,25);
            }
            else if(maze[x][y] == galaxe)
            {
                ctx.fillStyle = "#2E2251";
                ctx.fillRect(x*25,y*25,25,25); 
            }
            else if(maze[x][y] == stjerne)
            {
                ctx.drawImage(stjerneBil,x*25,y*25,25,25);
            }
            else if(maze[x][y] == player)
            {
                playerPosition.x=x
                playerPosition.y=y
                ctx.drawImage(bil,x*25,y*25,25,25);
            }
            else if(maze[x][y] == win)
            {
                ctx.drawImage(galaxeBil,x*25,y*25,25,25);
            }
            else if(maze[x][y] == sidsteWin)
            {
                ctx.drawImage(sidsteWinBil,x*25,y*25,25,25);
            }
            else if(maze[x][y] == sortKant)
            {
                     ctx.fillStyle = "#000814";
                     ctx.fillRect(x*25,y*25,25,25);
                  
            }
        }
    }
}

let point = 0;
let  feltBane = true;

//tasterne
document.addEventListener("keyup", function(event){
switch(event.keyCode){
    case 37:
    //venstre
        if(maze[playerPosition.x-1][playerPosition.y] == bane){
            maze[playerPosition.x-1][playerPosition.y] = player
                if(feltBane==true){
                    maze[playerPosition.x][playerPosition.y] = galaxe
                    feltBane=false;
                }
                else{
                    maze[playerPosition.x][playerPosition.y] = bane
                    feltBane=false;
                }
            
        }
        else if(maze[playerPosition.x-1][playerPosition.y] == galaxe ){
            maze[playerPosition.x-1][playerPosition.y] = player
                if(feltBane==true){
                    maze[playerPosition.x][playerPosition.y] = galaxe
                }
                else{
                    maze[playerPosition.x][playerPosition.y] = bane 
                    feltBane=true;  
                }

        }
        else if (maze[playerPosition.x-1][playerPosition.y] == sorthul ){
            maze[playerPosition.x][playerPosition.y] = bane
            document.getElementById("gameOver").style.display = "block"
            setTimeout(function() {
                
            window.location.reload(1);  
                
            }, 2000);
            
        }
        else if (maze[playerPosition.x-1][playerPosition.y] == sortKant ){
            maze[playerPosition.x][playerPosition.y] = bane
            document.getElementById("gameOver").style.display = "block"
            setTimeout(function() {
                
            window.location.reload(1);  
                
            }, 2000);
            
        }
        else if(maze[playerPosition.x-1][playerPosition.y] == stjerne){
            maze[playerPosition.x-1][playerPosition.y] = player
            maze[playerPosition.x][playerPosition.y] = bane 
            point+=1;
            console.log(point);
            document.getElementById("print").innerHTML = "Point: " + point;
        
        }
        else if(maze[playerPosition.x-1][playerPosition.y] == win){
            maze[playerPosition.x-1][playerPosition.y] = player
            maze[playerPosition.x][playerPosition.y] = galaxe
            let visResultat = point.toString();
            document.getElementById("nextLevel").style.display= "block";
            document.getElementById("nextLevel").innerHTML = "<h1>Du klarede dig igennem denne galaxe, du vil nu sendes videre til den næste. Held og lykke! <br><br> Du har fanget  </h1>" + "<h1>" + visResultat + "</h1>" + "<h1>stjerner på vejen</h1>";
            setTimeout(function() {
                
                nextLevel();
                document.getElementById("nextLevel").style.display= "none"
                }, 1500);

        }
        else if(maze[playerPosition.x-1][playerPosition.y] == sidsteWin){
            maze[playerPosition.x-1][playerPosition.y] = player
            maze[playerPosition.x][playerPosition.y] = galaxe
            let visResultat = point.toString();
            document.getElementById("sidsteWin").style.display = "block";
            document.getElementById("sidsteWin").innerHTML = "<h1>TILLYKKE DET LYKKEDES DIG AT FÅ RUMVÆSNET HJEM! Du fik </h1>" + "<h1>" + visResultat + "</h1>" + "<h1>Point</h1>";
        }
    
    drawMaze ()
    break;

    case 38:
        //op
        if(maze[playerPosition.x][playerPosition.y-1] == galaxe){
            maze[playerPosition.x][playerPosition.y-1] = player
                if(feltBane==true){
                    maze[playerPosition.x][playerPosition.y] = galaxe
                }
                else{
                    maze[playerPosition.x][playerPosition.y] = bane 
                    feltBane=true;  
                }

        }
        else if (maze[playerPosition.x][playerPosition.y-1] == bane){
            maze[playerPosition.x][playerPosition.y-1] = player
                if(feltBane==true){
                    maze[playerPosition.x][playerPosition.y] = galaxe
                    feltBane=false;
                }
                else{
                    maze[playerPosition.x][playerPosition.y] = bane
                    feltBane=false;
                }
    
        }
        else if (maze[playerPosition.x][playerPosition.y-1] == sorthul ){
            maze[playerPosition.x][playerPosition.y] = bane
            document.getElementById("gameOver").style.display = "block"
            setTimeout(function() {
               
                window.location.reload(1);  
            
            }, 2000);
            
        }
        else if (maze[playerPosition.x][playerPosition.y-1] == sortKant ){
            maze[playerPosition.x][playerPosition.y] = bane
            document.getElementById("gameOver").style.display = "block"
            setTimeout(function() {
               
                window.location.reload(1);  
            
            }, 2000);
            
        }
        else if(maze[playerPosition.x][playerPosition.y-1] == stjerne){
            maze[playerPosition.x][playerPosition.y-1] = player
            maze[playerPosition.x][playerPosition.y] = bane 
            point+=1;
            console.log(point);
            document.getElementById("print").innerHTML = "Point: " + point;

        }
        else if(maze[playerPosition.x][playerPosition.y-1] == win){
            maze[playerPosition.x][playerPosition.y-1] = player
            maze[playerPosition.x][playerPosition.y] = galaxe
            let visResultat = point.toString();
            document.getElementById("nextLevel").style.display= "block"
            document.getElementById("nextLevel").innerHTML = "<h1>Du klarede dig igennem denne galaxe, du vil nu sendes videre til den næste. Held og lykke! <br><br> Du har fanget  </h1>" + "<h1>" + visResultat + "</h1>" + "<h1>stjerner på vejen</h1>";

            setTimeout(function() {
                
                nextLevel();
                document.getElementById("nextLevel").style.display= "none"
                }, 1500);
        }
        else if(maze[playerPosition.x][playerPosition.y-1] == sidsteWin){
            maze[playerPosition.x][playerPosition.y-1] = player
            maze[playerPosition.x][playerPosition.y] = galaxe
            let resultat= point+=1;
            let visResultat = resultat.toString();
            document.getElementById("sidsteWin").style.display = "block";
            document.getElementById("sidsteWin").innerHTML = "<h1>TILLYKKE DET LYKKEDES DIG AT FÅ RUMVÆSNET HJEM! Du fik </h1>" + "<h1>" + visResultat + "</h1>" + "<h1>Point</h1>";
        }


    drawMaze ()
    break;

    case 39:
        //højre
        if(maze[playerPosition.x+1][playerPosition.y] == galaxe){
            maze[playerPosition.x+1][playerPosition.y] = player
                if(feltBane==true){
                    maze[playerPosition.x][playerPosition.y] = galaxe
                }
                else{
                    maze[playerPosition.x][playerPosition.y] = bane 
                    feltBane=true;  
                }
        
        }
        else if (maze[playerPosition.x+1][playerPosition.y] == bane){
            maze[playerPosition.x+1][playerPosition.y] = player
                if(feltBane==true){
                    maze[playerPosition.x][playerPosition.y] = galaxe
                    feltBane=false;
                }
                else{
                    maze[playerPosition.x][playerPosition.y] = bane
                    feltBane=false;
                }

        }
        else if (maze[playerPosition.x+1][playerPosition.y] == sorthul ){
            maze[playerPosition.x][playerPosition.y] = bane
            document.getElementById("gameOver").style.display = "block"
            setTimeout(function() {
               
                window.location.reload(1);  
            
            }, 2000);
            
        }
        else if (maze[playerPosition.x+1][playerPosition.y] == sortKant ){
            maze[playerPosition.x][playerPosition.y] = bane
            document.getElementById("gameOver").style.display = "block"
            setTimeout(function() {
               
                window.location.reload(1);  
            
            }, 2000);
            
        }
        else if(maze[playerPosition.x+1][playerPosition.y] == stjerne){
            maze[playerPosition.x+1][playerPosition.y] = player
            maze[playerPosition.x][playerPosition.y] = bane 
            point+=1;
            console.log(point);
            document.getElementById("print").innerHTML = "Point: " + point;

        }
        else if(maze[playerPosition.x+1][playerPosition.y] == win){
            maze[playerPosition.x+1][playerPosition.y] = player
            maze[playerPosition.x][playerPosition.y] = galaxe
            let visResultat = point.toString();
            document.getElementById("nextLevel").style.display= "block"
            document.getElementById("nextLevel").innerHTML = "<h1>Du klarede dig igennem denne galaxe, du vil nu sendes videre til den næste. Held og lykke! <br><br> Du har fanget  </h1>" + "<h1>" + visResultat + "</h1>" + "<h1>stjerner på vejen</h1>";

            setTimeout(function() {
                
                nextLevel();
                document.getElementById("nextLevel").style.display= "none"
                }, 1500);
        }
        else if(maze[playerPosition.x+1][playerPosition.y] == sidsteWin){
            maze[playerPosition.x+1][playerPosition.y] = player
            maze[playerPosition.x][playerPosition.y] = galaxe
            let visResultat = point.toString();
            document.getElementById("sidsteWin").style.display = "block";
            document.getElementById("sidsteWin").innerHTML = "<h1>TILLYKKE DET LYKKEDES DIG AT FÅ RUMVÆSNET HJEM! Du fik </h1>" + "<h1>" + visResultat + "</h1>" + "<h1>Point</h1>";
        }

       
    drawMaze ()
    break;

    case 40:
        //ned
        if(maze[playerPosition.x][playerPosition.y+1] == galaxe){
            maze[playerPosition.x][playerPosition.y+1] = player
                if(feltBane==true){
                    maze[playerPosition.x][playerPosition.y] = galaxe
            }
            else{
                maze[playerPosition.x][playerPosition.y] = bane 
                feltBane=true;  
            }

        } 
        else if (maze[playerPosition.x][playerPosition.y+1] == bane){
            maze[playerPosition.x][playerPosition.y+1] = player
                if(feltBane==true){
                    maze[playerPosition.x][playerPosition.y] = galaxe
                    feltBane=false;
                }
                else{
                    maze[playerPosition.x][playerPosition.y] = bane
                    feltBane=false;
                }

        }
        else if (maze[playerPosition.x][playerPosition.y+1] == sorthul ){
            maze[playerPosition.x][playerPosition.y] = bane
            document.getElementById("gameOver").style.display = "block"
            setTimeout(function() {
               
                window.location.reload(1);  
            
            }, 2000);

            
        }
        else if (maze[playerPosition.x][playerPosition.y+1] == sortKant ){
            maze[playerPosition.x][playerPosition.y] = bane
            document.getElementById("gameOver").style.display = "block"
            setTimeout(function() {
               
                window.location.reload(1);  
            
            }, 2000);

            
        }
        else if(maze[playerPosition.x][playerPosition.y+1] == stjerne){
            maze[playerPosition.x][playerPosition.y+1] = player
            maze[playerPosition.x][playerPosition.y] = bane 
            point+=1;
            console.log(point);
            document.getElementById("print").innerHTML = "Point: " +  point;

        }
        else if(maze[playerPosition.x][playerPosition.y+1] == win){
            maze[playerPosition.x][playerPosition.y+1] = player
            maze[playerPosition.x][playerPosition.y] = galaxe
            let visResultat = point.toString();
            document.getElementById("nextLevel").style.display= "block"
            document.getElementById("nextLevel").innerHTML = "<h1>Du klarede dig igennem denne galaxe, du vil nu sendes videre til den næste. Held og lykke! <br><br> Du har fanget  </h1>" + "<h1>" + visResultat + "</h1>" + "<h1>stjerner på vejen</h1>";

            setTimeout(function() {
                
                nextLevel();
                document.getElementById("nextLevel").style.display= "none"
                }, 1500);
        }
        else if(maze[playerPosition.x][playerPosition.y+1] == sidsteWin){
            maze[playerPosition.x][playerPosition.y+1] = player
            maze[playerPosition.x][playerPosition.y] = galaxe
            let visResultat = point.toString();
            document.getElementById("sidsteWin").style.display = "block";
            document.getElementById("sidsteWin").innerHTML = "<h1>TILLYKKE DET LYKKEDES DIG AT FÅ RUMVÆSNET HJEM! Du fik </h1>" + "<h1>" + visResultat + "</h1>" + "<h1>Point</h1>";
        }

    
        drawMaze ()
        break;

        default:
        console.log("hvad laver du????")
}
}) 
drawMaze();
window.addEventListener("load",drawMaze);