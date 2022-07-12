//implement map function using reduce
const arr = myMap([1,2,3], (item) => item.toString())








































function myMap(arr, mapFunc) {
  return arr.reduce((acc, curr) => [...acc, mapFunc(curr)], []);
}