let arr= [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]];
let BoardSize= localStorage.getItem('boardSize');
let row1= 4;
let row2= 9;
let row3= 14;
let row4= 19;
let row5= 24;
let row6= 35;
let rowLastNum= 5;
let winCon= 25;
let inxOfBox;
let x;
let y;
let stepArrx=[+2,+2,-2,-2,+1,+1,-1,-1];
let stepArry=[+1,-1,+1,-1,+2,-2,+2,-2];
let winCount= 0;
let n= 25;
let timeDelay= 2500;
let squares= document.querySelectorAll('.btn');
if (BoardSize==36){
  squares= document.querySelectorAll('.btn6');
  rowLastNum= 6;
  n= 36;
  winCon= 36;
 arr= [[0,1,2,3,4,5],[6,7,8,9,10,11],[12,13,14,15,16,17],[18,19,20,21,22,23],[24,25,26,27,28,29],[30,31,32,33,34,35]];
 row1= 5;
 row2= 11;
  row3= 17;
 row4= 23;
 row5= 29;
 row6= 35;
timeDelay= 3600;
}
// if(BoardSize==36){
//   arr= [[25,26,27,28,29,30],[31,32,33,34,35,36],[37,38,39,40,41,42],[43,44,45,46,47,48],[49,50,51,52,53,54],[55,56,57,58,59,60]];
//  row1= 30;
//  row2= 36;
//  row3= 42;
//  row4= 48;
//  row5= 54;
//  row6= 60;
// }
let randNum= Math.floor( Math.random()* n);

let gameO= document.querySelector('#gameOver')
let restartBtn=document.querySelector('#restart')

squares.forEach((s)=>{
    s.disabled=true;
  })
  
  let random= ()=>{
    squares[randNum].style.backgroundColor='yellow';
    squares[randNum].innerText="Tap here \n to Start"
    inxOfBox= randNum;
    squares[randNum].disabled=false;
  }

  random()

    squares.forEach((square)=>{ 
    square.addEventListener('click', ()=>{
    winCount++
    squares.forEach((square)=>{
      square.disabled=true;
    if(square.style.backgroundColor=="green"){  
      square.style.backgroundColor="#c7fff1"
    }
    })
  square.style.backgroundColor='red';
    clear()
  square.innerHTML='<img src="Untitled-1.png" alt="" id="knight">'
  let Arraye =  Array.from(squares)
  inxOfBox= Arraye.indexOf(square)
    console.log('inxofbox',inxOfBox)

let rowNum;
if(inxOfBox<=row1){
 rowNum=arr[0];
}
else if(inxOfBox<= row2){
  rowNum=arr[1];
}
else if(inxOfBox<= row3){
  rowNum=arr[2];
}
else if(inxOfBox<= row4){
  rowNum=arr[3];
}
else if(inxOfBox<= row5) {
  rowNum=arr[4];
}
else {
  rowNum=arr[5]
}
console.log(rowNum)
  let step=[];
    let count=0;


for(let i=0; i<8;){
  let x = arr.indexOf(rowNum);
  let y = rowNum.indexOf(inxOfBox);

  let X;
  let Y;
  a1 = stepArrx[i]
  b1 =stepArry[i]
  x= x+(a1);
  y= y+(b1);
 i++

  if( 0 <= x && x < rowLastNum && 0<= y && y< rowLastNum){
   X = arr[x];
   Y= X[y];
   step.push( Y)
  }
  else{
    count++;
      console.log(count);
  }
}

 for(let j of step){
  if(j || j==0){
    if(squares[j].style.backgroundColor != "red"){
  squares[j].style.backgroundColor='green';
    squares[j].disabled=false;

    }
        if(squares[j].disabled){
      count++;
      console.log(count);
    }
 }
 }

 if(count==8){
  gameOver()
 }

 if(winCount== winCon){
    win();

 }
})})

let clear= ()=>{
  squares.forEach((square)=>{
    square.innerHTML='';
    square.innerText='';
  })
}

let gameOver= ()=>{
  gameO.style.display="flex";
}
let i=0;
let win = ()=>{
  gameO.innerHTML="";
  gameO.innerText="YOU WON";
  gameO.style.color="green";
  gameO.style.display="flex";

let count = 0;
let square;
function incrementCount() {
  square= squares[count]
  square.style.backgroundColor="yellow"
  count++;
}

// Start the interval, calling incrementCount every 1 second (1000 milliseconds)
let timerId = setInterval(incrementCount, 100);

// After 5 seconds, stop the interval
setTimeout(() => {
  clearInterval(timerId);
  console.log("Interval stopped.");
}, timeDelay);
}
 restartBtn.addEventListener('click' , ()=>{
 
  squares.forEach((s)=>{
    s.disabled=true;
    s.style.backgroundColor='#c7fff1'
  })
   randNum= Math.floor( (Math.random()* n) + max)
    clear()
  random()
  gameO.style.display="none";
  winCount=0;

}
 )

 let popupbtn= document.querySelector('#ok');
 let howToPlayBtn= document.querySelector('#howToPlay');
 popupbtn.addEventListener('click', ()=>{
  popup.style.display="none";
 })
  howToPlayBtn.addEventListener('click', ()=>{
  popup.style.display="block";
 })