/**
*  ES5 -----------------------------------
*/

function Person(name, age) {
    this.name = name
    this.age = age
}

const p1 = new Person('王多多', 19)

// console.log(p1)


/**
 *  ES6 -----------------------------------
 *  class 是实现面向对象的语法糖
 *  每个class的内部 都有一个空的构造器 如果我们没有声明 就会使用这个默认的空构造器
 *  每当我们new 这个类的时候 会优先执行constructor中的代码
 *  [实例属性]: 通过new 出来的实例 访问到的属性
 *  [静态属性]: 通过构造函数直接访问的属性 通过static 创建静态属性
 */

class Animal { // 创建类
    constructor(name, age) { //构造器
        this.name = name // 实例属性
        this.age = age
        this.say = function () { // 实例方法
            console.log(this.name)
        }
    }

    static info = 'eee' // 静态属性
    static sayHi() { // 静态方法
        console.log(this.info)
    }

    sayHello() { // 原型方法

    }
}

const a1 = new Animal('大黄', 3)

// console.log(a1)
// console.log(Animal.info)
// Animal.sayHi()

class Dog extends Animal {
    constructor(name, age, category) {
        super(name, age)
        this.category = category
    }
}

const d1 = new Dog('西西', 13, '泰迪')
console.log(d1)