function hello(){
  alert("Welcome in external js");
}
function dofun(){
  //alert("function called on button click");
  var text = document.getElementById('arun');

  //text.append(" Arun");
  //text.insertAdjacentHTML("beforeend","Arun");
  //text.prepend("Arun");
  text.after("arun prjapati sangle");
  text.before(" swapnil ");
}
//function clicktosubmit(){

//}



var clicktosubmit = function(){
  //  document.getElementById("myform").submit();
    console.log(document.getElementById("name").value);///$("#name").val();
    console.log(document.getElementById("city").value);//$("#city").selectedValue;
    document.getElementById('arun').style.color = "#b3b3b3";
    document.getElementsByClassName("abc").append(" hi buddy");
}


var arr = ["arun","jaiswar","patel"];
console.log(arr[1]);

var arr2 = new Array("arun","jaiswar","patel");
console.log(arr2[2]);
var arr3=[];
arr3[0] = "ABC";
//arr3[1] = "hjh";
arr3[2] = "YDS";

console.error(arr3[0]+arr3[1]+arr3[2]);


var data = '{"employees":[{"firstName":"John","lastName":"Doe" },{"firstName":"Anna","lastName":"Smith" },{"firstName":"Peter","lastName":"Jones" }]}';

var obj = JSON.parse(data);
console.log(obj.employees[0].firstName);

document.getElementById('abc').innerHTML = obj.employees[0].firstName;
