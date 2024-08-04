/*for (let i = 1; i <= 200; i++) {
    document.getElementById("gameBoard").innerHTML += `
    <div class="box" id="B`+i+`"></div>` 
}*/
AddBlock()
var randomIndex
function AddBlock(){
    let blockTypes = [
        [25,24,14,26],
        [25,26,16,24],
        [15,25,16,14], 
        [15,16,24,25],
        [15,14,25,26], 
        [16,15,14,17],
        [15,16,25,26],
    ]
    randomIndex = Math.floor(Math.random()*blockTypes.length) 
    for (let i = 0; i < blockTypes[randomIndex].length; i++) {
        if (i == 0) {
            document.getElementById(blockTypes[randomIndex][i]).innerHTML = `<div class="block" id="center"></div>` 
        }else{
            document.getElementById(blockTypes[randomIndex][i]).innerHTML = `<div class="block"></div>` 
        }          
    }
    //console.log(randomIndex)
}
addEventListener("keydown", function(event) {
    if (event.keyCode === 38) { // 39 is the keycode for the right arrow key
        rotate()
    }
});
function rotate(){
    center = +document.getElementById("center").parentNode.id
    
    let blockTypes = [
        [
            [
                [-11,-10,-9,+10],
                [-9,+1,+11,-1],
                [11,+10,+9,-10],
                [9,-11,-1,+1]
            ],[
                [
                    [-11,-1,1],
                    [-9,-10,10],
                    [11,1,-1],
                    [9,-10,10]
                ],[
                    [-10,-9,+10],
                    [1,11,-1],
                    [10,-10,9],
                    [-11,-1,1]
                ]
            ]
        ],[
            [
                [-9,10,-10,11],
                [11,9,1,-1], 
                [9,10,-10,-11],
                [-11,-9,1,-1]
            ],[
                [
                    [-9,-1,1],
                    [11,-10,10],
                    [9,1,-1],
                    [-11,-10,10]
                ],[
                    [-10,11,+10],
                    [1,9,-1],
                    [10,-10,-11],
                    [-9,-1,1]
                ]
            ]
        ],[
            [
                [10,-10],
                [-1,1],
                [-10,10],
                [1,-1] 
            ],[
                [[1],[10],[-1],[-10]],
                [[-10],[1],[10],[-1]]
                
            ]
        ],[
            [
                [9,-10,11],
                [-10,10,9]
            ],[
                [
                    [9,10],
                    [-10,11]
                ],[
                    [-10,11],
                    [9,10]
                ]
            ]
        ],[
            [
                [11,-10,9],
                [9,10,11]
            ],[
                [
                    [11,10],
                    [9,-10]
                ],[
                    [-10,9],
                    [11,10]
                ]
            ]
        ],[
            [
                [1,10,-20,-10],
                [10,1,-2,-1], 
            ],[
                [
                    [-2,-1,1],
                    [10,-20,-10],
                ],[
                    [10,-20,-10],
                    [1,-1,-2],
                ]
            ]
        ]
    ]
    for (let j = 0; j < blockTypes[randomIndex][0].length; j++) {
        let Rotate = 1; 
        for (let i = 0; i < blockTypes[randomIndex][0][j].length; i++) {
            if (i== 0) {
                if (document.getElementById(center+blockTypes[randomIndex][0][j][i]).innerHTML == "") {
                    Rotate = 0
                    break;
                }
            }else{
                if (document.getElementById(center+blockTypes[randomIndex][0][j][i]).innerHTML != "") {
                    Rotate = 0
                    break;
                }
            }
        } 
        if (Rotate) {
            if (randomIndex == 5) {
                if (center%10 == 1) {
                    right() 
                }
                if (center%10 == 0) {
                    right()
                    right()
                }               
            }else
            if (center%10 == 0) {
                right()
            }else
            if (center%10 == 9) {
                Left() 
            }
        center = +document.getElementById("center").parentNode.id
            console.log(randomIndex,"Rotetttt",j)
            for (let i = 0; i < blockTypes[randomIndex][1][0][j].length; i++) {
                for (let q = 0; q < blockTypes[randomIndex][1][0][j].length; q++) {
                    document.getElementById(center+blockTypes[randomIndex][1][0][j][i]).innerHTML = ""                    
                }
                for (let q = 0; q < blockTypes[randomIndex][1][1][j].length; q++) {
                    document.getElementById(center+blockTypes[randomIndex][1][1][j][i]).innerHTML = `<div class="block"></div>`
                }
            }
            
            break;
        }        
    }
}
setInterval(function(){
    let Drop = 1;
    let blocks = document.getElementsByClassName("block")
    for (let i = 0; i < blocks.length; i++) {
        const element = +blocks[i].parentNode.id;
        if (element+10 <200 && document.getElementById(+element+10).className == "box") {
        }else{ 
            Drop = 0;
            break;
        }
    } 
    if (Drop) {  
        for (let i = blocks.length-1; i >= 0; i--) {
            const element = +blocks[i].parentNode.id;
            document.getElementById(element+10).innerHTML = document.getElementById(element).innerHTML
            document.getElementById(element).innerHTML = "" 
        }
    }else{
        for (let i = blocks.length-1; i >= 0; i--) {
            const element = blocks[i];
            document.getElementById(+blocks[i].parentNode.id).className = "boxed"
            element.className = "blocked"
            //console.log(element)
        }
        lineTest()
        setTimeout(function(){
            AddBlock()
        },500)
    }
},1000) 
addEventListener("keydown", function(event) {
    if (event.keyCode === 37) {
        Left()
    }
});
function Left(){
    let Left = 1;
    let blocks = document.getElementsByClassName("block")
    for (let i = 0; i < blocks.length; i++) {
        const element = +blocks[i].parentNode.id;
        if (element%10 != 0 && document.getElementById(+element-1).className == "box") {
        }else{ 
            Left = 0;
            break;
        }
    } 
    if (Left) {  
        for (let i = 0; i < blocks.length; i++) {
            const element = +blocks[i].parentNode.id;
            document.getElementById(element-1).innerHTML = document.getElementById(element).innerHTML
            document.getElementById(element).innerHTML = ""
            
        }
    }
}
addEventListener("keydown", function(event) {
    if (event.keyCode === 39) {
        right()
    }
});
function right(){
    let right = 1;
    let blocks = document.getElementsByClassName("block")
    for (let i = 0; i < blocks.length; i++) {
        const element = +blocks[i].parentNode.id;
        if (element%10 != 9 && document.getElementById(+element+1).className == "box") {
        }else{ 
            right = 0;
            break;
        }
    } 
    if (right) {  
        for (let i = blocks.length-1; i >= 0; i--) {
            const element = +blocks[i].parentNode.id;
            document.getElementById(element+1).innerHTML = document.getElementById(element).innerHTML
            document.getElementById(element).innerHTML = ""
            
        }
    }
}
addEventListener("keydown", function(event) {
    if (event.keyCode === 40) {
        down()
    }
});
function down(){
    let down = 1;
    let blocks = document.getElementsByClassName("block")
    for (let i = 0; i < blocks.length; i++) {
        const element = +blocks[i].parentNode.id;
        if (element+10 <200 && document.getElementById(+element+10).className == "box") {
        }else{ 
            down = 0;
            break;
        }
    } 
    if (down) {  
        for (let i = blocks.length-1; i >= 0; i--) {
            const element = +blocks[i].parentNode.id;
            document.getElementById(element+10).innerHTML = document.getElementById(element).innerHTML
            document.getElementById(element).innerHTML = ""
            
        }
    }
}
function lineTest(){
    for (let i = 0; i < 20; i++) {
        let line = 1
        for (let j = 0; j < 10; j++) {
            if (document.getElementById(i+""+j).innerHTML == "") {
                line = 0 
                break;
            }
        }
        if (line) {
            for (let j = 0; j < 10; j++) {
                console.log(i+""+j)
                document.getElementById(i+""+j).className = "box"          
                document.getElementById(i+""+j).innerHTML = ""          
            }
            console.log(i)
            for (let o = (i-1)*10+9; o >= 0; o--) {
                if (document.getElementById(o) && document.getElementById(o).innerHTML != "") {
                    console.log("alo",o+10)
                document.getElementById(o+10).innerHTML = `<div class="blocked"></div>`
                document.getElementById(o+10).className = "boxed"
                document.getElementById(o).innerHTML = "" 
                document.getElementById(o).className = "box"
                }
            }

        }
    }
}