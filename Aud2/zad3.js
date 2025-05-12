var x = prompt("X:");
var y = prompt("Y:");
x = parseInt(x);
y = parseInt(y);
if (!isNaN(x) && !isNaN(y)) {
    if (x == 0 && y == 0) {
        document.write("Center");
    }else if(x == 0 && y != 0){
        document.write("Y axis");
    }else if(x != 0 && y == 0){
        document.write("X axis");
    }else if(x>0 && y>0){
        document.write("I");
    }else if(x<0 && y>0){
        document.write("II");
    }else if(x<0 && y<0){
        document.write("III");
    }else if(x>0 && y<0){
        document.write("IV");
    }
}else {
    document.write("Wrong input!");
}