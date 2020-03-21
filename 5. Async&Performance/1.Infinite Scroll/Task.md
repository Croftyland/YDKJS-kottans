# Practical task for YDKJS | kottans Course 

* _**Themas**_ 
     * AsyncPerformance
     * Prototype
     * this

### Refreshing our knowledge

1. What will be a result of ```console.log``` ?

```
(function bar(a,b,c) {
console.log(a,b,c,arguments)}).bind({},1,2)(3,2,1)
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  1 2 3
  ##  1 2 3 2 1   
</details>

2. What will be a result of ```console.log``` ?

``` 
function y() {
  console.log(this.length);
}

let x = {
  length: 5,
  method: function(y) {
          arguments[0]()
    }
}

x.method(y,1) 
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  2 
</details>

3. What will be a result of ```console.log``` ?
```
(function () {
    'use strict';
    
    function Foo () {
        this.counter = { i : 0};
        this.counter2 = 0;
    }

    function Bar() {    
    }

    let foo = new Foo();
    Bar.prototype = foo;

    Bar.prototype.sayMeow = function () {  
        console.log('sayMeow(): counter1 =',
                    this.counter.i,
                    ', counter2 =',
                    this.counter2,
                    '\n');
        this.counter.i += 1;
        this.counter2 += 1;
    };

    let kitty = new Bar();
    let cat = new Bar();

    foo.sayMeow();
    kitty.sayMeow(); 
    cat.sayMeow();
    foo.sayMeow();
}());
```

<details>
  <summary>Correct ANSWER is...</summary>
  
   ```
    sayMeow(): counter1 = 0 , counter2 = 0 

    sayMeow(): counter1 = 1 , counter2 = 1 

    sayMeow(): counter1 = 2 , counter2 = 1 

    sayMeow(): counter1 = 3 , counter2 = 1 
  ``` 
</details>

4.  What will be a result of ```console.log``` ?
```
let girl = {
    name:'Magda',
    birthday: {
      date: 1,
      month: 'April'
   }  
};

let boy = {...girl};
boy.name = 'Kyryl';
boy.birthday.date = 31;

console.log(boy);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
   ```{name: "Kyryl", birthday: { birthday: date: 31, month: "April" } ```
</details>

5.  What will be a result of ```console.log``` ?
```
function Car(name) {
  this.name = name;
}
Car.prototype.start = function() {
  return "engine of" + this.name + " starting...";
};
let nissan = new Car('Micra');
let ford = new Car('Fiesta');
ford.drive = function() {
  console.log(this.start() + 'is driving away');
};

console.log(nissan.__proto__ === Car.prototype);   
console.log(nissan.__proto__ === ford.__proto__);     
console.log(nissan.constructor === Car);            
console.log(nissan.constructor === ford.constructor); 
console.log(nissan.__proto__ === Object.getPrototypeOf(nissan)); 
console.log(ford.__proto__ === ford.constructor.prototype);  
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ```
  console.log(nissan.__proto__ === Car.prototype);                  //true   
  console.log(nissan.__proto__ === ford.__proto__);                 //true
  console.log(nissan.constructor === Car);                          //true
  console.log(nissan.constructor === ford.constructor);             //true
  console.log(nissan.__proto__ === Object.getPrototypeOf(nissan));  //true
  console.log(ford.__proto__ === ford.constructor.prototype);       //true
  ```
</details>

### Promises 

1. What will be a result of ```console.log``` ?

```
function caserUpper(val) {
  return new Promise((resolve, reject) => {
    resolve(val.toUpperCase());
  });
}

async function msg(x) {
  try {
    const msg = await caserUpper(x);
    console.log(msg);
  } catch(err) {
    console.log('Ohh no:', err.message);
  }
}

msg('Hello'); 
msg(34); 
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## HELLO
  ## Ohh no: val.toUpperCase is not a function 
</details>

2. What will be a result of ```console.log``` ?
```
const w = new Promise((res, rej) => {
  setTimeout(() => rej('wowow'), 2000);
})

w.then(
  () => console.log('Chained: fullfilled#1 😁'),
  () => console.log('Chained: rejected#1 🥺')
).then(
  () => console.log('Chained: fullfilled#2 😁'),
  () => console.log('Chained: rejected#2 🥺')
);

w.then(
  () => console.log('Unchained: fullfilled#1 😁'),
  () => console.log('Unchained: rejected#1 🥺')
);
w.then(
  () => console.log('Unchained: fullfilled#2 😁'),
  () => console.log('Unchained: rejected#2 🥺')
);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ```
   Chained:   rejected#1 🥺
   Unchained: rejected#1 🥺
   Unchained: rejected#2 🥺
   Chained:   fullfilled#2 😁
  ```
  
</details>

3. What will be a result of ```console.log``` ?
```
function bar(){
    console.log(1);
    setTimeout(()=> console.log(3));
    Promise.resolve(2).then(d => console.log(d));
    console.log(4);
    return 5;
  } 

bar();
```

<details>

  <summary>Correct ANSWER is...</summary>
  
  ## 1 4 2 5 3 //Chrome
  ## 1 4 5 2 3 //Firefox
</details>

4. What will be a result of ```console.log``` ?
```
let w = new Promise((resolve, reject) => {
  reject(Error('Sound of da 👮🏻‍♂️!'))
})
w.catch(error => console.log(error.message))
w.catch(error => console.log(error.message))
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## Sound of da 👮🏻‍♂️!
  ## Sound of da 👮🏻‍♂️!  
</details>

5. What will be a result of ```console.log``` ?

```
let p = new Promise((resolve, reject) => {
  return Promise.reject(Error('Sound of da 👮🏻‍♂️!'))
})
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))
```
<details>
  <summary>Correct ANSWER is...</summary>
  
  ## UnhandledPromiseRejectionWarning
</details>

6. What will be a result of ```console.log``` ?
```
let r = new Promise((resolve, reject) => {
    reject(Error('Sound of da 👮🏻‍♂️!'))
  })
  .catch(error => console.log(error))
  .then(error => console.log(error))
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## Error: Sound of da 👮🏻‍♂️!
  ## undefined
  
