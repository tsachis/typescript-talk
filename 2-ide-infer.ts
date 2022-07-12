//example for how typescript compiler infers your code

let x = 20;







































function toLowercase(val: string | number) {
  if (typeof val === 'string') {
    return val.toLowerCase();
  } else {
    return val;
  }
}

