var x = 0;
var o = 0;
var cnt = 0;
var matrix = [
   [0,0,0],
   [0,0,0],
   [0,0,0]
];
function X(ed){
   var Rowindex = 0;
   var Colindex = 0;
 cnt++;
 if(cnt % 2!=0){
    var e = document.getElementById(ed);
    e.innerHTML="X"
 }else{
            var e = document.getElementById(ed);
    e.innerHTML="O"
 }
var takeId  = document.getElementById(ed).getAttribute("id");
console.log(takeId);
switch(takeId){
   case 'a1':
   Rowindex = 0;
   Colindex = 0;
   break;

   case 'a2':
   Rowindex = 0;
   Colindex = 1;
   break;

   case 'a3':
   Rowindex = 0;
   Colindex = 2;
   break;

   case 'a4':
   Rowindex = 1;
   Colindex = 0;
   break;

   case 'a5':
   Rowindex = 1;
   Colindex = 1;
   break;

   case 'a6':
   Rowindex = 1;
   Colindex = 2;
   break;

   case 'a7':
   Rowindex = 2;
   Colindex = 0;
   break;

   case 'a8':
   Rowindex = 2;
   Colindex = 1;
   break;

   case 'a9':
   Rowindex = 2;
   Colindex = 2;
   break;
}
if(cnt % 2!=0){
   matrix[Rowindex][Colindex] = "X";
}else{
   matrix[Rowindex][Colindex] = "O";
}
if((matrix[0][0]=='X'&&matrix[1][1]=='X'&&matrix[2][2]=='X')||
(matrix[0][2]=='X'&&matrix[1][1]=='X'&&matrix[2][0]=='X') ||
(matrix[0][0]=='X'&&matrix[1][0]=='X'&&matrix[2][0]=='X') ||
(matrix[0][1]=='X'&&matrix[1][1]=='X'&&matrix[2][1]=='X') ||
(matrix[0][2]=='X'&&matrix[1][2]=='X'&&matrix[2][2]=='X') ||
(matrix[0][0]=='X'&&matrix[0][1]=='X'&&matrix[0][2]=='X') ||
(matrix[1][0]=='X'&&matrix[1][2]=='X'&&matrix[1][2]=='X') ||
(matrix[2][0]=='X'&&matrix[2][1]=='X'&&matrix[2][2]=='X')
){
   alert("X won the match!!!");
   
   location.reload();
   return; 
}else if((matrix[0][0]=='X'&&matrix[1][1]=='X'&&matrix[2][2]=='X')||
(matrix[0][2]=='O'&&matrix[1][1]=='O'&&matrix[2][0]=='O') ||
(matrix[0][0]=='O'&&matrix[1][0]=='O'&&matrix[2][0]=='O') ||
(matrix[0][1]=='O'&&matrix[1][1]=='O'&&matrix[2][1]=='O') ||
(matrix[0][2]=='O'&&matrix[1][2]=='O'&&matrix[2][2]=='O') ||
(matrix[0][0]=='O'&&matrix[0][1]=='O'&&matrix[0][2]=='O') ||
(matrix[1][0]=='O'&&matrix[1][2]=='O'&&matrix[1][2]=='O') ||
(matrix[2][0]=='O'&&matrix[2][1]=='O'&&matrix[2][2]=='O')
){
alert("O won the match!!!");
location.reload();
return;
}else if(false)
{
   alert("Match Tied!!!");
   location.reload();
   return;
}
}