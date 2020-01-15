class Parent {

  constructor() {
    console.log("Parent class constructor");
  }

  public greet() {
    console.log("I am parent kid!");
  }
}

class Child extends Parent {
  constructor() {
    super(); // access parent class constructor
    console.log("Child class constructor");
  }

  public greet() {
    super.greet(); // access parent class method
    console.log("I am child dad!");
  }
}

var parentClass = new Parent();
parentClass.greet();

var childClass = new Child();
childClass.greet();