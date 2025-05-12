var num = prompt("Input a number")
num = parseInt(num);
var o1 = 0, o2 = 0, o3 = 0;
while (!isNaN(num)) {
    if (num % 3 == 0) {
        o3++;
    } else if (num % 3 == 1) {
        o1++;
    } else if (num % 3 == 2) {
        o2++;
    }
    num = prompt("Input a number");
    num = parseInt(num);
}
document.write("You have entered <strong> " + o1 + "</strong> numbers that have 1 leftover.<br>");
document.write("You have entered <strong> " + o2 + "</strong> numbers that have 2 leftover.<br>")
document.write("You have entered <strong> " + o3 + "</strong> numbers that have 0 leftover.<br>")