//display the sum of two virables in the console
let x=10;
let y=12;
let z=x+y;

console.log(z);//view in the console

var Class= document.getElementsByClassName('action');
function checkC(){
       Class[1].checked=false;
  
}
function checkF(){
        Class[0].checked=false;

}
//دالة حساب الدرجة المئويةوالفهرنهايت
function F() {
    let v1=document.querySelector('#Ctxt').value;
    let  v2,str1;

    if (Class[0].checked) {
        v2=(v1*1.8)+32;//دالة حساب الفهرنهايت بدلالة الدرجة المئوية
     str1=`${v1} C is ${v2.toFixed(1)} F`;
     }
    
    else {
        v2=(v1-32)/1.8;//دالة حساب الدرجة المئوية بدلالة الفهرنهايت
        str1=`${v1} F is ${v2.toFixed(1)} C`;
     }
     document.querySelector('#f').innerHTML= str1;
  }
//دالة حساب عمر الكلب بالنسبة لعمر الانسان
function calcuateDogAge(dogAge){
 return {
        _name:"bob",
       age:Number(dogAge*7)
    }
}
console.log(`Your doggie is ${calcuateDogAge("6").age} years old in dog years`)

//Homework of Day4 Arrays
const arr=["Orange","Apple","Pineapple","Grapes"]
document.querySelector("#filterarr").innerHTML=arr.filter(item=>item==="Orange"||item==="Grapes")
document.querySelector("#maparr").innerHTML=arr.map(item=>{return item})
document.querySelector("#findarr").innerHTML=arr.find(item=>item==="Apple")