const math = {
    result: 0,
    add: function (...args) {
        this.result += args.reduce((pre, cur) => pre + cur, this.result);
        return this;
    },
    minus: function (value) {
        this.result -= value;
        return this;
    },
    times: function (value) {
        this.result *= value;
        return this;
    },
    getResult: function () {
        return this.result;
    }
};
// test code
const result = math.add(2, 4).minus(3).times(2).getResult();
console.log(result); // 输出: 6