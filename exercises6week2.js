// LOOPING

// 1. Melakukan Looping Menggunakan While

var indeks = 2;
var limit1 = 20;
var limit2 = 0;
var increment = 2;

console.log('LOOPING PERTAMA');

// KONDISI WHILE 1
while (indeks <= limit1) {
  console.log(indeks + ' I Love Coding')
  indeks += increment;
}

console.log('LOOPING KEDUA')
indeks = indeks - 2;

// KONDISI WHILE 2
while (indeks > limit2) {
  console.log(indeks + ' I will become fullstack developer')
  indeks -= increment;
}

// 2. Melakukan Looping Menggunakan For

var indeks = 2;
var limit1 = 20;
var limit2 = 0;
var increment = 2;

console.log('LOOPING PERTAMA')

// KONIDISI FOR 1
for(indeks; indeks <= limit1; indeks += increment) {
  console.log(indeks + ' I Love codeng');
}

console.log('LOOPING KEDUA')
indeks = indeks - 2;

// KONDISI FOR 2
for(indeks; indeks > limit2; indeks -= increment) {
  console.log(indeks + ' I will become fullstack developer')
}

// 3. Angka Ganjil dan Genap

// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
//     Apabila angka counter adalah angka genap, tuliskan GENAP
//     Apabila angka counter adalah angka ganjil, tuliskan GANJIL


var num = 99;

for(i = num; i <= 100; i++){
  if((i % 2) === 0){
    console.log('Genap');
  }else{
    console.log('Ganjil');
  }
}

// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:
//     Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
//     Apabila angka counter adalah kelipatan 3 dengan pertambahan 2,
//     kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
//       "3 kelipatan 3" dan seterusnya.

// Untuk pertambahan counter 2

for(i = 1; i <=100; i+=2){
  var counter = i;
  if((counter % 3)=== 0){
    console.log('3 KELIPATAN 3');
  }
}

// Untuk pertambahan counter 5

for(i = 1; i <=100; i+=5){
  var counter = i;
  if((counter % 6)=== 0){
    console.log('6 KELIPATAN 6');
  }
}

// Untuk pertambahan counter 9

for(i = 1; i <=100; i+=9){
  var counter = i;
  if((counter % 10)=== 0){
    console.log('10 KELIPATAN 10');
  }
}
