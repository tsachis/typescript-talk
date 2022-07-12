// TypeScript's type system is structural vs a nominal type system in most languages 

class Person {
  name: string
}

class Book {
  name: string
}

const p: Person = new Book()