</details>

7. What will be a result of ```console.log``` ?
```
let t = new Promise((resolve, reject) => {
    reject(Error('Sound of da 👮🏻‍♂️!'))
  })
  .catch(error => console.log(error.message))
  .catch(error => console.log(error.message))
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## Sound of da 👮🏻‍♂️!
  ## undefined
</details>

8. What will be a result of ```console.log``` ?
```
new Promise((resolve, reject) => {
    resolve('Success!')
  })
  .then(() => {
    throw Error('No 🙅🏻‍♀️!')
  })
  .catch(error => {
    return "🤦🏻‍♂️🤦🏻‍♂️🤦🏻‍♂️"
  })
  .catch(error => console.log(error.message))
```
<details>
  <summary>Correct ANSWER is...</summary>
  
  ## Promise {<resolved>: "🤦🏻‍♂️🤦🏻‍♂️🤦🏻‍♂️"}; 
</details>

9. What will be a result of ```console.log``` ?
```
Promise.resolve('Omg!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })
```
<details>
  <summary>Correct ANSWER is...</summary>
  
  ## OMG!  
</details>

10. What will be a result of ```console.log``` ?
```
Promise.resolve('Omg!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
    return data
  })
  .then(console.log)
```
<details>
  <summary>Correct ANSWER is...</summary>
  
  ## OMG!
  ## OMG! 
</details>

11. What will be a result of ```console.log``` ?
```
Promise.resolve('Party🤩!')
  .then(data => {
    data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## undefined  
</details>

12. What will be a result of ```console.log``` ?
```
Promise.resolve('Success!')
  .then(() => {
    throw Error('No 🙅🏻‍♀️!')
  })
  .catch(error => {
    return '🤦🏻‍♂️🤦🏻‍♂️🤦🏻‍♂️'
  })
  .then(data => {
    throw Error('Sound of da 👮🏻‍♂️!')
  })
  .catch(error => console.log(error.message))
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## Sound of da 👮🏻‍♂️!  
</details>

### Async/Await

1. Here is a 'mistake'. Find it and fix 😎 
```
async function hello() {
      return 'Hello, I'm a kottan!'
}

hello();
```

<details>
  <summary>Correct ANSWER is...</summary>
  
```
async function hello() {
  return 'Hello, I'm a kottan!';
}

const b = hello();
b.then(x => console.log(x));
```

</details>

2. What will be a result of ```console.log``` ?

```
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}
add1(10).then(v => {
  console.log(v);
});
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## 60
  ## 60  
</details>

### try/catch/finally

1. What will be a result of ```console.log``` ?
```
function example() {
  try {
    fail()
  }
  catch (e) {
    console.log("Will finally run?")
    throw e
  }
  finally {
    console.log("FINALLY RULES!")
  }
  console.log("This shouldn't be called 😒")
}

example()
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## Will finally run?
  ## FINALLY RULES!
  (Uncaught ReferenceError: fail is not defined)  
</details>

2. What will be a result of ```console.log``` ?
```
function example() {
  try {
    console.log('Kottano matata');
  }
  finally {
    console.log('What a phrase!');
  }
}

example()
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## Kottano matata
  ## What a phrase! 
</details>

3. What will be a result of ```console.log``` ?
```
function example() {
  try {
    console.log("I shall try and fail");
    fail();
  }
  catch (e) {
    console.log("Then be caught");
  }
  finally {
    console.log("And finally something?");
  }
}

example()
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## I shall try and fail
  ## Then be caught
  ## And finally something?  
</details>

4. What will be a result of ```console.log``` ?
```
function example() {
  try {
    console.log('I'm picking up laptop and going home.')
    return
  }
  finally {
    console.log('Finally?')
  }
}

example()
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ## I'm picking up laptop and going home.
  ## Finally?
</details>
