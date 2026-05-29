var a = [10, 20, 30, 40]

console.log(a)
console.log(a[0])
console.log(a[5])

var arr = [1, 2.5, "hey", true]
console.log(arr)

var arr = [11, 44, 66, 22, 33, 88, 30, 87, 67]
console.log(arr.length)
console.log(arr[arr.length - 1])

arr[-1] = 99
console.log(arr)

var arr = [10, 20, 30, 40, 50, 60]

console.log(arr)

arr.push(99)
arr.push(100)
console.log(arr)

arr.pop()
arr.pop()
console.log(arr)

arr.unshift(1)
arr.unshift(2)
console.log(arr)

arr.shift()
arr.shift()
console.log(arr)

var arr = [15, 45, 78, 90, 78]
arr.shift()
arr.shift()
arr.unshift(99)
arr.pop()
arr.pop()
arr.push(89)
arr.unshift(67)
arr.push(89)
arr.unshift(1)
console.log(arr[3])

var arr = [11, 22, 33, 44, 55]

arr.splice(1, 1)
console.log(arr)

arr.splice(2, 2)
console.log(arr)

var arr = [11, 22, 33, 44, 55]
console.log(arr)

arr.splice(0, 0, 99)
console.log(arr)

arr.splice(3, 2, 66, 77)
console.log(arr)

var arr = new Array()
console.log(arr)

var arr = []
console.log(arr)

var arr = [
    [10, 20, 30, 40],
    [11, 22, 33, 44],
    [99, 88, 77, 66]
]

console.log(arr)
console.log(arr[1])
console.log(arr[1][2])

console.log(arr[2][2] + arr[0][1] + arr.length)

var arr = [10, 20, 30, 40]
arr.reverse()
console.log(arr)

var arr = [6, 3, 9, 2, 7, 9]
arr.sort()
console.log(arr)

var arr = [45, 10, 89, 100, 5, 30, 9]
arr.sort()
console.log(arr)
arr.sort((a, b) => a - b)
console.log(arr)
arr.sort((a, b) => b - a)
console.log(arr)


var arr = [10, 20, 30, 40]
for (let a = 0; a < arr.length; a++) {
    console.log(a)
    console.log(arr[a])
}