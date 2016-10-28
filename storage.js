// Locale storage
var data = "arun";
localStorage.setItem("name",data);
console.log("Local Storage");
console.info(localStorage.getItem("name"));
var s = localStorage.getItem("name");
//alert(s);
var dd = document.getElementById("store");
dd.append(s);

// Session Storage
var dat = "swapnil";
sessionStorage.setItem("sname",dat);
console.log("Session storage value");
console.info(sessionStorage.getItem("sname"));

// JSON in localStorage
var test = [
  {
    'name':'Arun',
    'email':'arunjais@gmail.com',
    'contact':'+919099999999'
  }
];
localStorage.setItem("setjsonstorage",JSON.stringify(test));
console.log("JSON localStorage data");
console.info(JSON.parse(localStorage.getItem("setjsonstorage")));

var arra = new Array();
arra = JSON.parse(localStorage.getItem("setjsonstorage"));
var ddd = {'name':'swap','email':'swap@gmail.com'};
arra.push(ddd);
localStorage.setItem("setjsonstorage",JSON.stringify(arra));
console.log(arra);
console.log("json new data");;
console.log(JSON.parse(localStorage.getItem("setjsonstorage")));

for(var i=0;i<arra.length;i++){
  if(arra[i].name=="swap"){
    console.log(arra[i].email);
  }
}
