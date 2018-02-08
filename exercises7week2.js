// LOOPING - ASTERIKS
// 1. Menyusun Barisan Bintang

// Looping - FOR
console.log('-------------')
for(i = 1; i <= 5; i++){
  console.log('*')
}

// Looping - WHILE
console.log('-------------')
var counter = 0;

while(counter < 5){
  console.log('*')
  counter++
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping

// Looping - FOR
console.log('-------------')
for(j = 1; j <= 5; j++ ){
  var bintang = '';
  for(k = 1; k <= 5; k++){
    bintang += '*'
  }
  console.log(bintang)
}

// Looping - WHILE
console.log('-------------')
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

// Looping - FOR
console.log('-------------')
for(n = 1; n <=1; n++){
  bintang = '';
  for(m = 1; m <= 5; m++ ){
    bintang += '*'
    console.log(bintang)
  }
}


// Looping - WHILE
console.log('-------------')
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
