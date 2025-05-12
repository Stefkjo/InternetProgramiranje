var num = prompt("Input a number:");
num = parseInt(num);
var max = 0;
while(!isNaN(num)){
    if(num>max){
        max = num;
    }
    num = prompt("Input a number:");
    num = parseInt(num);
}
document.write("The maximum of the numbers is: <strong>" + max +"<\strong>");
//document
//navigator
//screen
//window