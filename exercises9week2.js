// FUNCTION
// TUGAS 1

function shoutOut() {
  return 'Halo Function!'
}

console.log(shoutOut())


// TUGAS 2

function calculateMultiply(num1, num2) {
  return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


// TUGAS 3

function processSentence(nama, age, address, hobby) {
  return 'Nama saya ' + nama + ', umur saya ' + age + ' tahun,' + ' alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby + '!';
}

var nama = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogjakarta';
var hobby = 'gaming';

var fullSentence = processSentence(nama, age, address, hobby)
console.log(fullSentence);
