// A nominal type system means that each type is unique and even if types have the same data you cannot assign across types. TypeScript's type system is structural, which means if the type is shaped like a duck, it's a duck.

class Person {
  name: string
}

class Book {
  name: string
}

const p: Person = new Book()
