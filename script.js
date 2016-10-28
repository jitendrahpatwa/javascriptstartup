// function class
function Fruits(){
  this.fruitname = "apple";//member variables
  this.price = 45;//member variables
  this.getAllFruits  = getData;//function
  this.singleFruit = single;
}
function getData(){
  return this.fruitname+" "+this.price;
}
function single(){
  return this.fruitname;
}
var obj = new Fruits();//class instance created
obj.fruitname = "banana";
console.log(obj.getAllFruits());//member funcrtion called
console.info(obj.singleFruit());


// prototype class
function Car(){
  this.display= function(){
    return "Arun ne car kharidi "+this.carname;
  };
}
Car.prototype.carname = "BMW";
Car.prototype.price = "$3.4Billion";
/*function cars(){
  return this.carname;
}*/
var c = new Car();
console.info(c.display());


//objects type class declaration
var Arun = {
  age:"23",
  address:"mankhurd",
  getData:function(){
    return this.age+" and lives in "+this.address;
  }
};
console.info("object type class");
console.info(Arun.getData());

//object with function in class
var Swapnil = new function(){
  this.address="Antop Hill";
  this.likes="amita";
  this.showSwapData=function(){
    return "Swapnil likes "+this.likes+" and lives in "+this.address;
  };
};
console.log(Swapnil.showSwapData());
