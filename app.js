let firstInput=document.querySelectorAll('input')[0];
let firstresult=document.querySelectorAll('#result')[0];
let firstclick=document.querySelectorAll('#click')[0];

let secondInput=document.querySelectorAll('input')[2];
let secondInputresult=document.querySelectorAll('#result')[1];
let secondclick=document.querySelectorAll('#click')[1];


var reverseArr='';
function reverseWord(){
    if(firstInput.value){
      reverseArr='';


    let beforeReverseArr=firstInput.value.split('');

for(var i=beforeReverseArr.length-1;i>=firstInput.value.length-firstInput.value.length;i--){
       reverseArr+=beforeReverseArr[i];
}
        reverseArr =reverseArr;
      firstresult.innerHTML=reverseArr;
}
}

firstclick.onclick=reverseWord


function evenWord(){
  if(secondInput){
   var j='';
  var l=secondInput.value.split('');
  for(var i =0; i<l.length; i++){
       if(i%2===0){

        j +=l[i];

       }
  }
    secondInputresult.innerHTML=j;
  }

}
secondclick.onclick=evenWord;
