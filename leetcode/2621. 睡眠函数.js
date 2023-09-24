/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise((s)=>setTimeout(s,millis))
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
let millis = 200
console.log(sleep(millis))