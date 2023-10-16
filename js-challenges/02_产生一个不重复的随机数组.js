// 参数 数组长度、最小范围、最大范围
function randomUniqueArr(len, max, min) {
    if (max - min < len) return [];
    const result = [];
    while (result.length < len) {
        let num = Math.round(Math.random() * (max - min) + min);
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
console.log(randomUniqueArr(10, 30, 20));
