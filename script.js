//Q1. Write one example explaining how you can write a callback function ?

setTimeout(() => {
    console.log("This message is shown after 2 seconds");
}, 2000);

/*Q2. Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
Explain callback hell.
Numbers
1
2
3
4
5
6
7
*/

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            setTimeout(() => {
                console.log(4);
                setTimeout(() => {
                    console.log(5);
                    setTimeout(() => {
                        console.log(6);
                        setTimeout(() => {
                            console.log(7);
                        }, 1000 * 7);
                    }, 1000 * 7);
                }, 1000 * 5);
            }, 1000 * 4);
        }, 1000 * 3);
    }, 1000 * 2);
}, 1000);

/*Q3. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
Numbers
1
2
3
4
5
6
7
*/

const timeoutPromise = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

for (let number = 1; number <= 7; number++)
  timeoutPromise(number * 1000).then(() => console.log(number));

timeoutPromise(1000).then(() => console.log(1));
timeoutPromise(2000).then(() => console.log(2));
timeoutPromise(3000).then(() => console.log(3));
timeoutPromise(4000).then(() => console.log(4));
timeoutPromise(5000).then(() => console.log(5));
timeoutPromise(6000).then(() => console.log(6));
timeoutPromise(7000).then(() => console.log(7));

/*Q4. Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed 
then it should go to reject the state and catch the error and print Promise Rejected */

const p = (opinion) =>
new Promise((resolve, reject) => {
    if (opinion.toUpperCase() === "YES") resolve("Promise Resolved");
    else reject("Promise Rejected");
});

p("yes")
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

p("no")
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

//Q5. Create examples to explain callback function

const numbers = [10, 25, 57];
const callbackFunc = (n) => console.log(n);

numbers.map(callbackFunc);

//Q6. Create examples to explain callback hell function

const printMessageTwo = () => {
    setTimeout(() => {
        console.log("Prints this message after 2 secs");
    }, 2000);
};

const printMessageOne = () => {
    console.log("Function is called");
    printMessageTwo();
    console.log("I'm waiting");
};
  
printMessageOne();

//Q7. Create examples to explain promises function

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 1000);
});
  
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("failed");
    }, 1000);
});
  
promiseOne.then((status) => {
    console.log(status);
});
  
promiseTwo.catch((status) => {
    console.log(status);
});

//Q8. Create examples to explain async await function

const sleepPromise = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));

async function sleepyWork() {
    console.log("going to sleep for 1 second");
    await sleepPromise(1000);
    console.log("woke up after 1 second");
}

sleepyWork();

//Q9. Create examples to explain promise all function

const promiseOne1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First Promise Resolved");
        resolve(10);
    }, 1000);
});
  
const promiseTwo2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second Promise Resolved");
        resolve(20);
    }, 2000);
});
  
Promise.all([promiseOne1, promiseTwo2]).then((results) => {
    const total = results.reduce((previous, current) => previous + current);
    console.log(total);
});