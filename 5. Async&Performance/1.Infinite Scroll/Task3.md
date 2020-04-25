# Practical task for YDKJS | kottans Course 

* _**Themas**_ 
     * this
     * Scope
     * Prototypes
     * Async

### Refreshing our knowledge

1. What prototypes will be installed in objects after executing this code?

```
let obj1 = new Object(),
let obj2 = {},
let obj3 = Object.create(null),
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Object.prototype Object.prototype null

</details>

2. What  will be the result after executing this code?

```
var func = function() {
  this.x = 3;
  (function() {
    this.x = 5; 
  })();
  console.log(this.x);
};

func();
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  3  
</details>

3. What  will be the result after executing this code?

```
let film = {name: "Batman"};
function newFilm (film){
 film = {name: "DuckTales"};
}
newFilm(film);
console.log(film.name);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Batman 
</details>

4. Where is the wrong answer?

```
1. let obj = new Object ()
2. var obj = new Object {}
3. let obj = new Object ()
4. let obj = {}
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  2
  
</details>

5. All in JavaScript are

```
1. function && objects
2. primitives || object
3. only object
4. array || object
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  2
  
</details>

6. What will be the result after executing this code?

```
let a = 25;
(function canExecute(){
 console.log("value of a is:", a);
 let b = 100;
})();
console.log("value of a from out side is:", a);
console.log("value of b from out side is:", b);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  "value of a is: ```25```" "value of a from out side is: ```25```" 
  ## "ReferenceError: b is not defined"
  
</details>

7. What  will be the result after executing this code?

```
let a = 6;

if (a) {
  let a = 3;
  a += a;
}

console.log(a);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  6
  
</details>

8. What  will be the result after executing this code?

```
let return = 5;
let for = true;
let let = 'Whaaaat?'
-----------------------------------
let obj = {
  for: 1,
  let: 2,
  return: 3
}

console.log(obj.for + obj.let + obj.return);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  SyntaxError: Unexpected token 'return', 'for', 'let'
  ##  SyntaxError: Illegal return statement
  -----------------------------------------
  ## 6
  
</details>

9. What  will be the result after executing this code?

```
for (let i = 0; i < 6; i++){
 setTimeout(function (){
  console.log(i);
 }, 0);
}
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  0-5
  
</details>

10. What  will be the result after executing this code?

```
let x = 5;
x = (x++ ,
     x = addFive(x),
     x *= 2,
     x -= 5,
     x += 10);
function addFive(num){
    return num + 5;
}
console.log(x);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  27
  
</details>

11. What  will be the result after executing this code?

```
let obj = new Object();
console.log(obj.a);
obj.a = 5;
console.log(obj.a);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  undefined
  ##  5
  
</details>

12. What  will be the result after executing this code?

```
var foo = function(){ 
   return 
       { 
            a: 1, 
            b: 2, 
            c: 3 
       } 
} 
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Uncaught SyntaxError: Unexpected token ':'
  
</details>


13. Modify the up, down, and showStep methods code so that they can be priced out, for example:
stepper.up (). up (). down (). showStep ();

```
let stepper = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep() {
    console.log( this.step );
  }
}
```

<details>
  <summary>Correct ANSWER is...</summary>
 
 ``` 
let stepper = {
  step: 0,
  up() {
    this.step++;
    return this; // <--
  },
  down() {
    this.step--;
    return this; // <--
  },
  showStep() {
    console.log( this.step );
    return this; // <--
  }
}

stepper.up().up().down().up().down().showStep(); // 1
 ```
 
</details>


14.  Will be executed this code?

```
let user = {
  name: "Simpson",
  go: function() { console.log(this.name) }
}

(user.go)() 
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  ReferenceError: user is indefined
  ```
  let user = {
      name: "Simpson",
      go: function() { console.log(this.name) }
   }; <--
   (user.go)(); <--
</details>


15. What  will be the result after executing this code?

```
let a = 20;
(function () {
  let b = 20;
  a = '11';
    (function () {
      let c = 2;
      console.log((a+b)/c);
  })();
})();
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  560
  
</details>

16. What  will be the result after executing this code?

```
"use strict"
const filmDetails = {
    name: "Dark Knight",
    filmed: 2008,
    getName(){
     return this.name
    },
 isWatched: true
}

console.log(filmDetails.getName())
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Dark Knight
  
</details>

17. Which condition should be done for executing this code?

```
function A() { ... }
function B() { ... }
let a = new A;
let b = new B;
console.log( a == b );
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Example
  ```
  let arr = [];
  function A() { return arr; }
  function B() { return arr; } 
  let a = new A; 
  let b = new B;
  ```
</details>

18. Which condition should be done for executing this code?

```
beGlobal = "global"; 
function exec() { 
    console.log(beGlobal); 
    let beGlobal = "local"; 
    console.log(beGlobal); 
} 
exec(); 
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Uncaught ReferenceError: Cannot access 'beGlobal' before initialization
  
</details>

19. Which condition should be done for executing this code?

```
var arr = [3, 4, 5]; 
Array.prototype.each = function() {/*kind of magic 🔮*/}; 
  
for (var i in arr) { 
    console.log(i); 
} 
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ```
0 
1 
2 
each 
```
  
</details>

20. Which condition should be done for executing this code?

```
let man = function() {
        this.name = "Sam";
        let that = {};
        that.name = "Dan";
        let name = this.name + " && " + that.name;
        return name;
    }
    let user = new man();
    console.log(user.name);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Sam
  
</details>

21. Which condition should be done for executing this code?

```
let answ = "wrong"; 
function a() { return "1st"; }; 
function a(val) { 
    this.answ = "right"; 
    return "2nd"; 
    } 
console.log(new a().answ); 
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  right
  
</details>

22. Which condition should be done for executing this code?

```
function myFunc() { 
    var a = 1; 
    if ( a == 1 ) { 
        var b = 2; 
    } 
    return b; 
} 
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  2
  
</details>

22. 21. Which condition should be done for executing this code?

```
"use strict"
function car() {
  console.log(this.name)
}

var name = "ninja"
var obj1 = { name: "ferrari", car: car }
var obj2 = { name: "ford", car: car }

car()
obj1.car()
obj2.car()
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  error: Uncaught TypeError: Cannot read property 'name' of undefined
  #### More details in [developer.mozilla.org Securing_JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Securing_JavaScript)
   
</details>
