var a = 10;
// a = true; { error }

function greet(): string {
  return "hello";
}

// wrong, because x is of type any
var x;
x = 10;
x = true;