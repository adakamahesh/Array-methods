//Object.assign()
const target = { a: "mahesh", b: 'sriman'};
const source = { b: 'sri', c: 'siva' };//this is object creation
const returnedTarget = Object.assign(target, source);//this is used to all the source object is assign to the target object
console.log(target);
// Object.create()
const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };

const me = Object.create(person);
me.name='mahesh';
me.isHuman=true;
me.printIntroduction();
//Object.entries()
const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
//Object.is()->this is used to compare the values and give the output is true or false
console.log(Object.is('1', 1));
console.log(Object.is(NaN, NaN));
const obj = {};
console.log(Object.is(obj, {}));
//Object.values()->this is used to displat the all values of object
const object = {
  a: 'somestring',
  b: 42,
  c: false,
};
console.log(Object.values(object));