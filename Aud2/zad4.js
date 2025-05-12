var points = prompt("Input the number of points:");
points = parseInt(points);
if (!isNaN(points)) {
    if (points < 0 || points > 100) {
        document.write("Out of bounds!");
    } else if (points >= 0 && points <= 50) {
        document.write("5");
    } else if (points >= 51 && points <= 60) {
        document.write("6");
    } else if(points >= 61 && points <= 70) {
        document.write("7");
    } else if(points >= 71 && points <= 80){
        document.write("8");
    } else if(points >= 81 && points <= 90) {
        document.write("9");
    }else {
        document.write("10");
    }
}