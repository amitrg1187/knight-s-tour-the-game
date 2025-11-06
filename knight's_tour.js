let backText = document.querySelector('#back').innerText;
let backbutton = document.querySelector('#back');
let nextbtn= document.querySelector('#next');
let gamebox5= document.querySelector('#gameBox5');
let gamebox6= document.querySelector('#gameBox6');

if(backText=='Back'){
backbutton.addEventListener('click', ()=>{
  history.go(-1);
})}
else{
  backbutton.addEventListener('click', ()=>{
  history.go(-4);}
)}

if(nextbtn)
{
nextbtn.disabled=true;
let rediobtn= document.querySelectorAll('.mendetorybtn');
rediobtn.forEach((btn)=>{
  btn.addEventListener('click' ,()=>{
    nextbtn.disabled=false;
  })
})
}

let boardSize;
let bordsize6= document.querySelector('#board_size_6');
if(bordsize6 !== null){
bordsize6.addEventListener('input', ()=>{
  localStorage.setItem('boardSize', 36)
})} 

let bordsize5= document.querySelector('#board_size_5');
if(bordsize5 !== null){
bordsize5.addEventListener('input', ()=>{
  localStorage.setItem('boardSize', 25)})} 


boardSize= localStorage.getItem('boardSize');
console.log(boardSize)

if(gamebox5){
if(boardSize == 36){
    gamebox5.style.display= 'none';
    gamebox6.style.display= 'flex';
    console.log(boardSize)
}
}
