// 1. it is not reccomended to use enums
// 2. a better pattern for "enums" using union types

// type Brand = "Outbrain" | "Taboola"

enum Brand {
  Outbrain = "Outbrain",
  Taboola = "Taboola",
}

function getBrand(b: Brand) {
  return b
}


getBrand("Outbrain")