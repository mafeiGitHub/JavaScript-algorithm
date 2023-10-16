function red() {
    console.log('red')
}

function green() {
    console.log('green')
}

function yellow() {
    console.log('yellow')
}
// 要求：红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次。
/* const light = function(timer, cb) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb()
            resolve()
        }, timer);
    })
}

const step = function() {
    Promise.resolve().then(() => {
        return light(3000, red)
    }).then(() => {
        return light(2000, green)
    }).then(() => {
        return light(1000, yellow)
    }).then(() => {
        return step()
    })
}

step() */

function red() {
    console.log('red')
}
function green() {
    console.log('green')
}
function blue() {
    console.log('blue')
}

function sleep(timer) {
    return new Promise((resovle, reject) => {
        setTimeout(resovle, 3000);
    })
}

async function task() {
    while (1) {
        await sleep(1000);
        red();
        await sleep(2000);
        blue();
        await sleep(3000);
        green();
    }
}
task()