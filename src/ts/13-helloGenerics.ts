//Normal way
let numbers: number[] = [];
let names: string[] = [];

// non-Generics way: you find yourself duplicating
// code when defining new arrays.
numbers = new Array<number>();
numbers.push(1);
numbers.push(2);
// numbers.push('3'); //error

names = new Array<string>();
names.push('Jane');
names.push('John');
// names.push(42); //error

numbers.forEach(n => console.log(n));
names.forEach(n => console.log(n));
