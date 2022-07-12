//how do we do recursion with type? (let's try to implement the DeepPartial type)

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  address: {
    city: string;
    street: string;
    zip: number;
  };
}

const partialTodo: Todo = {
  title: "make it partial",
};




























/// type DeepPartial<T> = {[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]};
