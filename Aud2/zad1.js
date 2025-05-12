var a = prompt("Input value for 'a'");
var b = prompt("Input value for 'b'");
a = parseInt(a);
b = parseInt(b);
if (!isNaN(a) && !isNaN(b)) {
    if (a > b) {
        document.write("Value of the maximum is " + a);
    } else {
        document.write("Value of the maximum is " + b);
    }
} else {
    document.write("Wrong input")
}
