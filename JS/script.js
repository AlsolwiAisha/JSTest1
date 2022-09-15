//display the sum of two virables in the console
let x=10;
let y=12;
let z=x+y;

console.log(z);//view in the console
document.write(z); // view in my page

var Class= document.getElementsByClassName('action');
function checkC(){
       Class[1].checked=false;
  
}
function checkF(){
        Class[0].checked=false;

}
function F() {
    let v1=document.querySelector('#Ctxt').value;
    let  v2,str1,str2;

    if (Class[0].checked) {
        v2=(v1*1.8)+32;//دالة حساب الفهرنهايت بدلالة الدرجة المئوية
     str1=" C is ";
     str2=" F";
    }
    
    else {
        v2=(v1-32)/1.8;//دالة حساب الدرجة المئوية بدلالة الفهرنهايت
        str1=" F is ";
        str2=" C";
     }
     document.querySelector('#f').innerHTML= v1+ str1+v2.toFixed(1) +str2;
  }
