/* 
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 穷举法 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
}
var nums = [2, 7, 11, 15]
var a = twoSum(nums, 9)
console.log(a);
