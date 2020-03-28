var isi = '';
var jumx = 0;
var jumo = 0;

function xo(isi) {
    for (var i = 0; i <= isi.length; i++) {
        if (isi[i] === 'x') {
            jumx += 1;
        }
        else if (isi[i] === 'o') {
            jumo += 1;
        }

    }
    if (jumo === jumx) {
        return true;
    }
    else {
        return false
    }

}

console.log(xo('xxxooo'));
console.log(xo('oxoxx'));
