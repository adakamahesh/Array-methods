const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruitscolors = ["red", "green", "Orange"];
console.log("The length of fruits:",fruits.length);//this is for find the length of array
console.log(fruits.at(-2));//this is used to find the element to array index
console.log(fruits.concat(fruitscolors));//this is used to combine two arrays
console.log(fruits.copyWithin(0,2));//this is used to copy whit in using array indix
const iterator1= fruits.entries()
console.log(iterator1.next().value);
console.log(iterator1.next().value);//this is used to entries with array index and array element
const array1 = [1, 30, 39, 29, 10];//this is array
const numbers = (currentValue) => currentValue < 40;//this is condition for checking below 40 numbewr
console.log(array1.every(numbers));//this is used to check every number in array
const result = fruitscolors.filter((fruitscolors) => fruitscolors.length > 4);//this used to filter the arrays
console.log(result);//this is for display the output from above 4 characters
const found = array1.find((element) => element > 10);//this is used to find the what we want by using element ,eliment propertys
console.log(found);
const isLargeNumber = (element) => element > 30;//this is logic for find the large number
console.log(array1.findIndex(isLargeNumber));//this is used to find the largnumbet index
const arr2 = [0, 1, [2, [3, [4, 5]]]];//this is array
console.log(arr2.flat());//flat is used to combine the arrays whith one time
console.log(arr2.flat(Infinity));//this is used to combain the arrays with infinity times
fruits.forEach((element) => console.log(element));//this is used to read the each element of array
console.log(array1.includes(10));//it is used to check the serching element is present are not in array
console.log(array1.indexOf(10));//this is used to find index of array element
console.log(fruits.join());//this is used to join the data of array
console.log(fruits.join('-'));//this is used to join the data in middle of elements present - symbol of array
const iterator = array1.keys();//this is used to store the array keys to iterator
for (const key of iterator) {
    console.log(key);
}//this is for loop used to display all the for loop
console.log(array1.map((x) => x*2));//this is used to find the element map
console.log(fruits.pop());//this is usesd to delete the last element of array
console.log(fruits.push('orange'));//this is used to add the element of array
fruits.sort();//this used to order(or) sort the data
console.log(fruits);