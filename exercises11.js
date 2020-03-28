function balikKata(kata) {
    var kosong = '';
    for (var u = kata.length - 1; u >= 0; u--) {
        kosong += kata[u];
    }
    return kosong;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('Jhon Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));