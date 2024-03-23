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
//Object.entries()->this is used to display the all enteries of objecs
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
//Object.values()->this is used to display the all values in array forme of object 
const object = {
  a: 'somestring',
  b: 42,
  c: false,
};
console.log(Object.values(object));
//Object.defineProperties()->this is used to defines new or modifies directly on object
const object2 = {};
Object.defineProperties(object2, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});
console.log(object2.property1);
//Object.getOwnPropertyNames()->it returns of all properties found directly in a given object
//Object.keys()
const object3 = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.getOwnPropertyNames(object3));
//Object.hasOwn()->it is used to returns true if specified object has the indicated property aas its own property otherwise return false
//Object.prototype.hasOwnProperty()
const object4= {
  prop: 'exists',
};
console.log(Object.hasOwn(object4, 'prop'));
console.log(Object.hasOwn(object4, 'toString'));
