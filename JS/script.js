//display the sum of two virables in the console
let x=10;
let y=12;
let z=x+y;

console.log(z);//view in the console
document.write(z); // view in my page

//دالة حساب الفهرنهايت بدلالة الدرجة المئوية
function F(){
   
    let cc=document.querySelector('#Ctxt').value;
    let ff=(cc*1.8)+32;
    document.querySelector('#f').innerHTML= cc+ "C is "+ff +" F";

//دالة حساب الدرجة المئوية بدلالة الفهرنهايت
}function C(){
   
    let ff=document.querySelector('#Ftxt').value;
    let cc=(ff-32)/1.8;
    document.querySelector('#c').innerHTML= ff+ "F is "+cc +" C";


}