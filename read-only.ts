class ReadOnlyDemo {
  readonly b: string = "b"; // can assign value at time of declaration

  // can assign value in constructor
  constructor(readonly a: string) {
    console.log(a);
  }
}