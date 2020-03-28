var nama = 'Danu';
var peran = 'Tabib';

if ((nama == 'Mikael') && (peran == '')) {
    console.log('Halo ' + nama + ' ' + 'Pilih peranmu untuk mulai game');
}
else if ((nama == 'Nina') && (peran == 'Ksatria')) {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Ksatria ' + nama + ', ' + 'Kamu dapat menyerang dengan senjatamu');
}
else if ((nama == 'Danu') && (peran == 'Tabib')) {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Tabib ' + nama + ', ' + 'kamu akan membantu temanmu yang terluka.');
}
else if ((nama == 'Zero') && (peran == 'Penyihir')) {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Penyihir ' + nama + ', ' + 'ciptakan keajaiban yang membantu kemenanganmu!');
}
else {
    console.log('Isikan Nama dan Peran');
}
