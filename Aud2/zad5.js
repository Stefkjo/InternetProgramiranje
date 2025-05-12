var x = prompt("Input the base:")
var n = prompt("Input the exponent");
x = parseInt(x);
n = parseInt(n);
var y = 1;
if (!isNaN(x) && !isNaN(n)) {
    for (i = 0; i < n; i++) {
        y = y * x;
    }
    document.write("Value of " + x + "^" + n + " is " + y);
}