/* Soal 1 */
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);


/* soal 2 */
var word2 = 'wow JavaScript is so cool';
var firstWord2 = word2[0] + word2[1] + word2[2];
var secondWord2 = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
var thirdWord2 = word2[15] + word2[16];
var fourthWord2 = word2[18] + word2[19];
var fifthWord2 = word2[21] + word2[22] + word2[23] + word2[24];

console.log('firstWord : ' + firstWord2);
console.log('secondWord : ' + secondWord2);
console.log('thirdWord : ' + thirdWord2);
console.log('fourthWord : ' + fourthWord2);
console.log('fifthWord : ' + fifthWord2);


/* Soal 3 */
var word3 = 'wow JavaScript is so cool';
var firstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);

console.log('FirstWord : ' + firstWord3);
console.log('SecondWord : ' + secondWord3);
console.log('ThirdWord : ' + thirdWord3);
console.log('FouthWord: ' + fourthWord3);
console.log('FifthWord: ' + fifthWord3);

/*soal 4*/
var word4 = 'wow JavaScript is so cool';
var firstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14);
var thirdWord4 = word4.substring(15, 17);
var fourthWord4 = word4.substring(18, 20);
var fifthWord4 = word4.substring(21, 25);

var firstwordlength = firstWord4.length;
var secondwordlength = secondWord4.length;
var thirdwordlength = thirdWord4.length;
var fourthwordlength = fourthWord4.length;
var fifthwordlength = fifthWord4.length;

console.log('FirstWord : ' + firstWord4 + ', with length : ' + firstwordlength);
console.log('SecondWord : ' + secondWord4 + ', with length : ' + secondwordlength);
console.log('ThirdWord : ' + thirdWord4 + ', with length : ' + thirdwordlength);
console.log('FouthWord: ' + fourthWord4 + ', with length : ' + fourthwordlength);
console.log('FifthWord: ' + fifthWord4 + ', with length : ' + fifthwordlength);