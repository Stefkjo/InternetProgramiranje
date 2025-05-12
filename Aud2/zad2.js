var year = prompt("Input year");
year = parseInt(year);
if (!isNaN(year)) {
    if((year%4 == 0 && year%100 != 0) || year%400 == 0) {
        document.write(year + "is a lap year");
    } else {
        document.write(year + "is not a lap year");
    }
} else {
    document.write("Wrong input!")
}
