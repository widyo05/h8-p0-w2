/* Soal 1: */
console.log('LOOPING PERTAMA');
var i = 2;
while (i <= 20) {
    console.log(i + ' ' + '-' + ' ' + 'I love coding');
    i += 2;
    if (i == 22) {
        break;
    }
}
console.log('LOOPING KEDUA');
var j = 20;
while (j <= 20) {
    console.log(j + ' ' + '-' + ' ' + 'I will become fullstack developer');
    j -= 2;
    if (j == 0) {
        break;
    }
}



/* Soal 2: */
console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
    console.log(i + ' ' + '-' + ' ' + 'I love coding');
    if (i == 22) {
        break;
    }
}

console.log('LOOPING KEDUA');
for (var j = 20; j <= 20; j--) {
    console.log(j + ' ' + '-' + ' ' + 'I will become fullstack developer');
    if (j == 1) {
        break;
    }
}

/* Soal 3: */
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log('genap');
    }
    else {
        console.log('ganjil');
    }
}

var x = 1;
while (x <= 100) {
    if (x % 3 == 0) {
        console.log(x + ' ' + 'kelipatan 3');
    } else {
        console.log('""');
    }
    x += 2;
    if (x == 102) {
        break;
    }
}

var y = 1;
while (y <= 100) {
    if (y % 6 == 0) {
        console.log(y + ' ' + 'kelipatan 6');
    } else {
        console.log('""');
    }
    y += 5;
    if (y == 102) {
        break;
    }
}

var z = 1;
while (z <= 100) {
    if (z % 10 == 0) {
        console.log(z + ' ' + 'kelipatan 10');
    } else {
        console.log('""');
    }
    z += 9;
    if (z == 102) {
        break;
    }
}