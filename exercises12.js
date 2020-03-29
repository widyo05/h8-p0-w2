var menit = 0;
var jam = 0;
var menit2 = 0;
var bulat = 0;


function konversiMenit(menit) {

    jam = menit / 60;
    bulat = Math.floor(jam);
    menit2 = menit % 60;

    if (menit < 60 && menit2 < 10) {
        bulat = 0;
        console.log(bulat + ':' + '0' + menit2);
    } else if (menit < 60) {
        bulat = 0;
        console.log(bulat + ':' + menit2);
    } else if (menit > 60 && menit2 < 10) {
        console.log(bulat + ':' + '0' + menit2);
    } else {
        console.log(bulat + ':' + menit2);
    }

}
console.log(konversiMenit(126));


