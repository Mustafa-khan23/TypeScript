let numberValue: number = 1000;
//number (float and integers)

let bigintValue: bigint = 1000000n;
//bigint (usually use for big number values)

let isAvailable: boolean = true;

let stringValue: string = "I'm learning TypeScript";
//string Type for sentence

let array: number[] = [1, 2];
//array declaration with number type

let typedArray: [string, number] = ["M", 19];
//array with specific type declaration

let obj: object = {
  key: "value",
  key2: "value",
};
//Object declaration (key:value pairs)

let declaredObj: { name: string; age: number } = {
  name: "mustafa",
  age: 19,
};
//Object declared with specific type of data

let spread = { ...declaredObj };
console.log(spread);
