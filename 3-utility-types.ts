//Record  https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

function updateTodo(todo: Todo, partialTodo: any): Todo {
  return { ...todo, ...partialTodo };
}

updateTodo(
  {
    title: "some title",
    description: "",
    completed: false,
  },
  {
    completed: true,
  }
);






























// type PartialTodo = Partial<Todo>

// type PickTodo = Pick<Todo, "title" | "completed">;

// type OmitTodo = Omit<Todo, "title" | "completed">;

// type ReadonlyTodo = Readonly<Todo>;

// function toString(obj: {[key: string]: any}) {
//   return JSON.stringify(obj);
// }

// toString({
//   id: 1,
//   name: "tsachi"
// });
