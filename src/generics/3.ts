// У вас є функція merge, яка поєднує два об'єкти.
// Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };

let mergedObj = merge(obj1, obj2);
console.log(mergedObj);
