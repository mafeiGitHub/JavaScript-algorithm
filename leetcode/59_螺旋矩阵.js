// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let startX = startY = 0;//起始位置
  let loop = Math.floor(n / 2);//旋转圈数
  let mid = Math.floor(n / 2);//中间位置
  let offset = 1;//控制每一层填充元素个数
  let count = 1;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))

  while (loop--) {
    let row = startX, col = startY;
    // 上行从左到右，左闭右开
    for (; col < startY + n - offset; col++) {
      res[row][col] = count++;
    }
    //右从上到下
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    }

    for (; col > startY; col--) {
      res[row][col] = count++;
    }
    //右从上到下
    for (; row > startX; row--) {
      res[row][col] = count++;
    }
    startX++;
    startY++;
    offset += 2;
  }
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;

};
let n = 4;
console.log(generateMatrix(n));