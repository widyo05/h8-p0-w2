/* Soal 1 */
function shoutOut() {
    console.log('Halo Function');
}
console.log(shoutOut());

/* Soal 2 */
function calculateMultiply(num1, num2) {
    return num1 * num2;
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(5, 6);
console.log(hasilPerkalian);

/* Soal 3 */
function processSentence(name, age, address, hobby) {
    return ('Nama Saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobi ' + hobby);
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); 