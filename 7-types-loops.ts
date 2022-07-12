//how can we loop over type properties?

type User = {
  name: string;
  email: string;
  isAdmin?: boolean;
}












































/// {[Prop in keyof User]: User[Prop]}
