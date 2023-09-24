// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let res = new Array(n).fill(0);//创建一个数组并初始化为0
  let i = 0; j = n - 1; k = n - 1;
  while (i <= j) {
    let left = nums[i] * nums[i];
    let right = nums[j] * nums[j];
    if (left <= right) {
      res[k] = right;
      k--;
      j--;
    }
    else {
      res[k] = left;
      k--;
      i++;
    }
  }
  return res;
};
let nums = [-4, -1, 0, 3, 10]
console.log(sortedSquares(nums));
/* 
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]

*/