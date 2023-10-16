function getSymNum(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        let str = String(i);

        if (str.length <= 1) continue;
        if (str.split("").reverse().join("") === str) {
            result.push(str);
        }
    }
    return result;
}
console.log(getSymNum(1,1000));
