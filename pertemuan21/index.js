console.log("Basic JavaScript")

//conditional JavaScript

// let firstName = "john";
// let isMarried = true;

// if(isMarried === true) {
//     console.log(firstname + " is married");
// } else {
//     console.log(firstName + " is not married");
// }

/*
    jika umur < 13 tahun maka tampilkan kategori anak-anak
    jika umur 13 sampai 16  tahun tampilkan kategori remaja
    jika umur 17 sampai 26 tahun tampilkan kategori anak muda
    jika umur 25 sampai 50 tahun tampilkan kategori orang tua
*/



// let firstname = "John";
// let job = "techer";

// switch (job) {
//     case "teacher":
//         console.log(firstname + " is a teacher");
//     break;
//     case "driver":
//         console.log(firstname + " is a driver");
//     break;
//     case "instructor":
//         console.log(firstname + " is a instructor");
//     break;
//     default:
//         console.log(firstName + " does something else");
//     break;
// }


// if (umur < 13 ){
//     console.log("kategori anak-anak");
// } else if (umur >= 13 && umur <17 ){
//     console.log("kategori remaja");
// }else if (umur >= 17 && umur <26){
//     console.log("kategori anak muda");
// }else if(umur >= 25 && umur <50){
//     console.log("kategori orang tua");
// }

// switch(){
//     case umur < 13:
//         console.log("kategori anak - anak");
//     break;
//     case umur >=13 && umur < 17 :
//         console.log("kategori remaja");
//     break;
//     case umur >=17 && umur < 26 :
//         console.log("kategori anak - anak");
//     break;
//     case umur >=25 && umur <50 :
//         console.log("kategori orang tua");
//     break;
// }

//JavaScript Function

// function helloWorld(){
//     console.log("Hellow World function declaration");
// }
// let age = 33;
// let helloWorld = function (nama) {
//     let age = 33;
//     console.log("Hello " + nama + ". umur saya adalah" + age + " tahun.");
// };
// console.log(age);
// helloWorld("Stenly Adam");

let classification = 25

if (classification < 18.5 ){
    console.log("Underweight");
} else if (classification >= 18.5 && classification <24.9 ){
    console.log("Normal range");
}else if (classification >= 25.0 && classification <29.9){
    console.log("Overweight");
}else if(classification >= 30.0){
    console.log("obese");
}else if(classification > 30.0 && classification <34.9){
    console.log("Class 1");
}else if(classification > 35.0 && classification <34.9){
    console.log("Class 2");
}else if(classification >= 40){
    console.log("Class 3");
}