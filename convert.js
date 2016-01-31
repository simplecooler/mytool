// 与大多数编程语言一样，JavaScript中存在boolean类型，以供逻辑判断使用。不过，和很多其它编程语言不一样的是，JavaScript中存在Truthy值和Falsy值的概念 — 除了boolean值true、false外，所有类型的JavaScript值均可用于逻辑判断，其规则如下：
// 1.所有的Falsy值，当进行逻辑判断时均为false。Falsy值包括：false、undefined、null、正负0、NaN、”"。
// 2.其余所有的值均为Truthy，当进行逻辑判断时均为true。值得注意的是，Infinity、空数组、”0″都是Truthy值。


!!"" // false
!!0 // false
!!null // false
!!undefined // false
!!NaN // false

!!"hello" // true
!!1 // true
!!{} // true
!![] // true
