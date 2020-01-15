// T is a generic type, its better than 'any' because it preserves type
function echo<T>(arg: T): T {
  return arg;
}

var x = echo(1);

class DemoParent {
  constructor(public firstName: string, public lastName: string) {

  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

class ChildA extends DemoParent { }

class ChildB extends DemoParent { }

// Generic type of DemoParent or its sub class
function getFullName<T extends DemoParent>(arg: T): T {
  return arg;
}

var tempChildA = new ChildA("a", "a");
var tempChildB = new ChildB("b", "b");

var tempA = getFullName(tempChildA);
var tempB = getFullName(tempChildB);

