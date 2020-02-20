class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = 0
    }

    setAge(age) {
        this.age = age
        return this
    }

    setSex(sex) {
        this.sex = sex
        return this
    }

    setName(name) {
        this.name = name
        return this
    }

    hello() {
        return `Hello. My name is ${this.name}. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
    }

}

/*solution*/

class Dinglemouse {
    constructor() {
        this.age=true
        this.name=true
        this.sex=true
        this.agePos=0
        this.namePos=0
        this.sexPos=0
        this.arr=[]
    }
    setAge(age) {
        if (this.age){
            this.age=false
            this.agePos=this.arr.length
            this.arr[this.agePos]=` I am ${age}.`
        } else {
            this.arr[this.agePos]=` I am ${age}.`
        }
        return this
    }
    setSex(sex) {
        if (this.sex){
            this.sex=false
            this.sexPos=this.arr.length
            this.arr[this.sexPos]=` I am ${sex == 'M' ? "male" : "female"}.`
        } else {
            this.arr[this.sexPos]=` I am ${sex == 'M' ? "male" : "female"}.`
        }
        return this
    }
    setName(name) {
        if (this.name){
            this.name=false
            this.namePos=this.arr.length
            this.arr[this.namePos]=` My name is ${name}.`
        } else {
            this.arr[this.namePos]=` My name is ${name}.`
        }
        return this
    }
    hello() {
        return `Hello.${this.arr.join``}`
    }
}
