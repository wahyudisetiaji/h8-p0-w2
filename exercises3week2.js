// Menggunakan If Else

var nama = 'Wahyudi';
var peran = 'Zero';

if (nama === ''){
  console.log('Nama harus diisi!');
}else if (peran === 'Ksatria'){
  console.log('Selamat datang di Dunia Proxtia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
}else if (peran === 'Tabib'){
  console.log('Selamat datang di Dunia Proxtia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka!')
}else if (peran === 'Zero'){
  console.log('Selamat datang di Dunia Proxtia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}else{
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
}
