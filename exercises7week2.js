// [Exercises 7] Perulangan - Play with Asterisks
// 1. Menyusun Barisan Bintang

var counter = 0;

while(counter < 5){
  console.log('*')
  counter++
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping

var counterLuar = 0;
var jumlahBintang = 5;

while(counterLuar < jumlahBintang) {
  var counterDalam = 0;
  var bintang = '';

  while(counterDalam < jumlahBintang) {
    bintang += '*';
    counterDalam++;
  }
  console.log(bintang);
  counterLuar++
 }


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var counterLuar = 0;
var jumlahBintangLuar = 1;

while(counterLuar < jumlahBintangLuar) {
  var counterDalam = 0;
  var jumlahBintangDalam = 5;
  var bintang = '';

  while(counterDalam < jumlahBintangDalam) {
    bintang += '*';
    counterDalam++;
    console.log(bintang);
  }
  counterLuar++;
}















 
