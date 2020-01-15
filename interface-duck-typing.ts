interface A {
  name: string;
  greet(): string;
}

class B implements A {
  name: string;
  greet(): string {
    throw new Error("Method not implemented.");
  }
}

var bObj = new B();

let someObj = {
  name: "Chandrakant",
  age: 25,
  greet: () => "Hello World!"
};

// TS allows to assign object as long as it can fit in structure
bObj = someObj; // Duck typing