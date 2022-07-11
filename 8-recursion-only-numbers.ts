type User = {
  name: string;
  email: string;
  isAdmin?: boolean;
  address: {
    city: string;
    streent: string;
    zip: number;
  }
};

type DeepPartial<T> = { [P in keyof T]: T[P]};

type NewUserType = DeepPartial<User>;

const user: NewUserType = {
    name: "tsachi",
    email: undefined,
    address: {

    }
}
