class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key.getSignature();
  }
}

abstract class House {
  constructor(public door: boolean, protected key: Key) {}
  tenants: Person[] = [];
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(person: Person): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(person: Person) {
    if (person.getKey() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері відчинені");
    } else {
      console.log("Двері зачинені");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person);

house.comeIn(person);

export {};
