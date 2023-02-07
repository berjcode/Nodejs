// alert("Merhaba");


//  Eski kodun çalışabilirliğini garanti altına almak için çoğu düzenleme varsayılan olarak kapalı durumda gelir. 
//Bunları açmak için "use strict" kullanılmalıdır.


"use strict";



let name ="Abdullah"

//  alert( "Adım: "+name )


//Infinity : sonsuz sayı

//bigInt : İSTEĞE BAĞLI sayılar  belirtiriz.
const bigInt= 123456n ;


//Null boş, bilinmeyen değer
let age = null;

//undefined : özel bir değerdir. kendi başına null gibi ibr değerdir.
// herhangi bir değer atanmamıştır.

let value;

// alert(value);


//Obje: veri koleksiyonları ve karmaşık yapıları tutabilirler.



//typeof : argüman tipini bildirir.
// let x = 1;

// alert(typeof x)  //number

//symbol : eşşsiz tanımlama için kullanılır.


//tostring : stringe cevirmöe


// let x =1;
// alert(typeof(String(x)));


/* 
alert(Boolean(1)) //true

alert(Boolean("")) //false

*/
//Operand : + - *  vs işlemlerinin uygulandığı değerler. x,y gibi
// tek işlemden oluşursa unary denir.

// iki operand varsa  : binary operand denir. 
/* 
let x=1 

let y =2

alert(x - y )*/


//Karakter dizileri birleştirme işlemine :binary denir. + işlemi ile yapılır.
/*
let stringExpression = "Abdu"+"llah"
alert(stringExpression)*/


//let x= "23";
//let y= "12";

//alert(+x + +y)

//öncelik en son olan işlemdedir.
// let a= (1+2, 3+2)
// alert(a)


//Input Alma
// let age2 = prompt('Kaç Yaşındasın',12);

// alert(`Sen ${age2} yaşındasın`);


//Soru Sorma  , tamam basarsa true döner

// let test = confirm("İnsan Mısın?")


//if
// let sonuc = kosul ? deger1 : deger2;
// let girisIzni = (yas > 19) ? true : false;


//Example

// let age24 = confirm('Yaşın 18 den büyük mü ?')

// let example1 = (age24 == true)? alert("onaylandı") : alert("onaylanmadı");



//fot

// for(a=1; a> 10; a++)
// {

// }


//do while : koşul köntrolü sonda yapılır.



// let ax = 1;

// do{
//     alert(ax);
//     ax++;


// }while(ax < 3)

//Function

// function mesajGoster()
// {
//     return 2;
// }


// alert(mesajGoster())


//Kısa Fonksioyn Oluşturma

// let func = (arg1,arg2) => Expression


// let topla = (a,b) =>  a+b ;

