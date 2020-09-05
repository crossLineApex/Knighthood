//all my game variables are here
var allmoves =  Array.from(document.querySelectorAll('.col'));
var arr=[
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
  [15,16,17,18,19],
  [20,21,22,23,24]
];
var player1pos = 20;
var player2pos = 4;
player1turn();

//start game



//to check for available moves for a given knight's position
function checkpos(i,j){
  var availpos=[];
  var checki,checkj;
  checki = i;
  checkj = j;
  //upper right
  checki=checki - 2;
  checkj=checkj + 1;
  if(checki >= 0 && checki <5 && checkj >= 0 && checkj <5 ){
    availpos.push(arr[checki][checkj]);
  }
  checki = i;
  checkj = j;
  //upper left
  checki=checki - 2;
  checkj=checkj - 1;
  if(checki >= 0 && checki <5 && checkj >= 0 && checkj <5 ){
    availpos.push(arr[checki][checkj]);
  }
  checki = i;
  checkj = j;
  //left below
  checki=checki + 1;
  checkj=checkj - 2;
  if(checki >= 0 && checki <5 && checkj >= 0 && checkj <5 ){
    availpos.push(arr[checki][checkj]);
  }
  checki = i;
  checkj = j;
  //left up
  checki=checki - 1;
  checkj=checkj - 2;
  if(checki >= 0 && checki <5 && checkj >= 0 && checkj <5 ){
    availpos.push(arr[checki][checkj]);
  }
  checki = i;
  checkj = j;
  //below right
  checki=checki + 2;
  checkj=checkj + 1;
  if(checki >= 0 && checki <5 && checkj >= 0 && checkj <5 ){
    availpos.push(arr[checki][checkj]);
  }
  checki = i;
  checkj = j;
  //below left
  checki=checki + 2;
  checkj=checkj - 1;
  if(checki >= 0 && checki <5 && checkj >= 0 && checkj <5 ){
    availpos.push(arr[checki][checkj]);
  }
  checki = i;
  checkj = j;
  //right below
  checki=checki + 1;
  checkj=checkj + 2;
  if(checki >= 0 && checki < 5 && checkj >= 0 && checkj < 5 ){
    availpos.push(arr[checki][checkj]);
  }
  checki = i;
  checkj = j;
  //right up
  checki=checki - 1;
  checkj=checkj + 2;
  if(checki >= 0 && checki < 5 && checkj >= 0 && checkj < 5 ){
    availpos.push(arr[checki][checkj]);
  }
  return availpos;
}
//console.log(checkpos(4,0));

function player1turn(){
  document.getElementById('player2').innerText = "";
  document.getElementById('player1').innerText = "Player 1 turn";
  //allmoves[player2pos].classList.remove("knight1");
  var moves=[];var index = 0;
  let stop = 0;
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
      if (arr[i][j] === player1pos) {
        stop ++;
        break;
        }
  }
  if (stop > 0) {
    break;
  }
}
moves = checkpos(i,j);
console.log("available position for player 1");
console.log(moves);
moves.forEach((el) =>  allmoves[el].classList.add("availableposition"));
moves.forEach((el) =>  allmoves[el].addEventListener('click',handleTurnTaken));
function handleTurnTaken(event){
  allmoves[player1pos].classList.remove("knight2");
  allmoves.forEach((el) => {
   if(el ===event.target){
     player1pos = index;
   }
   index++;
  });
  event.target.classList.add("knight2");
  moves.forEach((el) =>  allmoves[el].removeEventListener('click',handleTurnTaken));
  moves.forEach((el) =>  allmoves[el].classList.remove("availableposition"));
  console.log("player1 moved at position  "+player1pos);
  if (player1pos === 12) {
    document.getElementById('player1').innerText = "You Win";
    return;
  }
  player2turn();
}
}

function player2turn(){
  document.getElementById('player1').innerText = "";
  document.getElementById('player2').innerText = "Player 2 turn";
  var moves=[];var index = 0;
  let stop = 0;
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
      if (arr[i][j] === player2pos) {
        stop ++;
        break;
        }
  }
  if (stop > 0) {
    break;
  }
}
moves = checkpos(i,j);
console.log("available position for player 2");
console.log(moves);
moves.forEach((el) =>  allmoves[el].classList.add("availableposition"));
moves.forEach((el) =>  allmoves[el].addEventListener('click',handleTurnTaken));
function handleTurnTaken(event){
  allmoves[player2pos].classList.remove("knight1");
  allmoves.forEach((el) => {
   if(el ===event.target){
     player2pos = index;
   }
   index++;
  });
  event.target.classList.add("knight1");
  moves.forEach((el) =>  allmoves[el].removeEventListener('click',handleTurnTaken));
  moves.forEach((el) =>  allmoves[el].classList.remove("availableposition"));
  console.log("player2 moved at position  "+player2pos);
  if (player2pos === 12) {
    document.getElementById('player2').innerText = "You Loose";
    return;
  }
  player1turn();
}
}
/*function pressed(){
allmoves[1].classList.add("availableposition");
allmoves[7].classList.add("block");
}*/
