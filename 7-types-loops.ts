type User = {
  name: string;
  email: string;
  isAdmin?: boolean;
}

type NewType<T> = {[P in keyof T]: T[P]}

type NewUserType = NewType<User>;

