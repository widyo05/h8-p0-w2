/* Soal 1 */
for (var i = 1; i <= 5; i++) {
    console.log('*');
}


/* Soal 2 */
var t = '';
for (var x = 1; x <= 5; x++) {
    for (var y = 1; y <= 5; y++) {
        t += '*';

    }
    console.log(t);
    t = '\n';
}

/* Soal 3 */
var s = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);