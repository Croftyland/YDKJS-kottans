# Practical task for YDKJS | kottans Course 

* _**Themas**_ 
     * AsyncPerformance

### Refreshing our knowledge

1. Rewrite this ```🔥callback hell 🔥```into ```🙏🏻Promise 🙏🏻``` 

```
chooseActivity(function(activities) {
  callFriend(activities, function(friends) {
    takeGame(friends, function(game) {
      haveFun(fun);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Gotcha!
  ##  See it next time 😈   
</details>

2✭. Rewrite this ```🔥callback hell 🔥```into ```🙏🏻Promise 🙏🏻``` 

``` 
'use strict';

let action = (delay, cb) => {
    if (isNaN(delay)) {
        cb('Not a number!');
    } else {
        console.log('acting...');
        setTimeout(() => {
            console.log('done');
            cb(null, 'Finished work');
        }, delay);
    }
};

let begin = () => {
    console.log('Calling action function');
    action(500, finish);
};

let finish = (err, res) => {
    if (res) {
        console.log(res);
    } else {
        console.log(err);
    }
};

start();

```
<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Gotcha!
  ##  See it next time 😈   
</details>

3. Create `Promise.sequence` function, that would chain **n** promises together. It's notation is `Promise.sequence(Array<Promise>): Promise`

Example of use:
```javascript
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  
	Promise.sequence([wait(1000), wait(2000), wait(3000)]).then(() => {
	   console.log(“Done after approx 6 sec :)”);
	});
```
<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Gotcha!
  ##  See it next time 😈   
</details>

4. Create `Promise.sequence` function, that would calculate Fibonacci sequence.

<details>
  <summary>Correct ANSWER is...</summary>
  
  ##  Gotcha!
  ##  See it next time 😈   
</details>
