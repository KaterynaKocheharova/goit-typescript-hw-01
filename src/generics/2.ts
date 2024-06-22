// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти.
// Ці об'єкти містять поля AllType.
// Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType.
// Функція compare повинна повертати AllType.

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<U, keyof AllType>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const obj1: AllType = {
  name: "Object 1",
  position: 1,
  color: "red",
  weight: 10,
};

const obj2: AllType = {
  name: "Object 2",
  position: 2,
  color: "blue",
  weight: 15,
};

const result1 = compare(obj1, obj2);
console.log(result1);






