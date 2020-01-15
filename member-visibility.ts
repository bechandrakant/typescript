class Demo {
  constructor(public firstName: string, private lastName: string, protected age: number) {
    // no need to declare firstName and lastName at class level
    // no need to do this.firstName = firstName
    // protected avilable in same and child class
  }

  // getter
  public getLastName(): string {
    return this.lastName;
  }

  // setter
  public setLastName(lastName: string) {
    this.lastName = lastName;
  }
}