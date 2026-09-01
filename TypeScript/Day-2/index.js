"use strict";
/*
let a = 90;
a = 89;
a = 90;
console.log(a);
console.log("hello");
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Type Inference (self) and Annotation (given)
/*
let a = 90;
// a = "hello"
// error TS2322: Type 'string' is not assignable to type 'number'
// adapted on its own --- inference
// inference: first time, the data you pass - that data type assigned to variable
console.log(a);

let x = "hello";
// x = 90;
// Type 'number' is not assignable to type 'string'
x = "90"
console.log(x);
*/
// Annotation - we provide data type
/*
let x : string = "hello";
let a : number = 90;
*/
// Primitive data types
// string, boolean, number, undefined, bigint, symbol
/*
let val1 : string = "abc";
let val2 : boolean = true;
let val3 : number = 90;
let val4 : undefined = undefined;
let val5 : bigint = 94839723897498n;
let val6 : symbol = Symbol("hello");
*/
// Arrays - any number of data
/*
let arr1 : any[] = [5, 6, 7, 8, 9, 0, "hello", "hi", true, null, undefined];
let arr2 : number[] = [5, 6, 7, 8, 9, 0];
let arr3 : string[] = ["hello", "hi"];
let arr4 : boolean[] = [true, false, false, true];
*/
// Tuples - data type and number of elements required
/*
let tup1 : [number, number, string, boolean] = [56, 78, "hello", true];
let data : [{"name": string}, {"name": string}, {"name": string}] = [
    {"name": "hello"},
    {"name": "hello"},
    {"name": "hello"}
];
*/
// enums - options
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.USER;
// static type
// any, unknown, never
/*
    any: any data type
    unknown: any data type, but at the time of update --- problem
    never: nothing should come
*/
/*
let a : any = 90;
a = "hello";
a = true;
a = null;
*/
/*
let a : unknown = "hello";
console.log(a.toUpperCase()); // works in JS, error in TS
*/
/*
let y : never;
*/
// Union Type - more than one
/*
// example: variable that can take string and number
let x : string | number | boolean | bigint = "hello";
x = 90;
x = true;
x = 29309834094n;
// x = undefined;
*/
// Literal Type - type that we already have
/*
type Status = "pending" | "success" | "error";
let status : Status = "pending";
// let status : Status = "Damage";
*/ 
//# sourceMappingURL=index.js.map