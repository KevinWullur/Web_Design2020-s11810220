//Array

// let nilai = [90, 80, 75, 95, 85];

// for (let i = 0 ; i<nilai.length ; i++){
//     console.log("nilai = ", nilai[i] + 5);
// }

// console.log(nilai);

// // nilai[2] = 90;
// // console.log(nilai[nilai.length- 1 ]);

// let kevin = ["kevin", "wullur", 19, true];
// console.log(kevin[kevin.length - 1]);
// console.log(kevin);

// //toString()
// console.log(kevin.toString());
// //join
// console.log(kevin.join(" - "));

// //pop()
// kevin.pop();
// console.log(kevin.join(" - "));
// //push()
// kevin.push(true);
// kevin.push("hello");
// console.log(kevin.join(" - "));

// //shift()
// kevin.shift();
// console.log(kevin.join(" - "));
// //unshift()
// kevin.unshift("kevin")
// kevin.unshift("nama :")
// console.log(kevin.join(" - "));


//Latihan

//Spilce()
let komputer = ["monitor", "mouse", "cpu", "keyboard"];
komputer.splice(4, 0, "mic", "headset");
console.log(komputer);

//concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];
let makanan = buah.concat(sayur, biji);
console.log(makanan);

//Slice()
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);
console.log(cemilanGurih);
console.log(cemilanManis);

//Sort()
let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
buah.sort();
console.log(buah);
// Contoh array dengan tipe data number
let bilangan = [30, 1, 2, 3.5, 10, 100];
bilangan.sort();
console.log(bilangan);

//reverse()
//mengurutkan element array index terbesar ke terkecil
let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
buah.reverse();
console.log(buah);
//kombinasi sort() dan reverse()
let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
buah.sort().reverse();
console.log(buah);
