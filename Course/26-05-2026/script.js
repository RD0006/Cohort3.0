var arr = [10, 20, 30, 40]

arr.forEach(function() {
    console.log("hello");
})

function run() {
    console.log("hello");
}
arr.forEach(run)

arr.forEach(function(val, idx) {
    console.log(val, idx)
})

var sum = 0
arr.forEach(function(elem) {
    sum += elem
})

console.log(sum)

var arr2 = arr.map(function(val) {
    // return val
    // return val * 2
    return val * val
})
console.log(arr2)

function double(x) {
    return x * 2
}
var arr2 = arr.map(double)
console.log(arr2)

var users = ["A", "B", "C", "D"]

var new_users = users.map(function(x) {
    return x + " Sharma"
})
console.log(new_users)

var arr = [5, -9, 6, -7, 8, 9, -10, -11]
var arr2 = arr.filter(function(val) {
    return val > 0
})
console.log(arr2)

var arr = [1600, 400, 500, 800]

var sum = arr.reduce(function(acc, val) {
    return acc + val
})
console.log(sum)

var max = arr.reduce(function(acc, val) {
    if (val > acc) return val
    else return acc
})
console.log(max)

var arr = [12, 99, 46, 76, 5]

var sum = arr.reduce(function(acc, val) {
    return acc + val
}, 0)
console.log(sum)

var arr = ["A", "B", "C", "D"]
var ans = arr.find(function(val) {
    return val == "A"
    // return val == "Z" will give undefined
})
console.log(ans)