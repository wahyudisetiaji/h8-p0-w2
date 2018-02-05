// [Exercises 6 - Week 2] Berlatih Perulangan di JavaScript
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

indeks = indeks - 2;

// KONDISI FOR 2
for(indeks; indeks > limit2; indeks -= increment) {
  console.log(indeks + ' I will become fullstack developer')
}




//3. Angka Ganjil dan Genap
//Problem 1 (Perulangan 1 - 100)

var flag = 1;

while(flag <= 100) {
    console.log(flag + ' - Counter');
    flag++;
}


//Problem 2 (Ganjil & Genap)

var flag = 101;

while(flag > 0) {
  flag = flag-2;
}
if (flag === 0)
    {console.log('Genap')}
  else
    {console.log('Ganjil')}


//Problem 3 (Counter 2)

var flag = 9;

while(flag > 0) {
  flag = flag-3;
}
if (flag === 0)
    {console.log('3 kelipatan 3')}
  else
    {console.log('')}

//Problem 3 (Counter 5)

var flag = 1;

while(flag > 0) {
  flag = flag-6;
}
if (flag === 0)
    {console.log('6 kelipatan 6')}
  else
    {console.log('')}


//Problem 3 (Counter 9)

var flag = 110;

while(flag > 0) {
  flag = flag-10;
}
if (flag === 0)
    {console.log('10 kelipatan 10')}
  else
    {console.log('')}
